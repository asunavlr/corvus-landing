import { useEffect, useRef, useState } from "react";
import { useCopy } from "../content";
import "./Network.css";

/**
 * O grafo do cockpit, recriado aqui: pastas guardam conversas, conversas
 * comandam agentes, agentes abrem subagentes. Mesma física do produto — as
 * ligações puxam, todo o resto empurra — e a mesma faísca correndo o fio por
 * onde há trabalho passando.
 */

type Kind = "project" | "orchestrator" | "chat" | "task" | "subagent";

const STYLE: Record<Kind, { color: string; radius: number }> = {
  project: { color: "#7dd3fc", radius: 15 },
  orchestrator: { color: "#fbbf24", radius: 12 },
  chat: { color: "#f87171", radius: 8.5 },
  task: { color: "#34d399", radius: 7.5 },
  subagent: { color: "#38bdf8", radius: 5 },
};

type Spec = { id: string; labelKey: string; kind: Kind; live?: boolean };
type Link = { a: string; b: string; kind: "owns" | "commands" | "spawns" };

const SPECS: Spec[] = [
  { id: "people", labelKey: "people", kind: "project" },
  { id: "fin", labelKey: "fin", kind: "project" },
  { id: "app", labelKey: "app", kind: "project" },
  { id: "site", labelKey: "site", kind: "project" },
  { id: "maestro", labelKey: "maestro", kind: "orchestrator", live: true },
  { id: "t1", labelKey: "t1", kind: "task" },
  { id: "t2", labelKey: "t2", kind: "task", live: true },
  { id: "t3", labelKey: "t3", kind: "task" },
  { id: "t4", labelKey: "t4", kind: "task", live: true },
  { id: "c1", labelKey: "c1", kind: "chat" },
  { id: "s1", labelKey: "s1", kind: "subagent" },
  { id: "s2", labelKey: "s2", kind: "subagent", live: true },
];

const LINKS: Link[] = [
  { a: "people", b: "t1", kind: "owns" },
  { a: "people", b: "c1", kind: "owns" },
  { a: "fin", b: "t2", kind: "owns" },
  { a: "app", b: "t3", kind: "owns" },
  { a: "site", b: "t4", kind: "owns" },
  { a: "maestro", b: "t1", kind: "commands" },
  { a: "maestro", b: "t2", kind: "commands" },
  { a: "maestro", b: "t3", kind: "commands" },
  { a: "maestro", b: "t4", kind: "commands" },
  { a: "t1", b: "s1", kind: "spawns" },
  { a: "t2", b: "s2", kind: "spawns" },
];

type Node = Spec & { radius: number; color: string; x: number; y: number; vx: number; vy: number };

/** Abaixo disto, um canvas 900x430 vira uma tira ilegível de 160px de altura. */
const NARROW = "(max-width: 699px)";

export default function Network() {
  const copy = useCopy();
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(NARROW).matches,
  );
  // Só reconstrói ao cruzar o limiar — não a cada pixel de redimensionamento.
  useEffect(() => {
    const mq = window.matchMedia(NARROW);
    const sync = () => setNarrow(mq.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const W = narrow ? 430 : 900;
  const H = narrow ? 560 : 430;
  const labelSize = narrow ? 14 : 11;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelsRef = useRef(copy.network.nodes);
  const [hovered, setHovered] = useState<string | null>(null);
  const hoverRef = useRef<string | null>(null);
  const dragRef = useRef<Node | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // Trocar de idioma não pode reiniciar a simulação — só os rótulos mudam.
  useEffect(() => {
    labelsRef.current = copy.network.nodes;
  }, [copy]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const nodes: Node[] = SPECS.map((spec, i) => {
      const angle = (i / SPECS.length) * Math.PI * 2;
      return {
        ...spec,
        ...STYLE[spec.kind],
        x: W / 2 + Math.cos(angle) * W * 0.33 + (i % 3) * 12,
        y: H / 2 + Math.sin(angle) * H * 0.35 + (i % 4) * 9,
        vx: 0,
        vy: 0,
      };
    });
    const index = new Map(nodes.map((n) => [n.id, n]));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let tick = 0;
    let cooling = 1;

    const settle = () => {
      for (const node of nodes) {
        if (node === dragRef.current) continue;
        for (const other of nodes) {
          if (node === other) continue;
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist > 320) continue;
          const push = (3600 / (dist * dist)) * cooling;
          node.vx += (dx / dist) * push;
          node.vy += (dy / dist) * push;
        }
        // Puxa para o centro em x mais fraco que em y: a tela é larga, e um
        // grafo empilhado no meio desperdiça a metade dela.
        node.vx += (W / 2 - node.x) * 0.0009;
        node.vy += (H / 2 - node.y) * 0.0022;
      }

      for (const link of LINKS) {
        const a = index.get(link.a);
        const b = index.get(link.b);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy) || 1;
        const rest = link.kind === "owns" ? 135 : link.kind === "commands" ? 190 : 78;
        const pull = (dist - rest) * 0.016 * cooling;
        if (a !== dragRef.current) {
          a.vx += (dx / dist) * pull;
          a.vy += (dy / dist) * pull;
        }
        if (b !== dragRef.current) {
          b.vx -= (dx / dist) * pull;
          b.vy -= (dy / dist) * pull;
        }
      }

      for (const node of nodes) {
        if (node === dragRef.current) {
          node.x = pointer.current.x;
          node.y = pointer.current.y;
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        node.vx *= 0.84;
        node.vy *= 0.84;
        const pad = narrow ? 34 : 60;
        node.x = Math.max(node.radius + pad, Math.min(W - node.radius - pad, node.x + node.vx));
        node.y = Math.max(node.radius + 26, Math.min(H - node.radius - 26, node.y + node.vy));
      }
      cooling = Math.max(0.12, cooling * 0.994);
    };

    const paint = () => {
      const hover = hoverRef.current;
      ctx.clearRect(0, 0, W, H);

      const wash = ctx.createRadialGradient(W / 2, H / 2, 40, W / 2, H / 2, H);
      wash.addColorStop(0, "rgba(30,16,20,0.55)");
      wash.addColorStop(1, "rgba(4,4,8,0.92)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(255,255,255,0.028)";
      ctx.lineWidth = 1;
      for (let x = 45; x < W; x += 45) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 45; y < H; y += 45) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      for (const link of LINKS) {
        const a = index.get(link.a);
        const b = index.get(link.b);
        if (!a || !b) continue;
        const flowing = a.live || b.live;
        const dim = hover !== null && hover !== a.id && hover !== b.id;
        const stroke =
          link.kind === "commands" ? "251,146,60" : link.kind === "spawns" ? "56,189,248" : "255,255,255";
        const alpha = dim ? 0.05 : link.kind === "owns" ? 0.16 : 0.34;

        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        const nx = -(b.y - a.y);
        const ny = b.x - a.x;
        const len = Math.hypot(nx, ny) || 1;
        const bend = Math.min(26, len * 0.09);
        const cx = mx + (nx / len) * bend;
        const cy = my + (ny / len) * bend;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cx, cy, b.x, b.y);
        ctx.strokeStyle = `rgba(${stroke},${alpha})`;
        ctx.lineWidth = link.kind === "owns" ? 1 : 1.4;
        ctx.stroke();

        if (flowing && !dim) {
          const t = (((tick * 0.006 + (a.x + b.y) * 0.001) % 1) + 1) % 1;
          const inv = 1 - t;
          const px = inv * inv * a.x + 2 * inv * t * cx + t * t * b.x;
          const py = inv * inv * a.y + 2 * inv * t * cy + t * t * b.y;
          ctx.beginPath();
          ctx.arc(px, py, 2.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${stroke},0.9)`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(${stroke},0.8)`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      for (const node of nodes) {
        const dim = hover !== null && hover !== node.id;
        const pulse = node.live ? 1 + Math.sin(tick * 0.06) * 0.12 : 1;

        ctx.globalAlpha = dim ? 0.3 : 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = node.live ? 26 : 14;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Miolo escuro: o nó vira anel, como no produto.
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * pulse * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(6,6,10,0.9)";
        ctx.fill();

        const label = (labelsRef.current as Record<string, string>)[node.labelKey] ?? node.id;
        ctx.font = `500 ${labelSize}px Inter, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.fillStyle = dim ? "rgba(231,231,239,0.28)" : "rgba(231,231,239,0.82)";
        // O rótulo é mais largo que o nó: sem prender, some metade dele na
        // borda do quadro — o que aparece primeiro na tela estreita do celular.
        const half = ctx.measureText(label).width / 2 + 6;
        const lx = Math.max(half, Math.min(W - half, node.x));
        ctx.fillText(label, lx, node.y + node.radius + labelSize + 4);
        ctx.globalAlpha = 1;
      }
    };

    const frame = () => {
      /* Com movimento reduzido o mapa fica parado de verdade: parar só o
         assentamento não bastava, porque tick é o que faz a faísca correr pelos
         links e os nós pulsarem. Aí só repintamos enquanto alguém arrasta. */
      if (reduced) {
        if (dragRef.current) paint();
        raf = requestAnimationFrame(frame);
        return;
      }
      tick += 1;
      settle();
      paint();
      raf = requestAnimationFrame(frame);
    };
    // Assenta antes de aparecer: um grafo explodindo na tela do usuário é feio.
    // O resfriamento é restaurado depois — senão a simulação nasce sem energia
    // para espalhar e todos os nós ficam empilhados no meio.
    for (let i = 0; i < 400; i += 1) settle();
    cooling = 1;
    for (let i = 0; i < 200; i += 1) settle();
    frame();

    /* ------------------------------ interação ----------------------------- */
    const toLocal = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: ((event.clientX - rect.left) / rect.width) * W,
        y: ((event.clientY - rect.top) / rect.height) * H,
      };
    };
    const hit = (x: number, y: number) =>
      nodes.find((n) => Math.hypot(n.x - x, n.y - y) <= n.radius + 10) ?? null;

    const onMove = (event: PointerEvent) => {
      const { x, y } = toLocal(event);
      pointer.current = { x, y };
      if (dragRef.current) {
        cooling = Math.max(cooling, 0.6);
        return;
      }
      const found = hit(x, y);
      const id = found?.id ?? null;
      if (id !== hoverRef.current) {
        hoverRef.current = id;
        setHovered(id);
      }
      canvas.style.cursor = found ? "grab" : "default";
    };
    const onDown = (event: PointerEvent) => {
      const { x, y } = toLocal(event);
      const found = hit(x, y);
      if (!found) return;
      dragRef.current = found;
      pointer.current = { x, y };
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onUp = (event: PointerEvent) => {
      dragRef.current = null;
      canvas.releasePointerCapture?.(event.pointerId);
      canvas.style.cursor = "grab";
    };
    const onLeave = () => {
      hoverRef.current = null;
      setHovered(null);
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, [W, H, labelSize]);

  return (
    <section className="section section--tinted" id="rede">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">
            {copy.network.eyebrow}
          </p>
          <h2 className="h2" data-rise>
            {copy.network.title}
          </h2>
          <p className="lede" data-rise>
            {copy.network.lede}
          </p>
        </div>

        <figure className="net" data-rise>
          <div className="net__frame">
            <canvas
              ref={canvasRef}
              className="net__canvas"
              style={{ width: "100%", aspectRatio: `${W} / ${H}` }}
              aria-label={copy.network.title}
              role="img"
            />
          </div>
          <figcaption className="net__foot">
            <ul className="net__legend">
              {copy.network.legend.map((item) => (
                <li key={item.kind}>
                  <span
                    className="net__pip"
                    style={{
                      background: STYLE[item.kind as Kind].color,
                      boxShadow: `0 0 10px ${STYLE[item.kind as Kind].color}`,
                    }}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
            <span className="net__hint mono">
              {hovered
                ? (copy.network.nodes as Record<string, string>)[
                    SPECS.find((s) => s.id === hovered)?.labelKey ?? ""
                  ]
                : copy.network.hint}
            </span>
          </figcaption>
        </figure>

        {/* Canal entre duas instalações — ainda em obra, e o aviso vem antes do texto
            para ninguém ler a lista achando que já dá para usar. */}
        <div className="wip" data-rise>
          <div className="wip__head">
            <span className="wip__badge">
              <span className="wip__dot" aria-hidden="true" />
              {copy.network.wip.badge}
            </span>
            <p className="wip__note">{copy.network.wip.note}</p>
          </div>
          <h3 className="wip__title" data-rise="sm">{copy.network.deep.title}</h3>
          <p className="lede" data-rise="sm">{copy.network.deep.lede}</p>
          <ul className="wip__list">
            {copy.network.deep.items.map((item, i) => (
              <li key={i} data-rise="sm">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

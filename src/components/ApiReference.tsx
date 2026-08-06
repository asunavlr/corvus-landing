import { useRef, useState } from "react";
import { useCopy } from "../content";
import { EASE, gsap, reduced, useGSAP } from "../lib/anim";

/** A superfície HTTP inteira do proxy, agrupada como ela existe no App Router. */
export default function ApiReference() {
  const copy = useCopy();
  const [active, setActive] = useState(copy.api.groups[0].id);
  const group = copy.api.groups.find((g) => g.id === active) ?? copy.api.groups[0];
  const tabs = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  /* A pílula da aba escolhida é uma só, que desliza — o mesmo efeito que o
     layoutId dava antes, agora medindo o botão e movendo com GSAP. */
  useGSAP(
    () => {
      const wrap = tabs.current;
      if (!wrap) return;
      const on = wrap.querySelector<HTMLElement>(".api__tab--on");
      const bg = wrap.querySelector<HTMLElement>(".api__tab-bg");
      if (!on || !bg) return;
      gsap.to(bg, {
        x: on.offsetLeft,
        width: on.offsetWidth,
        height: on.offsetHeight,
        duration: reduced ? 0 : 0.45,
        ease: EASE,
      });
    },
    { dependencies: [active, copy] },
  );

  /* Troca de aba: o painel entra por baixo, e as rotas em fila. */
  useGSAP(
    () => {
      if (reduced || !panel.current) return;
      gsap.fromTo(
        panel.current.querySelectorAll(".api__route"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: EASE, stagger: 0.035 },
      );
    },
    { dependencies: [active, copy] },
  );

  return (
    <section className="section section--tinted" id="api">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.api.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.api.title}</h2>
          <p className="lede" data-rise>{copy.api.lede}</p>
        </div>

        <div className="api">
          <div className="api__tabs" role="tablist" ref={tabs} data-rise="sm">
            <span className="api__tab-bg" aria-hidden="true" />
            {copy.api.groups.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={item.id === active}
                className={`api__tab${item.id === active ? " api__tab--on" : ""}`}
                onClick={() => setActive(item.id)}
              >
                <span className="api__tab-label">{item.label}</span>
                <span className="api__tab-label api__tab-count mono">{item.routes.length}</span>
              </button>
            ))}
          </div>

          <div className="api__panel" data-rise ref={panel}>
            <p className="api__blurb">{group.blurb}</p>
            <ul className="api__routes">
              {group.routes.map((route, index) => (
                <li key={index} className="api__route">
                  <div className="api__methods">
                    {route.methods.map((method) => (
                      <span
                        key={method}
                        className={`api__method api__method--${method.toLowerCase()} mono`}
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <code className="api__path mono">{route.path}</code>
                  <p className="api__desc">{route.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

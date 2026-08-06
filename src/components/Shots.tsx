import { useEffect, useRef, useState } from "react";
import { useCopy } from "../content";
import { EASE, gsap, reduced, useGSAP } from "../lib/anim";
import "./Shots.css";

/** Capturas do produto rodando de verdade — clique amplia. */
export default function Shots() {
  const copy = useCopy();
  const [zoom, setZoom] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);

  /* Entrada do lightbox. A saída é tratada em close(), que só desmonta depois
     de a imagem encolher — sem isso o overlay some de um quadro para o outro. */
  useGSAP(
    () => {
      if (!zoom || reduced) return;
      gsap.fromTo(box.current, { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(
        box.current!.querySelector("img"),
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.3, ease: EASE },
      );
    },
    { dependencies: [zoom] },
  );

  /* Sem isto a única saída é acertar a área fora da imagem. */
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  function close() {
    if (reduced || !box.current) return setZoom(null);
    gsap.to(box.current, { opacity: 0, duration: 0.2, onComplete: () => setZoom(null) });
  }

  return (
    <section className="section section--tinted" id="telas">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.shots.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.shots.title}</h2>
          <p className="lede" data-rise>{copy.shots.lede}</p>
        </div>

        <div className="shots">
          {copy.shots.items.map((item, i) => (
            <figure key={i} className={`shot${i === 0 ? " shot--lead" : ""}`} data-rise>
              <div className="shot__media">
                <button className="shot__frame" onClick={() => setZoom(item.src)}>
                  <img src={item.src} alt={item.title} loading="lazy" />
                </button>
                {/* Fora do contêiner que rola: dentro dele, o selo ia junto com
                    a imagem e sumia da vista no celular. */}
                <span className="shot__zoom mono" aria-hidden="true">
                  ↗
                </span>
              </div>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {zoom && (
        <div className="lightbox" ref={box} onClick={close} role="dialog" aria-modal="true">
          <img src={zoom} alt="" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

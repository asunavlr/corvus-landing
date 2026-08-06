import { useRef } from "react";
import { useCopy } from "../content";
import { EASE, gsap, reduced, useGSAP } from "../lib/anim";
import SpotlightCard from "./rb/SpotlightCard";

export default function Orchestration() {
  const copy = useCopy();
  const scope = useRef<HTMLDivElement>(null);

  /* A linha que liga os quatro passos se desenha quando a seção aparece. */
  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        ".flow__line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: EASE,
          scrollTrigger: { trigger: ".flow", start: "top 85%", once: true },
        },
      );
    },
    { scope },
  );

  return (
    <section className="section section--tinted" id="orquestracao">
      <div className="shell" ref={scope}>
        <div>
          <p className="eyebrow" data-rise="sm">{copy.orchestration.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.orchestration.title}</h2>
          <p className="lede" data-rise>{copy.orchestration.lede}</p>
        </div>

        <ol className="flow">
          <span className="flow__line" aria-hidden="true" />
          {copy.orchestration.flow.map((item, i) => (
            <li key={i} className="flow__item" data-rise>
              <span className="flow__dot" aria-hidden="true" />
              <p className="flow__step mono">{item.step}</p>
              <h3>{item.title}</h3>
              <p className="flow__body">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="grid grid--four">
          {copy.orchestration.cards.map((item, i) => (
            <SpotlightCard as="article" key={i} className="card card--quiet" data-rise>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

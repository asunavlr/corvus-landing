import { useRef } from "react";
import { useCopy } from "../content";
import { EASE, gsap, reduced, useGSAP } from "../lib/anim";

export default function Proxy() {
  const copy = useCopy();
  const scope = useRef<HTMLDivElement>(null);

  /* Uma linha do terminal por vez, como se o proxy estivesse subindo agora. */
  useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        ".term__line",
        { opacity: 0, x: -8 },
        {
          opacity: 1,
          x: 0,
          duration: 0.35,
          ease: EASE,
          stagger: 0.07,
          scrollTrigger: { trigger: ".term", start: "top 80%", once: true },
        },
      );
    },
    { scope },
  );

  return (
    <section className="section" id="produto">
      <div className="shell proxy" ref={scope}>
        <div>
          <p className="eyebrow" data-rise="sm">{copy.proxy.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.proxy.title}</h2>
          <p className="lede" data-rise>{copy.proxy.lede}</p>

          <ol className="steps">
            {copy.proxy.steps.map((step, i) => (
              <li key={i} className="steps__item" data-rise>
                <span className="steps__num mono">{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="proxy__note" data-rise>{copy.proxy.note}</p>
        </div>

        <div className="term" data-rise>
          <div className="term__bar">
            <span />
            <span />
            <span />
            <p className="mono">{copy.proxy.terminal.caption}</p>
          </div>
          <div className="term__body mono">
            {copy.proxy.terminal.lines.map((item, i) => (
              <p key={i} className={`term__line term__line--${item.kind}`}>
                {item.kind === "cmd" && <span className="term__prompt">$</span>}
                {item.kind === "ok" && <span className="term__pip" aria-hidden="true" />}
                {item.text || " "}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

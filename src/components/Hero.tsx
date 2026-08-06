import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { REPO_TRIAL, useCopy } from "../content";
import { EASE, gsap, reduced, useGSAP } from "../lib/anim";
import "./Hero.css";

gsap.registerPlugin(SplitText);

/**
 * O bando é o argumento inteiro da página: muitos agentes, um céu só. A foto
 * entra invertida — o original é preto sobre névoa clara, e aqui tudo é tinta.
 *
 * O título usa a técnica do SplitText do React Bits (TextAnimations/SplitText):
 * quebrar em palavras e soltar uma a uma. Aqui o plugin do GSAP é chamado
 * direto porque o título tem markup no meio (<em>), e o componente do React
 * Bits só aceita texto puro.
 */
export default function Hero() {
  const copy = useCopy();
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (reduced) return;

      /* Parallax do bando: a foto desce mais devagar que o texto e o véu
         escurece, para o título nunca competir com as asas. */
      /* O gatilho é o próprio <header>, por referência: dentro de useGSAP com
         scope, um seletor ".hero" é procurado DENTRO do .hero — e não acha
         nada, deixando o paralaxe sem gatilho e um aviso no console. */
      const hero = scope.current!;

      gsap.to(".hero__flock", {
        y: 160,
        scale: 1.12,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "+=800", scrub: 0.6 },
      });
      gsap.fromTo(".hero__veil", { opacity: 0 }, {
        opacity: 0.7,
        ease: "none",
        scrollTrigger: { trigger: hero, start: "top top", end: "+=600", scrub: 0.6 },
      });

      /* Entrada: a primeira linha do título palavra por palavra. A segunda é o
         degradê da marca, e degradê em texto não sobrevive a ser picado em
         spans com transform — ela sobe inteira, logo atrás. */
      const line = scope.current!.querySelector<HTMLElement>(".hero__line")!;
      const split = new SplitText(line, { type: "words", wordsClass: "hero__word" });

      const tl = gsap.timeline({ defaults: { ease: EASE } });
      tl.from(".hero__badge", { opacity: 0, y: 24, duration: 0.7 })
        .from(split.words, { opacity: 0, y: 32, duration: 0.8, stagger: 0.045 }, "-=0.45")
        .from(".hero__title em", { opacity: 0, y: 32, duration: 0.8 }, "-=0.5")
        .from(".hero__lede", { opacity: 0, y: 24, duration: 0.7 }, "-=0.5")
        .from(".hero__actions", { opacity: 0, y: 24, duration: 0.7 }, "-=0.55")
        .from(".hero__terminal", { opacity: 0, y: 28, duration: 0.8 }, "-=0.5")
        .from(".hero__stat", { opacity: 0, y: 14, duration: 0.6, stagger: 0.06 }, "-=0.55");

      return () => split.revert();
    },
    /* Sem dependências de propósito: trocar de idioma re-renderiza o texto, e
       repetir a entrada inteira faria o topo piscar no meio da leitura. */
    { scope },
  );

  return (
    <header className="hero" ref={scope}>
      <div className="hero__flock">
        <img src="/images/crow-wallpaper.jpg" alt="" aria-hidden="true" />
      </div>
      <div className="hero__veil" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__badge">
          <span className="hero__pulse" aria-hidden="true" />
          <span className="mono">{copy.hero.badge}</span>
          <span className="hero__version mono">{copy.hero.version}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__line">{copy.hero.titleA}</span>
          <br />
          <em className="flame">{copy.hero.titleEm}</em>
        </h1>

        <p className="hero__lede">{copy.hero.lede}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={REPO_TRIAL}>
            {copy.hero.ctaPrimary}
            {/* A seta não fica solta ao lado do texto: mora no próprio disco,
                encaixado na borda interna do botão. */}
            <span className="btn__ico" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="13" height="13">
                <path
                  d="M4 12L12 4M12 4H6M12 4v6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a className="btn btn--ghost" href="#preco">
            {copy.hero.ctaSecondary}
          </a>
        </div>

        <div className="hero__terminal">
          <div className="hero__terminal-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <p className="mono">{copy.hero.terminalCaption}</p>
          </div>
          <pre className="mono">
            <code>
              <span className="tok-dim">$</span> npx <span className="tok-val">corvus-trial</span>
              {"\n\n"}
              {copy.hero.terminalChips.map((chip, i) => (
                <span key={i}>
                  <span className="tok-ok">●</span> {chip}
                  {i < copy.hero.terminalChips.length - 1 ? "   " : ""}
                </span>
              ))}
              {"\n\n"}
              <span className="tok-dim">{copy.hero.terminalComment}</span>
            </code>
          </pre>
        </div>

        <dl className="hero__stats">
          {copy.hero.stats.map((stat, i) => (
            <div key={i} className="hero__stat">
              <dt className="flame">{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

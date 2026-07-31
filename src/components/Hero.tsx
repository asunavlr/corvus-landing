import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { REPO_TRIAL, useCopy } from "../content";
import { ease, rise, stagger } from "../lib/motion";
import "./Hero.css";

/**
 * O bando é o argumento inteiro da página: muitos agentes, um céu só. A foto
 * entra invertida — o original é preto sobre névoa clara, e aqui tudo é tinta.
 */
export default function Hero() {
  const copy = useCopy();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const flockY = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 160]);
  const flockScale = useTransform(scrollY, [0, 800], [1, reduced ? 1 : 1.12]);
  const veil = useTransform(scrollY, [0, 600], [0, 0.7]);

  return (
    <header className="hero">
      <motion.div className="hero__flock" style={{ y: flockY, scale: flockScale }}>
        <img src="/images/crow-wallpaper.jpg" alt="" aria-hidden="true" />
      </motion.div>
      <motion.div className="hero__veil" style={{ opacity: veil }} aria-hidden="true" />

      <motion.div
        className="shell hero__inner"
        variants={stagger(0.1, 0.15)}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero__badge" variants={rise}>
          <span className="hero__pulse" aria-hidden="true" />
          <span className="mono">{copy.hero.badge}</span>
        </motion.div>

        <motion.h1 className="hero__title" variants={rise}>
          {copy.hero.titleA}
          <br />
          <em className="flame">{copy.hero.titleEm}</em>
        </motion.h1>

        <motion.p className="hero__lede" variants={rise}>
          {copy.hero.lede}
        </motion.p>

        <motion.div className="hero__actions" variants={rise}>
          <a className="btn btn--primary" href={REPO_TRIAL}>
            {copy.hero.ctaPrimary}
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path
                d="M4 12L12 4M12 4H6M12 4v6"
                stroke="currentColor"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a className="btn btn--ghost" href="#preco">
            {copy.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div className="hero__terminal" variants={rise}>
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
        </motion.div>

        <motion.dl
          className="hero__stats"
          variants={stagger(0.06, 0.5)}
          initial="hidden"
          animate="show"
        >
          {copy.hero.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="hero__stat"
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
              }}
            >
              <dt className="flame">{stat.value}</dt>
              <dd>{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </motion.div>
    </header>
  );
}

import { motion } from "motion/react";
import { PRICE_USD, REPO_TRIAL, SPONSOR, useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";
import "./Pricing.css";

export default function Pricing() {
  const copy = useCopy();

  return (
    <section className="section" id="preco">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            {copy.pricing.eyebrow}
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            {copy.pricing.title}
          </motion.h2>
        </motion.div>

        <motion.div className="price" variants={stagger(0.08, 0.1)} {...inViewSoft}>
          {/* O teste primeiro: é por onde todo mundo entra. */}
          <motion.div className="price__card price__card--trial" variants={rise}>
            <p className="price__tag">
              <span className="price__value price__value--trial">{copy.pricing.trial.price}</span>
              <span className="price__per">{copy.pricing.trial.per}</span>
            </p>
            <p className="price__brl mono">{copy.pricing.trial.note}</p>
            <pre className="price__cmd mono">
              <code>
                <span className="tok-dim">$</span> npx corvus-trial
              </code>
            </pre>
            <ul className="price__list">
              {copy.pricing.trial.bullets.map((item, i) => (
                <li key={i}>
                  <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                    <path d="M3 8.5l3.2 3.2L13 5" stroke="currentColor" strokeWidth="1.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn--ghost price__cta" href={REPO_TRIAL}>
              {copy.pricing.trial.cta}
            </a>
          </motion.div>

          <motion.div className="price__card" variants={rise}>
            <p className="price__tag">
              <span className="price__currency">{copy.pricing.currency}</span>
              <span className="price__value flame">{PRICE_USD}</span>
              <span className="price__per">{copy.pricing.per}</span>
            </p>
            <p className="price__brl mono">{copy.pricing.brl}</p>
            <p className="price__lede">{copy.pricing.lede}</p>
            <ul className="price__list">
              {copy.pricing.bullets.map((item, i) => (
                <li key={i}>
                  <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                    <path
                      d="M3 8.5l3.2 3.2L13 5"
                      stroke="currentColor"
                      strokeWidth="1.9"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a className="btn btn--primary price__cta" href={SPONSOR}>
              {copy.pricing.cta}
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
            <p className="price__fine">{copy.pricing.ctaNote}</p>
          </motion.div>

          <motion.aside className="price__keep" variants={rise}>
            <h3>{copy.pricing.keepTitle}</h3>
            <p>{copy.pricing.keepBody}</p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}

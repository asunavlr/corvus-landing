import { PRICE_USD, REPO_TRIAL, SPONSOR, useCopy } from "../content";
import "./Pricing.css";

export default function Pricing() {
  const copy = useCopy();

  return (
    <section className="section" id="preco">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">
            {copy.pricing.eyebrow}
          </p>
          <h2 className="h2" data-rise>
            {copy.pricing.title}
          </h2>
        </div>

        <div className="price">
          {/* O teste primeiro: é por onde todo mundo entra. */}
          <div className="price__card price__card--trial" data-rise>
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
          </div>

          <div className="price__card price__card--paid" data-rise>
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
          </div>

          <aside className="price__keep" data-rise>
            <h3>{copy.pricing.keepTitle}</h3>
            <p>{copy.pricing.keepBody}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

import { useCopy } from "../content";

export default function Guard() {
  const copy = useCopy();
  return (
    <section className="section section--tinted" id="guarda">
      <div className="shell guard">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.guard.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.guard.title}</h2>
          <p className="lede" data-rise>{copy.guard.ledeA}</p>
          <p className="lede" data-rise>{copy.guard.ledeB}</p>
        </div>

        <ul className="guard__list">
          {copy.guard.samples.map((sample, i) => (
            <li key={i} className="guard__row" data-rise="sm">
              <span className="guard__stop" aria-hidden="true">
                <svg viewBox="0 0 14 14" width="11" height="11">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <code className="mono">{sample.cmd}</code>
              <span className="guard__why">{sample.why}</span>
            </li>
          ))}
          <li className="guard__more mono" data-rise="sm">{copy.guard.more}</li>
        </ul>
      </div>
    </section>
  );
}

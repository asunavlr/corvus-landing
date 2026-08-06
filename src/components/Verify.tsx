import { useCopy } from "../content";

export default function Verify() {
  const copy = useCopy();
  const report = copy.verify.report;
  return (
    <section className="section" id="verificacao">
      <div className="shell verify">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.verify.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.verify.title}</h2>
          <p className="lede" data-rise>{copy.verify.lede}</p>

          <div className="verify__list">
            {copy.verify.items.map((item, i) => (
              <div key={i} className="verify__item" data-rise>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="report" data-rise>
          <div className="report__head">
            <span className="mono">{report.tool}</span>
            <span className="report__tag mono">{report.tag}</span>
          </div>
          {report.rows.map((row, i) => (
            <div key={i} className="report__row" data-rise="sm">
              <span className={`report__pip report__pip--${row.status}`} aria-hidden="true" />
              <span className="report__route mono">{row.route}</span>
              <span className="report__note">{row.note}</span>
            </div>
          ))}
          <p className="report__foot" data-rise="sm">
            {report.footA}
            <strong>{report.footStrong}</strong>
            {report.footB}
          </p>
        </div>
      </div>
    </section>
  );
}

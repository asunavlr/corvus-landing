import { REPO_TRIAL, SPONSOR, useCopy } from "../content";

export default function Footer() {
  const copy = useCopy();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__cta">
          <h2 className="footer__title" data-rise>
            {copy.footer.title}
            <em className="flame">{copy.footer.titleEm}</em>
          </h2>
          <div className="footer__install" data-rise>
            <pre className="mono">
              <code>
                <span className="tok-dim">$</span> npx{" "}
                <span className="tok-val">corvus-trial</span>
                {"\n"}
                <span className="tok-dim">{"# → http://localhost:3210"}</span>
              </code>
            </pre>
          </div>
          <p className="footer__note" data-rise="sm">{copy.footer.note}</p>
          <a className="btn btn--primary" href={SPONSOR} data-rise>
            {copy.footer.cta}
          </a>
        </div>

        <div className="footer__links mono">
          {copy.footer.quick.map((link) => (
            <a href={link.href} key={link.href}>{link.label}</a>
          ))}
          <a href={`${REPO_TRIAL}/issues/new`} target="_blank" rel="noreferrer">
            {copy.footer.report} ↗
          </a>
        </div>

        <div className="footer__bar">
          <div>
            <p className="mono">Corvus · {copy.footer.tagline}</p>
            <p className="mono footer__copyright">{copy.footer.copyright}</p>
          </div>
          <a className="mono footer__repo" href={REPO_TRIAL}>github.com/asunavlr/corvus-trial</a>
          <p className="mono footer__credit">
            {copy.footer.by} <a href="https://github.com/chzin777" target="_blank" rel="noreferrer">Christofer</a> &amp; <a href="https://github.com/asunavlr" target="_blank" rel="noreferrer">Kevin</a>
            <span className="footer__version">{copy.footer.version}</span>
          </p>
        </div>

        <div className="footer__legal mono">
          <a href={copy.footer.legal.privacy.href}>{copy.footer.legal.privacy.label}</a>
          <a href={copy.footer.legal.terms.href}>{copy.footer.legal.terms.label}</a>
          <a href={`mailto:${copy.footer.legal.email}`}>{copy.footer.legal.email}</a>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { REPO_TRIAL, SPONSOR, useLang } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Footer() {
  const { copy, lang } = useLang();
  const labels = lang === "pt"
    ? { updates: "Novidades", docs: "Documentação", feedback: "Feedback", report: "Reportar problema", platform: "Windows · Claude Code", by: "por" }
    : { updates: "Updates", docs: "Documentation", feedback: "Feedback", report: "Report an issue", platform: "Windows · Claude Code", by: "by" };
  return (
    <footer className="footer">
      <div className="shell">
        <motion.div className="footer__cta" variants={stagger()} {...inViewSoft}>
          <motion.h2 className="footer__title" variants={rise}>
            {copy.footer.title}
            <em className="flame">{copy.footer.titleEm}</em>
          </motion.h2>
          <motion.div className="footer__install" variants={rise}>
            <pre className="mono">
              <code>
                <span className="tok-dim">$</span> npx{" "}
                <span className="tok-val">corvus-trial</span>
                {"\n"}
                <span className="tok-dim">{"# → http://localhost:3210"}</span>
              </code>
            </pre>
          </motion.div>
          <motion.p className="footer__note" variants={riseSmall}>{copy.footer.note}</motion.p>
          <motion.a className="btn btn--primary" href={SPONSOR} variants={rise}>
            {copy.footer.cta}
          </motion.a>
        </motion.div>

        <div className="footer__links mono">
          <a href="#atualizacoes">{labels.updates}</a>
          <a href="#docs">{labels.docs}</a>
          <a href="#feedback">{labels.feedback}</a>
          <a href={`${REPO_TRIAL}/issues/new`} target="_blank" rel="noreferrer">{labels.report} ↗</a>
        </div>

        <div className="footer__bar">
          <div>
            <p className="mono">Corvus · {copy.footer.tagline}</p>
            <p className="mono footer__copyright">© 2026 Corvus · {labels.platform}</p>
          </div>
          <a className="mono footer__repo" href={REPO_TRIAL}>github.com/asunavlr/corvus-trial</a>
          <p className="mono footer__credit">
            {labels.by} <a href="https://github.com/chzin777" target="_blank" rel="noreferrer">Christofer</a> &amp; <a href="https://github.com/asunavlr" target="_blank" rel="noreferrer">Kevin</a>
            <span className="footer__version">{copy.footer.version}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

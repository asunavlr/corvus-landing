import { motion } from "motion/react";
import { REPO, SPONSOR, useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Footer() {
  const copy = useCopy();
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
                <span className="tok-dim">$</span> npx corvus@latest{" "}
                <span className="tok-flag">--key</span>{" "}
                <span className="tok-val">CRV-7K2P-9XQM</span>
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

        <div className="footer__bar">
          <p className="mono">Corvus</p>
          <a className="mono footer__repo" href={REPO}>github.com/asunavlr/corvus</a>
          <p className="mono">{copy.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

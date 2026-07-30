import { motion } from "motion/react";
import { REPO } from "../data/content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <motion.div className="footer__cta" variants={stagger()} {...inViewSoft}>
          <motion.h2 className="footer__title" variants={rise}>
            Rode local. <em>Só local.</em>
          </motion.h2>
          <motion.div className="footer__install" variants={rise}>
            <pre className="mono">
              <code>
                <span className="tok-dim">$</span> git clone {REPO.replace("https://", "")}
                {"\n"}
                <span className="tok-dim">$</span> npm install{"\n"}
                <span className="tok-dim">$</span> npm run dev{" "}
                <span className="tok-dim">{"# http://localhost:3000"}</span>
              </code>
            </pre>
          </motion.div>
          <motion.p className="footer__note" variants={riseSmall}>
            Precisa do Claude Code CLI instalado e autenticado. O banco fica em{" "}
            <code className="mono">~/.corvus/corvus.db</code> — sobrescreva com{" "}
            <code className="mono">CORVUS_HOME</code>. Apagar uma conversa aqui não apaga a sessão
            original da CLI no disco.
          </motion.p>
          <motion.a className="btn btn--primary" href={REPO} variants={rise}>
            Abrir o repositório
          </motion.a>
        </motion.div>

        <div className="footer__bar">
          <p className="mono">Corvus</p>
          <p className="mono">um cockpit para o Claude Code</p>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "motion/react";
import { GUARD_SAMPLES } from "../data/content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Guard() {
  return (
    <section className="section section--tinted" id="guarda">
      <div className="shell guard">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Turbo com freio
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            Sem prompt a cada passo. Com freio no que não volta.
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            Aprovar cada leitura de arquivo é o que faz todo mundo acabar em{" "}
            <code className="mono">bypassPermissions</code> e torcer. O Corvus roda em bypass de
            propósito e instala um hook <code className="mono">PreToolUse</code>: tudo passa,
            menos o que pode destruir trabalho. Esse punhado para e espera o seu clique.
          </motion.p>
          <motion.p className="lede" variants={rise}>
            Se o Corvus estiver fora do ar, a guarda <strong>nega</strong> em vez de liberar às
            cegas. E o modo plano nunca é sobrescrito.
          </motion.p>
        </motion.div>

        <motion.ul className="guard__list" variants={stagger(0.06, 0.15)} {...inViewSoft}>
          {GUARD_SAMPLES.map((sample) => (
            <motion.li key={sample.cmd} className="guard__row" variants={riseSmall}>
              <span className="guard__stop" aria-hidden="true">
                <svg viewBox="0 0 14 14" width="11" height="11">
                  <path
                    d="M3 3l8 8M11 3l-8 8"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <code className="mono">{sample.cmd}</code>
              <span className="guard__why">{sample.why}</span>
            </motion.li>
          ))}
          <motion.li className="guard__more mono" variants={riseSmall}>
            + 19 outros padrões · escrita fora da pasta da conversa
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

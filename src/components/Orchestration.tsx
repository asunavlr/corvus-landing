import { motion } from "motion/react";
import { FLOW, ORCHESTRATION } from "../data/content";
import { ease, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** A linha que liga os quatro passos se desenha conforme a seção aparece. */
const line = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease, delay: 0.2 } },
};

export default function Orchestration() {
  return (
    <section className="section section--tinted" id="orquestracao">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Orquestração
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            Um maestro, vários repositórios
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            Marque uma conversa como maestro e ela ganha um departamento: não edita arquivo
            nenhum, cria agentes que editam. Cada tarefa vira uma conversa própria na barra
            lateral, com histórico e sessão inteiros.
          </motion.p>
        </motion.div>

        <motion.ol className="flow" variants={stagger(0.12, 0.1)} {...inViewSoft}>
          <motion.span className="flow__line" variants={line} aria-hidden="true" />
          {FLOW.map((item) => (
            <motion.li key={item.step} className="flow__item" variants={rise}>
              <span className="flow__dot" aria-hidden="true" />
              <p className="flow__step mono">{item.step}</p>
              <h3>{item.title}</h3>
              <p className="flow__body">{item.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div className="grid grid--four" variants={stagger(0.07)} {...inViewSoft}>
          {ORCHESTRATION.map((item) => (
            <motion.article key={item.title} className="card card--quiet" variants={rise}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

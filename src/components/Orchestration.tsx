import { motion } from "motion/react";
import { useCopy } from "../content";
import { ease, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** A linha que liga os quatro passos se desenha conforme a seção aparece. */
const line = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.1, ease, delay: 0.2 } },
};

export default function Orchestration() {
  const copy = useCopy();
  return (
    <section className="section section--tinted" id="orquestracao">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.orchestration.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.orchestration.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.orchestration.lede}</motion.p>
        </motion.div>

        <motion.ol className="flow" variants={stagger(0.12, 0.1)} {...inViewSoft}>
          <motion.span className="flow__line" variants={line} aria-hidden="true" />
          {copy.orchestration.flow.map((item, i) => (
            <motion.li key={i} className="flow__item" variants={rise}>
              <span className="flow__dot" aria-hidden="true" />
              <p className="flow__step mono">{item.step}</p>
              <h3>{item.title}</h3>
              <p className="flow__body">{item.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div className="grid grid--four" variants={stagger(0.07)} {...inViewSoft}>
          {copy.orchestration.cards.map((item, i) => (
            <motion.article key={i} className="card card--quiet" variants={rise}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Features() {
  const copy = useCopy();
  return (
    <section className="section" id="recursos">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.features.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.features.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.features.lede}</motion.p>
        </motion.div>

        <motion.div className="grid grid--features" variants={stagger(0.07, 0.1)} {...inViewSoft}>
          {copy.features.items.map((feature, i) => (
            <motion.article key={i} className="card" variants={rise}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <p className="card__detail mono">{feature.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

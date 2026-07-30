import { motion } from "motion/react";
import { FEATURES } from "../data/content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Features() {
  return (
    <section className="section" id="recursos">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Recursos
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            O que a CLI não te dá sozinha
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            Nada aqui substitui o Claude Code — tudo é a mesma CLI, com o mesmo ambiente da sua
            máquina. O que muda é o que acontece em volta dela.
          </motion.p>
        </motion.div>

        <motion.div className="grid grid--features" variants={stagger(0.07, 0.1)} {...inViewSoft}>
          {FEATURES.map((feature) => (
            <motion.article key={feature.title} className="card" variants={rise}>
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

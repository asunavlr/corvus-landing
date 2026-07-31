import { motion } from "motion/react";
import { useCopy } from "../content";
import { ease, inView, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** Uma linha do terminal por vez, como se o proxy estivesse subindo agora. */
const line = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
};

export default function Proxy() {
  const copy = useCopy();

  return (
    <section className="section" id="produto">
      <div className="shell proxy">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            {copy.proxy.eyebrow}
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            {copy.proxy.title}
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            {copy.proxy.lede}
          </motion.p>

          <motion.ol className="steps" variants={stagger(0.09, 0.1)}>
            {copy.proxy.steps.map((step, i) => (
              <motion.li key={i} className="steps__item" variants={rise}>
                <span className="steps__num mono">{step.step}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <motion.p className="proxy__note" variants={rise}>
            {copy.proxy.note}
          </motion.p>
        </motion.div>

        <motion.div className="term" variants={stagger(0.07, 0.15)} {...inView}>
          <motion.div className="term__bar" variants={riseSmall}>
            <span />
            <span />
            <span />
            <p className="mono">{copy.proxy.terminal.caption}</p>
          </motion.div>
          <div className="term__body mono">
            {copy.proxy.terminal.lines.map((item, i) => (
              <motion.p key={i} className={`term__line term__line--${item.kind}`} variants={line}>
                {item.kind === "cmd" && <span className="term__prompt">$</span>}
                {item.kind === "ok" && <span className="term__pip" aria-hidden="true" />}
                {item.text || " "}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

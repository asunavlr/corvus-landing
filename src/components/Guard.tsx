import { motion } from "motion/react";
import { useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Guard() {
  const copy = useCopy();
  return (
    <section className="section section--tinted" id="guarda">
      <div className="shell guard">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.guard.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.guard.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.guard.ledeA}</motion.p>
          <motion.p className="lede" variants={rise}>{copy.guard.ledeB}</motion.p>
        </motion.div>

        <motion.ul className="guard__list" variants={stagger(0.06, 0.15)} {...inViewSoft}>
          {copy.guard.samples.map((sample, i) => (
            <motion.li key={i} className="guard__row" variants={riseSmall}>
              <span className="guard__stop" aria-hidden="true">
                <svg viewBox="0 0 14 14" width="11" height="11">
                  <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <code className="mono">{sample.cmd}</code>
              <span className="guard__why">{sample.why}</span>
            </motion.li>
          ))}
          <motion.li className="guard__more mono" variants={riseSmall}>{copy.guard.more}</motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

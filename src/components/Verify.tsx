import { motion } from "motion/react";
import { useCopy } from "../content";
import { inView, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

export default function Verify() {
  const copy = useCopy();
  const report = copy.verify.report;
  return (
    <section className="section" id="verificacao">
      <div className="shell verify">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.verify.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.verify.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.verify.lede}</motion.p>

          <motion.div className="verify__list" variants={stagger(0.08, 0.1)}>
            {copy.verify.items.map((item, i) => (
              <motion.div key={i} className="verify__item" variants={rise}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="report" variants={stagger(0.08, 0.2)} {...inView}>
          <motion.div className="report__head" variants={riseSmall}>
            <span className="mono">{report.tool}</span>
            <span className="report__tag mono">{report.tag}</span>
          </motion.div>
          {report.rows.map((row, i) => (
            <motion.div key={i} className="report__row" variants={riseSmall}>
              <span className={`report__pip report__pip--${row.status}`} aria-hidden="true" />
              <span className="report__route mono">{row.route}</span>
              <span className="report__note">{row.note}</span>
            </motion.div>
          ))}
          <motion.p className="report__foot" variants={riseSmall}>
            {report.footA}
            <strong>{report.footStrong}</strong>
            {report.footB}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

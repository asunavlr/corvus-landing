import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCopy } from "../content";
import { ease, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** A superfície HTTP inteira do proxy, agrupada como ela existe no App Router. */
export default function ApiReference() {
  const copy = useCopy();
  const [active, setActive] = useState(copy.api.groups[0].id);
  const group = copy.api.groups.find((g) => g.id === active) ?? copy.api.groups[0];

  return (
    <section className="section section--tinted" id="api">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.api.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.api.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.api.lede}</motion.p>
        </motion.div>

        <motion.div className="api" variants={stagger(0.06, 0.1)} {...inViewSoft}>
          <motion.div className="api__tabs" role="tablist" variants={riseSmall}>
            {copy.api.groups.map((item) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={item.id === active}
                className={`api__tab${item.id === active ? " api__tab--on" : ""}`}
                onClick={() => setActive(item.id)}
              >
                {item.id === active && (
                  <motion.span
                    className="api__tab-bg"
                    layoutId="api-tab"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="api__tab-label">{item.label}</span>
                <span className="api__tab-label api__tab-count mono">{item.routes.length}</span>
              </button>
            ))}
          </motion.div>

          <motion.div className="api__panel" variants={rise}>
            <AnimatePresence mode="wait">
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.32, ease }}
              >
                <p className="api__blurb">{group.blurb}</p>
                <ul className="api__routes">
                  {group.routes.map((route, index) => (
                    <motion.li
                      key={index}
                      className="api__route"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease, delay: index * 0.035 }}
                    >
                      <div className="api__methods">
                        {route.methods.map((method) => (
                          <span
                            key={method}
                            className={`api__method api__method--${method.toLowerCase()} mono`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                      <code className="api__path mono">{route.path}</code>
                      <p className="api__desc">{route.body}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { API, API_TOTAL } from "../data/content";
import { ease, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

/** A superfície HTTP inteira do Corvus, agrupada como ela existe no App Router. */
export default function ApiReference() {
  const [active, setActive] = useState(API[0].id);
  const group = API.find((g) => g.id === active) ?? API[0];

  return (
    <section className="section section--tinted" id="api">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Referência de API
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            {API_TOTAL} rotas, todas locais
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            Rotas de API do Next em runtime Node, chamadas pela interface, pelo servidor MCP e
            pelo hook de guarda. Não há autenticação: o Corvus é uma ferramenta de máquina única
            — <code className="mono">/api/fs</code> lista o seu disco e{" "}
            <code className="mono">/api/chats/[id]/stream</code> executa a CLI. Não exponha essa
            porta na rede.
          </motion.p>
        </motion.div>

        <motion.div className="api" variants={stagger(0.06, 0.1)} {...inViewSoft}>
          <motion.div className="api__tabs" role="tablist" variants={riseSmall}>
            {API.map((item) => (
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
                      key={route.path}
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

import { motion } from "motion/react";
import { useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

const GROUPS = ["interaction", "verification", "orchestration"] as const;

/**
 * As 16 ferramentas que o servidor MCP do proxy injeta em toda execução. As de
 * orquestração só são entregues a quem foi marcado como maestro.
 */
export default function Tools() {
  const copy = useCopy();
  return (
    <section className="section" id="mcp">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.tools.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.tools.title}</motion.h2>
          <motion.p className="lede" variants={rise}>{copy.tools.lede}</motion.p>
        </motion.div>

        {GROUPS.map((group) => (
          <motion.div key={group} className="tools__group" variants={stagger(0.05)} {...inViewSoft}>
            <motion.h3 className="tools__label" variants={riseSmall}>
              {copy.tools.groups[group]}
              {group === "orchestration" && (
                <span className="tools__badge mono">{copy.tools.badge}</span>
              )}
            </motion.h3>
            <div className="tools__grid">
              {copy.tools.items
                .filter((tool) => tool.group === group)
                .map((tool) => (
                  <motion.article key={tool.name} className="tool" variants={riseSmall}>
                    <p className="tool__name mono">{tool.name}</p>
                    <p className="tool__body">{tool.body}</p>
                  </motion.article>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

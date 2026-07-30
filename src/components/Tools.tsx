import { motion } from "motion/react";
import { TOOLS, type Tool } from "../data/content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

const GROUPS: Tool["group"][] = ["Interação", "Verificação", "Orquestração"];

/**
 * As 16 ferramentas que o servidor MCP do Corvus injeta em toda execução. As de
 * orquestração só são entregues a quem foi marcado como maestro.
 */
export default function Tools() {
  return (
    <section className="section" id="mcp">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            Servidor MCP
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            Dezesseis ferramentas que a CLI não tinha
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            O Corvus sobe seu próprio servidor MCP junto de cada execução e o declara por{" "}
            <code className="mono">--mcp-config</code>. É por elas que um processo headless
            consegue te perguntar algo, abrir um navegador ou comandar outro agente.
          </motion.p>
        </motion.div>

        {GROUPS.map((group) => (
          <motion.div key={group} className="tools__group" variants={stagger(0.05)} {...inViewSoft}>
            <motion.h3 className="tools__label" variants={riseSmall}>
              {group}
              {group === "Orquestração" && (
                <span className="tools__badge mono">só para maestros</span>
              )}
            </motion.h3>
            <div className="tools__grid">
              {TOOLS.filter((tool) => tool.group === group).map((tool) => (
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

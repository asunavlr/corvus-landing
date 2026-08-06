import { useCopy } from "../content";
import SpotlightCard from "./rb/SpotlightCard";

const GROUPS = ["interaction", "verification", "sessions", "servers", "orchestration"] as const;

/**
 * As 24 ferramentas que o servidor MCP do proxy injeta em toda execução. As de
 * orquestração só são entregues a quem foi marcado como maestro.
 */
export default function Tools() {
  const copy = useCopy();
  return (
    <section className="section" id="mcp">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.tools.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.tools.title}</h2>
          <p className="lede" data-rise>{copy.tools.lede}</p>
        </div>

        {GROUPS.map((group) => (
          <div key={group} className="tools__group">
            <h3 className="tools__label" data-rise="sm">
              {copy.tools.groups[group]}
              {group === "orchestration" && (
                <span className="tools__badge mono">{copy.tools.badge}</span>
              )}
            </h3>
            <div className="tools__grid">
              {copy.tools.items
                .filter((tool) => tool.group === group)
                .map((tool, i) => (
                  <SpotlightCard as="article" key={i} className="tool" data-rise="sm">
                    <p className="tool__name mono">{tool.name}</p>
                    <p className="tool__body">{tool.body}</p>
                  </SpotlightCard>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

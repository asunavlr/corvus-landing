import { motion } from "motion/react";
import { useState } from "react";
import { useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";
import "./Docs.css";

/**
 * A documentação do Corvus é o próprio repositório — README, CLAUDE.md e código
 * comentado para ser lido por agente. Esta seção não repete nada disso: ela
 * entrega o prompt que faz o Claude ler os arquivos certos e configurar a
 * máquina de quem comprou.
 */
export default function Docs() {
  const copy = useCopy();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  async function copyPrompt(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Sem permissão de área de transferência (http, navegador antigo): o
      // seletor abaixo deixa o texto pronto para o Ctrl+C do usuário.
      const area = document.getElementById(`prompt-${index}`) as HTMLTextAreaElement | null;
      area?.select();
      return;
    }
    setCopiedIndex(index);
    window.setTimeout(() => setCopiedIndex((c) => (c === index ? null : c)), 2000);
  }

  return (
    <section className="section" id="docs">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            {copy.docs.eyebrow}
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            {copy.docs.title}
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            {copy.docs.lede}
          </motion.p>
        </motion.div>

        <div className="docs">
          <motion.div className="docs__prompts" variants={stagger(0.08, 0.1)} {...inViewSoft}>
            <motion.h3 className="docs__label" variants={riseSmall}>
              {copy.docs.promptsTitle}
            </motion.h3>

            {copy.docs.prompts.map((prompt, index) => (
              <motion.article key={prompt.title} className="prompt" variants={rise}>
                <header className="prompt__head">
                  <div>
                    <h4>{prompt.title}</h4>
                    <p className="prompt__hint">{prompt.hint}</p>
                  </div>
                  <button
                    className={`prompt__copy${copiedIndex === index ? " prompt__copy--done" : ""}`}
                    onClick={() => copyPrompt(prompt.text, index)}
                  >
                    {copiedIndex === index ? (
                      <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                        <path
                          d="M3 8.5l3.2 3.2L13 5"
                          stroke="currentColor"
                          strokeWidth="1.9"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
                        <rect
                          x="5.2"
                          y="5.2"
                          width="8"
                          height="8"
                          rx="1.6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <path
                          d="M10.8 5.2V3.8A1.6 1.6 0 009.2 2.2H3.8A1.6 1.6 0 002.2 3.8v5.4a1.6 1.6 0 001.6 1.6h1.4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {copiedIndex === index ? copy.docs.copied : copy.docs.copy}
                  </button>
                </header>
                <pre className="prompt__body mono">{prompt.text}</pre>
                {/* Reserva do reserva: se a área de transferência for negada,
                    este campo é selecionado e o usuário copia à mão. */}
                <textarea
                  id={`prompt-${index}`}
                  className="prompt__fallback"
                  readOnly
                  tabIndex={-1}
                  aria-hidden="true"
                  value={prompt.text}
                />
              </motion.article>
            ))}
          </motion.div>

          <motion.aside className="docs__ref" variants={stagger(0.05, 0.15)} {...inViewSoft}>
            <motion.h3 className="docs__label" variants={riseSmall}>
              {copy.docs.refTitle}
            </motion.h3>
            <dl>
              {copy.docs.reference.map((item) => (
                <motion.div key={item.term} className="docs__row" variants={riseSmall}>
                  <dt className="mono">{item.term}</dt>
                  <dd>{item.desc}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

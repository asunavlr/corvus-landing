import { useState } from "react";
import { useCopy } from "../content";
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
        <div>
          <p className="eyebrow" data-rise="sm">
            {copy.docs.eyebrow}
          </p>
          <h2 className="h2" data-rise>
            {copy.docs.title}
          </h2>
          <p className="lede" data-rise>
            {copy.docs.lede}
          </p>
        </div>

        <div className="docs">
          <div className="docs__prompts">
            <h3 className="docs__label" data-rise="sm">
              {copy.docs.promptsTitle}
            </h3>

            {copy.docs.prompts.map((prompt, index) => (
              <article key={index} className="prompt" data-rise>
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
              </article>
            ))}
          </div>

          <aside className="docs__ref">
            <h3 className="docs__label" data-rise="sm">
              {copy.docs.refTitle}
            </h3>
            <dl>
              {copy.docs.reference.map((item, i) => (
                <div key={i} className="docs__row" data-rise="sm">
                  <dt className="mono">{item.term}</dt>
                  <dd>{item.desc}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

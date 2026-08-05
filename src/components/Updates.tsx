import { motion } from "motion/react";
import { useLang } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";
import "./Updates.css";

const copy = {
  pt: {
    eyebrow: "O Corvus está evoluindo",
    title: "O que acabou de pousar.",
    lede: "Mais alcance, menos atrito e um Maestro que só considera o trabalho entregue quando existe prova.",
    shipped: "Já disponível",
    items: [
      {
        date: "04 AGO 2026",
        tag: "Infraestrutura",
        title: "Agentes dentro dos seus servidores",
        body: "Cadastre servidores por SSH e deixe os agentes executarem comandos, trabalharem com arquivos e verificarem aplicações remotas. Para assumir o controle, digite !ls, !cd ou !sudo direto na conversa — como no Claude Code.",
        details: ["Terminal ao vivo com !", "Chave, senha ou agente SSH", "Segredos cifrados fora do banco", "Auditoria e bloqueios de risco"],
        featured: true,
      },
      {
        date: "31 JUL 2026",
        tag: "Desktop",
        title: "Corvus agora é um aplicativo",
        body: "A edição completa ganhou janela própria no Windows, Node embutido e inicialização direta. Sem manter terminal ou aba do navegador abertos.",
        details: ["Instalador para Windows", "Diagnóstico do Claude CLI", "Versão e edição sempre visíveis"],
      },
      {
        date: "31 JUL 2026",
        tag: "Maestro",
        title: "Entrega exige prova",
        body: "O Maestro guarda o estado do quadro, cobra verificação real dos agentes e devolve tarefas que chegam sem evidência de que funcionam.",
        details: ["Memória durável do quadro", "Verificação por navegador ou API", "Tom dos agentes configurável"],
      },
      {
        date: "04 AGO 2026",
        tag: "Desempenho",
        title: "Conversas longas, cockpit leve",
        body: "A barra lateral passou a transferir só o necessário e conversas extensas carregam primeiro as mensagens recentes.",
        details: ["Menos tráfego em segundo plano", "Abas ocultas ficam em repouso", "Histórico carregado sob demanda"],
      },
    ],
    next: "Próximo voo",
    nextTitle: "O que vem por aí",
    nextStatus: "EM DESENVOLVIMENTO",
    nextItems: [
      {
        number: "01",
        title: "Seu Maestro no celular",
        body: "Um único terminal para comandar o Maestro, acompanhar vários projetos e controlar o trabalho dos agentes de onde você estiver — direto pelo celular.",
        tags: ["Acesso remoto", "Vários projetos", "Mobile"],
      },
      {
        number: "02",
        title: "Uma rede de Maestros",
        body: "Adicione amigos e converse com o Maestro deles para buscar informações, enviar contexto e ajudar a resolver problemas até em projetos que não existem na sua máquina.",
        tags: ["Contexto compartilhado", "Colaboração", "Entre cockpits"],
      },
    ],
  },
  en: {
    eyebrow: "Corvus keeps evolving",
    title: "What just landed.",
    lede: "More reach, less friction, and a Maestro that only marks work as done when there is proof.",
    shipped: "Now available",
    items: [
      {
        date: "AUG 04 2026", tag: "Infrastructure", title: "Agents inside your servers",
        body: "Register servers over SSH and let agents run commands, work with files, and verify remote apps. To take control, type !ls, !cd, or !sudo right in the conversation — just like in Claude Code.",
        details: ["Live terminal with !", "SSH key, password, or agent", "Secrets encrypted outside the database", "Auditing and risk safeguards"], featured: true,
      },
      {
        date: "JUL 31 2026", tag: "Desktop", title: "Corvus is now an app",
        body: "The full edition now has its own Windows window, embedded Node, and direct startup. No terminal or browser tab to keep open.",
        details: ["Windows installer", "Claude CLI diagnostics", "Version and edition always visible"],
      },
      {
        date: "JUL 31 2026", tag: "Maestro", title: "Delivery requires proof",
        body: "Maestro remembers the board state, demands real verification from agents, and sends back tasks delivered without evidence.",
        details: ["Durable board memory", "Browser or API verification", "Configurable agent tone"],
      },
      {
        date: "AUG 04 2026", tag: "Performance", title: "Long conversations, a light cockpit",
        body: "The sidebar now transfers only what it needs, and long conversations load recent messages first.",
        details: ["Less background traffic", "Hidden tabs stay idle", "History loaded on demand"],
      },
    ],
    next: "Next flight",
    nextTitle: "What's coming next",
    nextStatus: "IN DEVELOPMENT",
    nextItems: [
      {
        number: "01",
        title: "Your Maestro on mobile",
        body: "One terminal to command Maestro, follow multiple projects, and control agent work from wherever you are — right from your phone.",
        tags: ["Remote access", "Multiple projects", "Mobile"],
      },
      {
        number: "02",
        title: "A network of Maestros",
        body: "Add friends and talk to their Maestro to retrieve information, send context, and help solve problems even in projects that are not on your machine.",
        tags: ["Shared context", "Collaboration", "Across cockpits"],
      },
    ],
  },
};

export default function Updates() {
  const { lang } = useLang();
  const text = copy[lang];

  return (
    <section className="section updates" id="atualizacoes">
      <div className="shell">
        <motion.div className="updates__head" variants={stagger()} {...inViewSoft}>
          <motion.div variants={riseSmall}>
            <p className="eyebrow">{text.eyebrow}</p>
            <h2 className="h2">{text.title}</h2>
          </motion.div>
          <motion.p className="lede" variants={rise}>{text.lede}</motion.p>
        </motion.div>

        <motion.div className="updates__grid" variants={stagger(0.08, 0.08)} {...inViewSoft}>
          {text.items.map((item, index) => (
            <motion.article className={`update-card${item.featured ? " update-card--featured" : ""}`} variants={rise} key={index}>
              <div className="update-card__meta mono">
                <span>{item.date}</span><span>{item.tag}</span>
              </div>
              {index === 0 && <span className="update-card__available mono">● {text.shipped}</span>}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>{item.details.map((detail, detailIndex) => <li key={detailIndex}>{detail}</li>)}</ul>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="updates__next" variants={stagger(0.1, 0.05)} {...inViewSoft}>
          <motion.div className="updates__next-head" variants={rise}>
            <div className="updates__radar" aria-hidden="true"><i /><i /><span /></div>
            <div>
              <p className="eyebrow">{text.next}</p>
              <h3>{text.nextTitle}</h3>
            </div>
            <span className="updates__status mono">● {text.nextStatus}</span>
          </motion.div>
          <div className="updates__roadmap">
            {text.nextItems.map((item) => (
              <motion.article className="roadmap-card" variants={rise} key={item.number}>
                <span className="roadmap-card__number mono">{item.number}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <ul>{item.tags.map((tag) => <li className="mono" key={tag}>{tag}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

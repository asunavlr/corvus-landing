import { useLang } from "../content";
import SpotlightCard from "./rb/SpotlightCard";
import "./Updates.css";

const copy = {
  pt: {
    eyebrow: "O Corvus está evoluindo",
    title: "O que acabou de pousar.",
    lede: "Mais alcance, menos atrito e um Maestro que só considera o trabalho entregue quando existe prova.",
    shipped: "Já disponível",
    items: [
      {
        date: "06 AGO 2026",
        tag: "Segurança",
        title: "Agora o Corvus tem tranca",
        body: "Entrar passou a exigir a sua digital ou o seu rosto. O aparelho é cadastrado uma vez, a sessão fica assinada num cookie e há um código de emergência para quando o aparelho não estiver por perto. Antes não existia login nenhum.",
        details: ["Digital ou rosto (passkey)", "Cadastro do aparelho", "Código de emergência", "Tela de segurança nas preferências"],
        featured: true,
      },
      {
        date: "06 AGO 2026",
        tag: "Segurança",
        title: "A porta ficou fechada",
        body: "O servidor passou a atender só a própria máquina. Antes, qualquer um na mesma rede Wi-Fi alcançava o cockpit inteiro — conversas, projetos e agentes — sem precisar de nada.",
        details: ["Escuta em 127.0.0.1", "Barreira antes de cada rota", "Programas internos com crachá próprio"],
      },
      {
        date: "06 AGO 2026",
        tag: "Conversas",
        title: "Reiniciar sem perder o fio",
        body: "Quando as ferramentas param de responder, a conversa reinicia por conta própria: o processo cai, outro sobe no lugar e a mesma sessão é retomada. O histórico continua inteiro.",
        details: ["Rota própria de reinício", "Mesma sessão retomada", "Contexto preservado"],
      },
      {
        date: "04 AGO 2026",
        tag: "Infraestrutura",
        title: "Agentes dentro dos seus servidores",
        body: "Cadastre servidores por SSH e deixe os agentes executarem comandos, trabalharem com arquivos e verificarem aplicações remotas. Para assumir o controle, digite !ls, !cd ou !sudo direto na conversa — como no Claude Code.",
        details: ["Terminal ao vivo com !", "Chave, senha ou agente SSH", "Segredos cifrados fora do banco", "Auditoria e bloqueios de risco"],
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
        date: "05 AGO 2026",
        tag: "Sessões",
        title: "Traga suas conversas do terminal",
        body: "Peça em português e o agente procura as sessões que você já rodou no Claude Code e no Codex, mostra o que achou e pergunta em qual projeto elas entram antes de importar.",
        details: ["Claude Code e Codex", "Você escolhe o projeto", "Histórico e vínculo preservados"],
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
      {
        number: "03",
        title: "Corvus além do Claude Code",
        body: "O cockpit se torna multiagente, começando pelo Codex. O Maestro poderá compartilhar contexto, encaminhar tarefas e coordenar diferentes ferramentas de IA em um só lugar.",
        tags: ["Codex primeiro", "Cockpit multiagente", "Mais integrações"],
      },
      {
        number: "04",
        title: "O aperto do dia a dia",
        body: "Painel de custo por demanda e por dia, tarefa que caiu recomeçando do ponto em que parou, e um Maestro que acorda sozinho quando fica tempo demais sem falar.",
        tags: ["Custo por demanda", "Retomar tarefa", "Maestro proativo"],
      },
      {
        number: "05",
        title: "Abrir o cockpit de outro aparelho",
        body: "Acesso pela sua própria rede privada, sem expor endereço nenhum na internet. Já dá para alcançar de outra máquina, mas está EM CONSTRUÇÃO: no celular a tela ainda não carrega direito e a adaptação para telas pequenas não foi feita.",
        tags: ["Em construção", "Rede privada", "Sem expor na internet"],
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
        date: "AUG 06 2026", tag: "Security", title: "Corvus finally has a lock",
        body: "Getting in now takes your fingerprint or your face. The device is registered once, the session is signed into a cookie, and there is an emergency code for when the device is not around. Before this, there was no login at all.",
        details: ["Fingerprint or face (passkey)", "Device registration", "Emergency code", "A security screen in preferences"], featured: true,
      },
      {
        date: "AUG 06 2026", tag: "Security", title: "The door is shut",
        body: "The server now answers only its own machine. Before, anyone on the same Wi-Fi could reach the whole cockpit — conversations, projects and agents — without needing anything.",
        details: ["Listens on 127.0.0.1", "A barrier before every route", "Internal programs carry their own badge"],
      },
      {
        date: "AUG 06 2026", tag: "Conversations", title: "Restart without losing the thread",
        body: "When the tools stop answering, the conversation restarts on its own: the process goes down, another comes up in its place, and the same session is picked back up. The history stays whole.",
        details: ["A restart route of its own", "Same session resumed", "Context preserved"],
      },
      {
        date: "AUG 04 2026", tag: "Infrastructure", title: "Agents inside your servers",
        body: "Register servers over SSH and let agents run commands, work with files, and verify remote apps. To take control, type !ls, !cd, or !sudo right in the conversation — just like in Claude Code.",
        details: ["Live terminal with !", "SSH key, password, or agent", "Secrets encrypted outside the database", "Auditing and risk safeguards"],
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
        date: "AUG 05 2026", tag: "Sessions", title: "Bring your terminal conversations in",
        body: "Ask in plain language and the agent finds the sessions you already ran in Claude Code and Codex, shows what it found, and asks which project they belong to before importing.",
        details: ["Claude Code and Codex", "You pick the project", "History and link preserved"],
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
      {
        number: "03",
        title: "Corvus beyond Claude Code",
        body: "The cockpit becomes multi-agent, starting with Codex. Maestro will share context, route tasks, and coordinate different AI tools in one place.",
        tags: ["Codex first", "Multi-agent cockpit", "More integrations"],
      },
      {
        number: "04",
        title: "Everyday polish",
        body: "A cost panel per demand and per day, a failed task resuming from where it stopped, and a Maestro that wakes itself up when it has been quiet for too long.",
        tags: ["Cost per demand", "Resume a task", "Proactive Maestro"],
      },
      {
        number: "05",
        title: "Open the cockpit from another device",
        body: "Access over your own private network, with no address exposed to the internet. It already reaches another machine, but it is UNDER CONSTRUCTION: on a phone the screen still does not load properly, and the small-screen layout has not been done.",
        tags: ["Under construction", "Private network", "Nothing exposed online"],
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
        <div className="updates__head">
          <div>
            <p className="eyebrow" data-rise="sm">{text.eyebrow}</p>
            <h2 className="h2" data-rise>{text.title}</h2>
          </div>
          <p className="lede" data-rise>{text.lede}</p>
        </div>

        <div className="updates__grid">
          {text.items.map((item, index) => (
            <SpotlightCard
              as="article"
              key={index}
              className={`update-card${item.featured ? " update-card--featured" : ""}`}
              data-rise
            >
              <div className="update-card__meta mono">
                <span>{item.date}</span>
                <span>{item.tag}</span>
              </div>
              {index === 0 && <span className="update-card__available mono">● {text.shipped}</span>}
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <ul>
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </SpotlightCard>
          ))}
        </div>

        <div className="updates__next">
          <div className="updates__next-head" data-rise="sm">
            <div className="updates__radar" aria-hidden="true">
              <i />
              <i />
              <span />
            </div>
            <div>
              <p className="eyebrow">{text.next}</p>
              <h3>{text.nextTitle}</h3>
            </div>
            <span className="updates__status mono">● {text.nextStatus}</span>
          </div>
          <div className="updates__roadmap">
            {text.nextItems.map((item, index) => (
              <SpotlightCard as="article" className="roadmap-card" key={index} data-rise>
                <span className="roadmap-card__number mono">{item.number}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <ul>
                    {item.tags.map((tag, tagIndex) => (
                      <li className="mono" key={tagIndex}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Todo o texto da página em um lugar só. Os endpoints e as ferramentas MCP
 * foram tirados do código do Corvus, não inventados — se a API mudar, é aqui
 * que se corrige.
 */

export const REPO = "https://github.com/asunavlr/corvus";

/* --------------------------------- features -------------------------------- */

export type Feature = {
  title: string;
  body: string;
  detail: string;
};

export const FEATURES: Feature[] = [
  {
    title: "Turnos que não pertencem à aba",
    body:
      "O turno vive no servidor, com buffer de replay próprio. Feche o browser, recarregue, volte em outra máquina: você reata no meio do que estava acontecendo, sem perder um delta.",
    detail: "engine.ts · subscribe() · buffer de 4.000 eventos",
  },
  {
    title: "Conversas por projeto",
    body:
      "Barra lateral com projetos coloridos, conversas fixáveis, renomeáveis e movíveis. Diga “no people web, ajusta o login” e o Corvus arquiva a conversa no repositório certo sozinho.",
    detail: "projectResolver.ts",
  },
  {
    title: "Streaming de verdade",
    body:
      "NDJSON da CLI convertido em SSE: texto, raciocínio, chamadas de ferramenta com entrada e saída, e subagentes seguidos separadamente do transcript principal.",
    detail: "stream-json → 17 tipos de evento",
  },
  {
    title: "A sua máquina, inteira",
    body:
      "Sem --bare, sem --safe-mode. claude-mem, hooks, skills, servidores MCP, CLAUDE.md e permissões continuam valendo dentro do Corvus, exatamente como no terminal.",
    detail: "spawn herda o ambiente",
  },
  {
    title: "Perguntas que aparecem na tela",
    body:
      "Modo headless não tem prompt interativo. O Corvus injeta um servidor MCP: o agente estaciona a pergunta, ela vira um cartão no browser — inclusive fora da aba — e a resposta destrava a chamada.",
    detail: "corvus-mcp.mjs · /api/decisions",
  },
  {
    title: "Banco sem build nativo",
    body:
      "SQLite pelo node:sqlite embutido no Node. Sete tabelas, migrações incrementais e backup diário em ~/.corvus. Nenhum módulo compilado para quebrar na próxima versão.",
    detail: "db.ts · durable.ts",
  },
];

/* ------------------------------ orquestração ------------------------------- */

export const FLOW: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Vira demanda",
    body:
      "Tudo que você pede entra no quadro antes de virar trabalho. Um assunto, uma demanda — cinco pedidos numa mensagem são cinco linhas.",
  },
  {
    step: "02",
    title: "Vira tarefa",
    body:
      "O maestro delega: um agente por demanda, na pasta certa, com prompt autossuficiente. Cada tarefa ganha sua própria conversa na barra lateral.",
  },
  {
    step: "03",
    title: "A fila decide",
    body:
      "Limite global e limite por pasta, dependências entre tarefas, cancelamento em cascata e coleta de órfãs quando um processo morre.",
  },
  {
    step: "04",
    title: "O resultado acorda o maestro",
    body:
      "Ninguém fica bloqueado esperando. Quando o agente termina, o Corvus acorda o maestro com o resultado e o quadro inteiro na mão.",
  },
];

export const ORCHESTRATION: { title: string; body: string }[] = [
  {
    title: "Pulso autônomo",
    body:
      "A cada oito minutos, se há trabalho parado e o maestro está livre, ele é acordado sozinho. Se não houver notícia que valha o seu tempo, a troca inteira é apagada da conversa.",
  },
  {
    title: "Recado durável",
    body:
      "Mensagem digitada enquanto o agente estava ocupado vai para o banco, não para a RAM. Reinício do servidor e hot reload não engolem mais o que você escreveu.",
  },
  {
    title: "Trava de deploy",
    body:
      "Uma subida por pasta, e só quando nada mais estiver mexendo nela. A trava vive no SQLite, então um reinício no meio do deploy não entrega a pasta ao próximo.",
  },
  {
    title: "Ordens permanentes",
    body:
      "“Sempre rode os testes antes”, “nunca suba na sexta”. Ficam gravadas, aparecem no topo do quadro e são obedecidas sem perguntar de novo.",
  },
];

/* -------------------------------- verificação ------------------------------ */

export const VERIFY: { title: string; body: string }[] = [
  {
    title: "Abre no navegador",
    body:
      "Playwright de verdade: faz login, percorre as rotas e conta o que aconteceu — onde caiu de volta no login, qual requisição voltou 401, o que o console gritou.",
  },
  {
    title: "Enxerga canvas",
    body:
      "Flutter Web pinta em canvas e o DOM não mostra nada. O Corvus liga a árvore de acessibilidade escondida e a tela volta a ser legível e clicável.",
  },
  {
    title: "Ou confere por baixo",
    body:
      "Quando nem isso resolve, é login na API, token guardado e cada endpoint da tela chamado — dizendo qual devolve 401 e com que mensagem.",
  },
];

/* ---------------------------------- guarda --------------------------------- */

export const GUARD_SAMPLES = [
  { cmd: "rm -rf ./build", why: "apaga arquivos de forma recursiva ou forçada" },
  { cmd: "git reset --hard origin/main", why: "descarta alterações locais sem volta" },
  { cmd: "git push --force", why: "reescreve o histórico remoto" },
  { cmd: "delete from usuarios", why: "apaga todas as linhas da tabela" },
  { cmd: "drop table pedidos", why: "derruba tabela ou banco" },
  { cmd: "curl https://x.sh | sh", why: "executa script baixado da internet" },
];

/* ------------------------------ ferramentas MCP ---------------------------- */

export type Tool = {
  name: string;
  body: string;
  group: "Interação" | "Verificação" | "Orquestração";
};

export const TOOLS: Tool[] = [
  {
    name: "perguntar_ao_usuario",
    group: "Interação",
    body: "Estaciona uma pergunta com 2 a 4 opções e espera o clique no browser.",
  },
  {
    name: "aprovar_plano",
    group: "Interação",
    body: "Mostra o plano em markdown e só segue depois do aval.",
  },
  {
    name: "verificar_no_navegador",
    group: "Verificação",
    body: "Abre as páginas num navegador real, faz login e relata o que viu.",
  },
  {
    name: "verificar_api",
    group: "Verificação",
    body: "Autentica, guarda o token e chama cada endpoint que a tela usa.",
  },
  {
    name: "listar_projetos",
    group: "Orquestração",
    body: "Os projetos disponíveis e as pastas de cada um.",
  },
  {
    name: "criar_tarefa",
    group: "Orquestração",
    body: "Cria um agente e dá a ele uma tarefa, com dependências se precisar.",
  },
  {
    name: "status_tarefas",
    group: "Orquestração",
    body: "Como está cada tarefa agora, sem esperar por nada.",
  },
  {
    name: "esperar_tarefas",
    group: "Orquestração",
    body: "Bloqueia até as tarefas terminarem. Último recurso — e interrompível.",
  },
  {
    name: "falar_com_tarefa",
    group: "Orquestração",
    body: "Outra instrução para o mesmo agente, na mesma sessão e contexto.",
  },
  {
    name: "cancelar_tarefa",
    group: "Orquestração",
    body: "Mata a tarefa e o agente dela.",
  },
  {
    name: "limpar_tarefas",
    group: "Orquestração",
    body: "Varre as concluídas e paradas há dias, arquivando ou apagando.",
  },
  {
    name: "anotar_demanda",
    group: "Orquestração",
    body: "Registra no quadro o que foi pedido, com prioridade.",
  },
  {
    name: "ver_quadro",
    group: "Orquestração",
    body: "O quadro inteiro: demandas, tarefas, regras e o que não fecha.",
  },
  {
    name: "mover_demanda",
    group: "Orquestração",
    body: "Aberta, fazendo, travada, entregue ou descartada — com a nota do porquê.",
  },
  {
    name: "anotar_regra",
    group: "Orquestração",
    body: "Grava uma ordem permanente, na sua voz.",
  },
  {
    name: "pedir_deploy",
    group: "Orquestração",
    body: "Confere se a pasta está livre, pede o seu aval e trava durante a subida.",
  },
];

/* ----------------------------------- API ----------------------------------- */

export type Route = { methods: string[]; path: string; body: string };
export type ApiGroup = { id: string; label: string; blurb: string; routes: Route[] };

export const API: ApiGroup[] = [
  {
    id: "conversas",
    label: "Conversas",
    blurb: "O núcleo: criar, editar e rodar um turno — que continua vivo sem ninguém olhando.",
    routes: [
      { methods: ["GET", "POST"], path: "/api/chats", body: "Lista as conversas com contagem de mensagens, ou cria uma." },
      { methods: ["GET", "PATCH", "DELETE"], path: "/api/chats/[id]", body: "Título, pasta, modelo, modo de permissão, fixar, arquivar." },
      { methods: ["POST", "GET"], path: "/api/chats/[id]/stream", body: "POST dispara o turno e transmite por SSE; GET reata a um turno já em voo." },
      { methods: ["GET", "DELETE"], path: "/api/chats/[id]/messages", body: "Transcript da conversa, ou trunca dali para a frente (editar e reenviar)." },
      { methods: ["POST"], path: "/api/chats/[id]/abort", body: "Mata a árvore de processos da CLI daquele turno." },
      { methods: ["GET"], path: "/api/running", body: "Quem está rodando agora — o pontinho verde da barra lateral." },
    ],
  },
  {
    id: "projetos",
    label: "Projetos",
    blurb: "Pastas, cores e a ponte com o que a CLI já tem no disco.",
    routes: [
      { methods: ["GET", "POST"], path: "/api/projects", body: "Lista e cria projetos, com cor e pasta padrão." },
      { methods: ["PATCH", "DELETE"], path: "/api/projects/[id]", body: "Renomeia, recolore, aponta pasta ou remove (com ou sem as conversas)." },
      { methods: ["GET"], path: "/api/fs", body: "Navegador de diretórios da máquina, para o seletor de pasta." },
      { methods: ["GET"], path: "/api/claude-projects", body: "Descobre pastas que a CLI já usou, com nº de sessões e último uso." },
      { methods: ["GET"], path: "/api/claude-mem", body: "Lê as memórias do claude-mem no escopo daquela pasta." },
      { methods: ["GET", "POST", "PUT", "DELETE"], path: "/api/claude-config", body: "Regras e skills do CLAUDE.md, por escopo — cria, edita e remove." },
    ],
  },
  {
    id: "orquestrador",
    label: "Orquestrador",
    blurb: "A fila, o quadro e tudo que o maestro comanda pelo MCP.",
    routes: [
      { methods: ["GET", "POST"], path: "/api/orchestrator/tasks", body: "Tarefas de um maestro (ou de todos), e enfileiramento de uma nova." },
      { methods: ["GET", "POST", "DELETE"], path: "/api/orchestrator/tasks/[id]", body: "Estado da tarefa, nova instrução ao mesmo agente, ou cancelamento." },
      { methods: ["POST"], path: "/api/orchestrator/wait", body: "Espera as tarefas terminarem — e devolve na hora se você interromper." },
      { methods: ["POST"], path: "/api/orchestrator/nudge", body: "Entrega a sua mensagem a um maestro que está parado escutando os agentes." },
      { methods: ["GET", "POST", "PATCH"], path: "/api/orchestrator/demands", body: "O quadro: o que foi pedido, em que pé está, com que nota." },
      { methods: ["GET", "POST", "DELETE"], path: "/api/orchestrator/rules", body: "Ordens permanentes do maestro." },
      { methods: ["POST"], path: "/api/orchestrator/deploy", body: "Checa a pasta, pede aval e segura a trava enquanto sobe." },
      { methods: ["GET"], path: "/api/orchestrator/projects", body: "Os projetos como o maestro os enxerga, com pasta resolvida." },
      { methods: ["POST"], path: "/api/orchestrator/cleanup", body: "Varre conversas de trabalho velhas: arquiva ou apaga." },
    ],
  },
  {
    id: "decisoes",
    label: "Decisões e verificação",
    blurb: "O que trava esperando você, e o que prova que a entrega funciona.",
    routes: [
      { methods: ["GET", "POST"], path: "/api/decisions", body: "As perguntas estacionadas; POST é o agente parando para perguntar." },
      { methods: ["POST"], path: "/api/decisions/[id]", body: "A sua resposta — destrava a chamada MCP que estava esperando." },
      { methods: ["POST"], path: "/api/browser/audit", body: "Percorre rotas num navegador real e devolve o relatório." },
      { methods: ["POST"], path: "/api/browser/api-check", body: "Login na API, token guardado, cada endpoint chamado." },
    ],
  },
  {
    id: "sistema",
    label: "Sistema",
    blurb: "Ajustes, janela de manutenção, backup e o diário do que aconteceu.",
    routes: [
      { methods: ["GET", "PATCH"], path: "/api/settings", body: "Pasta padrão, limites da fila, turbo com freio, política de limpeza." },
      { methods: ["GET", "POST"], path: "/api/maintenance", body: "Pausa a fila: o que roda termina, nada novo começa." },
      { methods: ["GET", "POST"], path: "/api/backups", body: "Lista as cópias do banco e faz uma agora." },
      { methods: ["GET"], path: "/api/audit", body: "O relato do próprio Corvus, para ninguém precisar ler console." },
    ],
  },
];

export const API_TOTAL = API.reduce((sum, group) => sum + group.routes.length, 0);

/* ---------------------------------- stack ---------------------------------- */

export const STACK: { name: string; role: string }[] = [
  { name: "Next.js 16", role: "App Router, rotas de API em runtime Node" },
  { name: "React 19", role: "Interface, com zustand no estado do cliente" },
  { name: "node:sqlite", role: "Banco embutido, sem módulo nativo" },
  { name: "SSE", role: "Streaming do turno, reatável a qualquer momento" },
  { name: "MCP", role: "Servidor próprio, injetado em toda execução" },
  { name: "Playwright", role: "O navegador que prova que a tela funciona" },
];

export const STATS: { value: string; label: string }[] = [
  { value: "29", label: "rotas de API" },
  { value: "16", label: "ferramentas MCP" },
  { value: "10", label: "tabelas no SQLite" },
  { value: "25", label: "padrões barrados pela guarda" },
];

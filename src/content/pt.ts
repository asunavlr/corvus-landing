/**
 * O texto em português. `en.ts` espelha esta forma — o tipo `Copy` sai daqui,
 * então qualquer chave nova quebra o build da tradução até ela existir também.
 *
 * Rotas, ferramentas e comandos vieram do código do Corvus, não de memória.
 */

export const SPONSOR = "https://github.com/sponsors/asunavlr";
/** A vitrine pública do teste — onde o `npx corvus-trial` mora. */
export const REPO_TRIAL = "https://github.com/asunavlr/corvus-trial";
export const PRICE_USD = 15;
/** Cotação de 30/07/2026; a cobrança é em dólar, o real é só referência. */
export const PRICE_BRL = 77;

export const pt = {
  code: "pt",
  label: "PT",
  nav: {
    links: [
      { href: "#produto", label: "Produto" },
      { href: "#telas", label: "Telas" },
      { href: "#rede", label: "Rede" },
      { href: "#api", label: "API" },
      { href: "#docs", label: "Docs" },
      { href: "#preco", label: "Preço" },
    ],
    /** O resto das seções vive aqui: no desktop é um menu que abre, no celular entra na lista. */
    more: {
      label: "Mais",
      links: [
        { href: "#recursos", label: "Recursos" },
        { href: "#orquestracao", label: "Orquestração" },
        { href: "#verificacao", label: "Verificação" },
        { href: "#guarda", label: "Freio" },
        { href: "#desktop", label: "Desktop" },
        { href: "#registro", label: "Backup e rastro" },
        { href: "#mcp", label: "MCP" },
        { href: "#stack", label: "Stack" },
      ],
    },
    menuLabel: "Abrir menu",
    cta: "Assinar",
  },

  hero: {
    badge: "proxy local para o Claude Code CLI",
    titleA: "Em vez de cinco terminais abertos,",
    titleEm: "um cockpit só.",
    lede:
      "Você compra, roda um comando no terminal e o dashboard abre no seu navegador. " +
      "Conversas organizadas por projeto, turnos que sobrevivem ao fechar da aba e um " +
      "maestro que comanda agentes em vários repositórios ao mesmo tempo — cobrando prova " +
      "de que a entrega funciona.",
    ctaPrimary: "Testar 7 dias grátis",
    ctaSecondary: "Ver o preço",
    terminalCaption: "um comando, e o cockpit está no ar",
    terminalChips: ["proxy · 127.0.0.1:3210", "claude cli", "teste · 7 dias"],
    terminalComment: "# o dashboard abre no navegador · nada sai da sua máquina",
    stats: [
      { value: "29", label: "rotas de API" },
      { value: "16", label: "ferramentas MCP" },
      { value: "1", label: "comando para subir" },
      { value: "0", label: "dado saindo da sua máquina" },
    ],
  },

  proxy: {
    eyebrow: "Como funciona",
    title: "Um proxy na sua máquina. Nada na nuvem.",
    lede:
      "O Corvus não é um SaaS: é um processo que roda no seu terminal, na sua máquina, " +
      "com o seu Claude Code e as suas pastas. O dashboard é a interface dele — abre em " +
      "localhost e morre quando você fecha o processo. Nenhum código seu passa por servidor nosso.",
    steps: [
      {
        step: "01",
        title: "Assine no GitHub",
        body:
          "O patrocínio te dá acesso de leitura ao repositório corvus-prod, com o código " +
          "completo. Não existe chave para guardar nem perder: o acesso é a sua conta do GitHub.",
      },
      {
        step: "02",
        title: "Rode o proxy",
        body:
          "Um comando, sem instalar nada. Ele detecta o Claude Code que você já tem e sobe " +
          "o servidor local.",
      },
      {
        step: "03",
        title: "Abra o dashboard",
        body:
          "localhost:3210 no navegador. Daí em diante é só trabalhar — o proxy fica no " +
          "terminal, cuidando dos processos.",
      },
    ],
    note:
      "Enquanto o proxy roda, tudo que já está configurado na sua máquina continua valendo: " +
      "claude-mem, hooks, skills, servidores MCP, CLAUDE.md e permissões.",
    terminal: {
      caption: "o proxy no ar",
      lines: [
        { kind: "cmd", text: "npx corvus-trial" },
        { kind: "blank", text: "" },
        { kind: "ok", text: "proxy no ar        127.0.0.1:3210" },
        { kind: "ok", text: "teste              7 dias · 300 chamadas" },
        { kind: "ok", text: "claude cli         detectado (v2.4.1)" },
        { kind: "ok", text: "banco              ~/.corvus/corvus.db" },
        { kind: "blank", text: "" },
        { kind: "url", text: "dashboard → http://localhost:3210" },
        { kind: "dim", text: "ctrl+c encerra o proxy e mata os agentes vivos" },
      ],
    },
  },

  shots: {
    eyebrow: "O cockpit",
    title: "É isto que abre no navegador",
    lede:
      "Capturas do produto rodando — barra lateral por projeto, o quadro do maestro à " +
      "direita, chamadas de ferramenta expansíveis e o custo de cada turno no rodapé.",
    items: [
      {
        src: "/images/shot-maestro.png",
        title: "O maestro e o quadro",
        body:
          "À direita, o departamento: demandas em aberto e todos os agentes, com estado e " +
          "custo. À esquerda, cada projeto com suas conversas. No meio, o que o maestro fez " +
          "neste turno — inclusive as chamadas MCP.",
      },
      {
        src: "/images/shot-agente.png",
        title: "Um agente trabalhando",
        body:
          "Raciocínio, cada ferramenta com entrada e saída, e o relato final no formato que " +
          "o Corvus exige: o que mudou, o que foi verificado e como, o que ficou pendente.",
      },
      {
        src: "/images/shot-decisao.png",
        title: "A pergunta que trava o trabalho",
        body:
          "Processo headless não tem prompt interativo. O agente estaciona a decisão, ela " +
          "aparece no meio da tela — mesmo se você estiver em outra conversa — e a sua " +
          "resposta destrava a chamada.",
      },
    ],
  },

  network: {
    eyebrow: "Rede",
    title: "O cockpit inteiro como um mapa",
    lede:
      "Pastas guardam conversas, conversas comandam agentes, agentes abrem subagentes. " +
      "Tudo isso vira uma constelação navegável — como o grafo do Obsidian, só que os nós " +
      "estão trabalhando. Arraste para organizar; a faísca percorre a ligação por onde há " +
      "trabalho passando de verdade.",
    hint: "arraste os nós · toque para isolar",
    legend: [
      { kind: "project", label: "projeto" },
      { kind: "orchestrator", label: "maestro" },
      { kind: "chat", label: "conversa" },
      { kind: "task", label: "agente" },
      { kind: "subagent", label: "subagente" },
    ],
    nodes: {
      people: "People Web",
      fin: "Financeiro API",
      app: "App Mobile",
      site: "Site Institucional",
      maestro: "Maestro",
      t1: "Redirect pós-SSO",
      t2: "Timeout do relatório",
      t3: "Perfil em branco",
      t4: "Deploy da home",
      c1: "Acessibilidade",
      s1: "buscar rotas",
      s2: "ler migrações",
    },
    caption: "A mesma rede, dentro do produto",
    /** Decisão do dono: a rede entre instalações entra na página já avisando que não está pronta. */
    wip: {
      badge: "Em construção",
      note: "Esta parte ainda está sendo feita. O que está descrito abaixo ainda não está pronto para uso.",
    },
    deep: {
      title: "Dois Corvus conversando",
      lede: "A rede não é um desenho. É um canal fechado entre duas instalações do Corvus.",
      items: [
        "O que trafega vai cifrado ponta a ponta e assinado. O servidor no meio guarda envelopes fechados: não lê prompt, não guarda chave, não manda ninguém executar nada.",
        "Uma mensagem que chega vira turno de verdade no seu maestro — não é caixa de entrada, é trabalho começando.",
        "Cada contato tem permissão própria: só conversar, ou também propor tarefa. E dá para bloquear.",
        "Envelope vale 30 dias, 500 por sincronização, com limite de tráfego. O relay sobe num container e escuta só onde você mandar.",
      ],
    },
  },

  desktop: {
    eyebrow: "Versão desktop",
    title: "Também é um aplicativo",
    lede: "Se você não quer terminal, instale e abra.",
    items: [
      {
        title: "Instalador para Windows.",
        body: "Um atalho no menu iniciar, janela própria, sem digitar endereço.",
      },
      {
        title: "Não precisa ter Node instalado.",
        body: "O Corvus inteiro vai junto.",
      },
      {
        title: "Continua rodando só na sua máquina, em 127.0.0.1.",
        body: "Fechou a janela, o servidor morre com ela.",
      },
    ],
  },

  trail: {
    eyebrow: "Backup, auditoria e ordens permanentes",
    title: "Nada se perde, nada se repete",
    lede:
      "Trabalho de agente precisa de memória e de rastro. O Corvus tem os dois, sem você pedir.",
    items: [
      {
        title: "Backup sozinho, todo dia.",
        body:
          "Uma cópia do banco por dia em ~/.corvus/backups, as 10 mais recentes guardadas. " +
          "Cópia consistente, feita com o Corvus rodando.",
      },
      {
        title: "Sete dias de rastro.",
        body:
          "Turno que começou e terminou, tarefa aprovada, recusada ou entregue sem verificação, " +
          "pergunta feita e respondida, deploy travado, comando negado no servidor. Vinte tipos " +
          "de evento, com hora, conversa e tarefa.",
      },
      {
        title: "Ordens que ficam.",
        body:
          "“Sempre rode os testes antes.” “Nunca suba na sexta.” Você diz uma vez e a ordem entra " +
          "no topo de cada retomada do maestro. Ele não pergunta de novo.",
      },
    ],
  },

  features: {
    eyebrow: "Recursos",
    title: "O que a CLI não te dá sozinha",
    lede:
      "Nada aqui substitui o Claude Code — é a mesma CLI, com o mesmo ambiente da sua " +
      "máquina. O que muda é o que acontece em volta dela.",
    items: [
      {
        title: "Turnos que não pertencem à aba",
        body:
          "O turno vive no proxy, com buffer de replay próprio. Feche o browser, recarregue, " +
          "volte de outro dispositivo na mesma rede: você reata no meio do que estava " +
          "acontecendo, sem perder um delta.",
        detail: "engine.ts · subscribe() · buffer de 4.000 eventos",
      },
      {
        title: "Conversas por projeto",
        body:
          "Projetos coloridos, conversas fixáveis, renomeáveis e movíveis. Diga “no people " +
          "web, ajusta o login” e o Corvus arquiva a conversa no repositório certo sozinho.",
        detail: "projectResolver.ts",
      },
      {
        title: "Streaming de verdade",
        body:
          "NDJSON da CLI convertido em SSE: texto, raciocínio, chamadas de ferramenta com " +
          "entrada e saída, e subagentes seguidos separadamente do transcript principal.",
        detail: "stream-json → 17 tipos de evento",
      },
      {
        title: "A sua máquina, inteira",
        body:
          "Sem --bare, sem --safe-mode. claude-mem, hooks, skills, servidores MCP, CLAUDE.md " +
          "e permissões continuam valendo dentro do Corvus, exatamente como no terminal.",
        detail: "o proxy herda o ambiente",
      },
      {
        title: "Perguntas que aparecem na tela",
        body:
          "Modo headless não tem prompt interativo. O Corvus injeta um servidor MCP: o agente " +
          "estaciona a pergunta, ela vira um cartão no browser e a resposta destrava a chamada.",
        detail: "corvus-mcp.mjs · /api/decisions",
      },
      {
        title: "Banco sem build nativo",
        body:
          "SQLite pelo node:sqlite embutido no Node. Dez tabelas, migrações incrementais e " +
          "backup diário em ~/.corvus. Nenhum módulo compilado para quebrar na próxima versão.",
        detail: "db.ts · durable.ts",
      },
    ],
  },

  orchestration: {
    eyebrow: "Orquestração",
    title: "Um maestro, vários repositórios",
    lede:
      "Marque uma conversa como maestro e ela ganha um departamento: não edita arquivo " +
      "nenhum, cria agentes que editam. Cada tarefa vira uma conversa própria na barra " +
      "lateral, com histórico e sessão inteiros.",
    flow: [
      {
        step: "01",
        title: "Vira demanda",
        body:
          "Tudo que você pede entra no quadro antes de virar trabalho. Um assunto, uma " +
          "demanda — cinco pedidos numa mensagem são cinco linhas.",
      },
      {
        step: "02",
        title: "Vira tarefa",
        body:
          "O maestro delega: um agente por demanda, na pasta certa, com prompt " +
          "autossuficiente. Cada tarefa ganha sua própria conversa.",
      },
      {
        step: "03",
        title: "A fila decide",
        body:
          "Limite global e limite por pasta, dependências entre tarefas, cancelamento em " +
          "cascata e coleta de órfãs quando um processo morre.",
      },
      {
        step: "04",
        title: "O resultado acorda o maestro",
        body:
          "Ninguém fica bloqueado esperando. Quando o agente termina, o Corvus acorda o " +
          "maestro com o resultado e o quadro inteiro na mão.",
      },
    ],
    cards: [
      {
        title: "Pulso autônomo",
        body:
          "A cada oito minutos, se há trabalho parado e o maestro está livre, ele é acordado " +
          "sozinho. Se não houver notícia que valha o seu tempo, a troca inteira é apagada.",
      },
      {
        title: "Recado durável",
        body:
          "Mensagem digitada enquanto o agente estava ocupado vai para o banco, não para a " +
          "RAM. Reinício do proxy não engole mais o que você escreveu.",
      },
      {
        title: "Trava de deploy",
        body:
          "Uma subida por pasta, e só quando nada mais estiver mexendo nela. A trava vive no " +
          "SQLite, então um reinício no meio do deploy não entrega a pasta ao próximo.",
      },
      {
        title: "Ordens permanentes",
        body:
          "“Sempre rode os testes antes”, “nunca suba na sexta”. Ficam gravadas, aparecem no " +
          "topo do quadro e são obedecidas sem perguntar de novo.",
      },
    ],
  },

  verify: {
    eyebrow: "Entrega verificada",
    title: "“Está funcionando” não é entrega",
    lede:
      "Agente que mexe numa tela e diz que deu certo sem abrir é como o 401 aparece dois " +
      "minutos depois, do seu lado. No Corvus, mexeu em tela, rota, permissão ou login, " +
      "alguém abre — e conta o que viu.",
    items: [
      {
        title: "Abre no navegador",
        body:
          "Playwright de verdade: faz login, percorre as rotas e conta o que aconteceu — onde " +
          "caiu de volta no login, qual requisição voltou 401, o que o console gritou.",
      },
      {
        title: "Enxerga canvas",
        body:
          "Flutter Web pinta em canvas e o DOM não mostra nada. O Corvus liga a árvore de " +
          "acessibilidade escondida e a tela volta a ser legível e clicável.",
      },
      {
        title: "Ou confere por baixo",
        body:
          "Quando nem isso resolve, é login na API, token guardado e cada endpoint da tela " +
          "chamado — dizendo qual devolve 401 e com que mensagem.",
      },
    ],
    report: {
      tool: "verificar_no_navegador",
      tag: "playwright",
      rows: [
        { status: "ok", route: "/login", note: "200 · formulário preenchido, sessão criada" },
        { status: "ok", route: "/painel", note: "200 · perfil admin, 18 pessoas" },
        { status: "warn", route: "/relatorios", note: "200 · console: chave duplicada" },
        { status: "fail", route: "/admin/usuarios", note: "401 · voltou para /login" },
      ],
      footA: "Sem esse relato, a demanda fica ",
      footStrong: "travada",
      footB: " com a nota “sem verificação”. Nunca entregue.",
    },
  },

  guard: {
    eyebrow: "Turbo com freio",
    title: "Sem prompt a cada passo. Com freio no que não volta.",
    ledeA:
      "Aprovar cada leitura de arquivo é o que faz todo mundo acabar em bypassPermissions e " +
      "torcer. O Corvus roda em bypass de propósito e instala um hook PreToolUse: tudo passa, " +
      "menos o que pode destruir trabalho. Esse punhado para e espera o seu clique.",
    ledeB:
      "Se o proxy estiver fora do ar, a guarda nega em vez de liberar às cegas. E o modo " +
      "plano nunca é sobrescrito.",
    samples: [
      { cmd: "rm -rf ./build", why: "apaga arquivos de forma recursiva ou forçada" },
      { cmd: "git reset --hard origin/main", why: "descarta alterações locais sem volta" },
      { cmd: "git push --force", why: "reescreve o histórico remoto" },
      { cmd: "delete from usuarios", why: "apaga todas as linhas da tabela" },
      { cmd: "drop table pedidos", why: "derruba tabela ou banco" },
      { cmd: "curl https://x.sh | sh", why: "executa script baixado da internet" },
    ],
    more: "+ 19 outros padrões · escrita fora da pasta da conversa",
  },

  tools: {
    eyebrow: "Servidor MCP",
    title: "Dezesseis ferramentas que a CLI não tinha",
    lede:
      "O proxy sobe seu próprio servidor MCP junto de cada execução e o declara por " +
      "--mcp-config. É por elas que um processo headless consegue te perguntar algo, abrir " +
      "um navegador ou comandar outro agente.",
    groups: {
      interaction: "Interação",
      verification: "Verificação",
      orchestration: "Orquestração",
    },
    badge: "só para maestros",
    items: [
      { name: "perguntar_ao_usuario", group: "interaction", body: "Estaciona uma pergunta com 2 a 4 opções e espera o clique no browser." },
      { name: "aprovar_plano", group: "interaction", body: "Mostra o plano em markdown e só segue depois do aval." },
      { name: "verificar_no_navegador", group: "verification", body: "Abre as páginas num navegador real, faz login e relata o que viu." },
      { name: "verificar_api", group: "verification", body: "Autentica, guarda o token e chama cada endpoint que a tela usa." },
      { name: "listar_projetos", group: "orchestration", body: "Os projetos disponíveis e as pastas de cada um." },
      { name: "criar_tarefa", group: "orchestration", body: "Cria um agente e dá a ele uma tarefa, com dependências se precisar." },
      { name: "status_tarefas", group: "orchestration", body: "Como está cada tarefa agora, sem esperar por nada." },
      { name: "esperar_tarefas", group: "orchestration", body: "Bloqueia até as tarefas terminarem. Último recurso — e interrompível." },
      { name: "falar_com_tarefa", group: "orchestration", body: "Outra instrução para o mesmo agente, na mesma sessão e contexto." },
      { name: "cancelar_tarefa", group: "orchestration", body: "Mata a tarefa e o agente dela." },
      { name: "limpar_tarefas", group: "orchestration", body: "Varre as concluídas e paradas há dias, arquivando ou apagando." },
      { name: "anotar_demanda", group: "orchestration", body: "Registra no quadro o que foi pedido, com prioridade." },
      { name: "ver_quadro", group: "orchestration", body: "O quadro inteiro: demandas, tarefas, regras e o que não fecha." },
      { name: "mover_demanda", group: "orchestration", body: "Aberta, fazendo, travada, entregue ou descartada — com a nota do porquê." },
      { name: "anotar_regra", group: "orchestration", body: "Grava uma ordem permanente, na sua voz." },
      { name: "pedir_deploy", group: "orchestration", body: "Confere se a pasta está livre, pede o seu aval e trava durante a subida." },
    ],
  },

  api: {
    eyebrow: "Referência de API",
    title: "29 rotas, todas locais",
    lede:
      "O proxy expõe uma API HTTP em localhost, consumida pelo dashboard, pelo servidor MCP " +
      "e pelo hook de guarda. Ela nasce e morre com o processo no seu terminal — /api/fs " +
      "lista o seu disco e /api/chats/[id]/stream executa a CLI. Não exponha essa porta na rede.",
    groups: [
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
    ],
  },

  stack: {
    eyebrow: "Por baixo",
    title: "Pouca peça, nenhuma mágica",
    items: [
      { name: "Next.js 16", role: "O proxy e o dashboard, num processo só" },
      { name: "React 19", role: "Interface, com zustand no estado do cliente" },
      { name: "node:sqlite", role: "Banco embutido, sem módulo nativo" },
      { name: "SSE", role: "Streaming do turno, reatável a qualquer momento" },
      { name: "MCP", role: "Servidor próprio, injetado em toda execução" },
      { name: "Playwright", role: "O navegador que prova que a tela funciona" },
    ],
    eventsLabel: "Eventos do stream",
  },

  docs: {
    eyebrow: "Documentação",
    title: "Quem te ensina o Corvus é o Claude",
    lede:
      "O repositório vem com README, CLAUDE.md e um código comentado de ponta a ponta — " +
      "escrito para ser lido por agente. Em vez de você garimpar tudo isso, copie um dos " +
      "prompts abaixo, cole no Claude Code dentro da pasta do Corvus e peça. Ele lê os " +
      "arquivos certos e te configura.",
    copy: "Copiar prompt",
    copied: "Copiado",
    promptsTitle: "Prompts prontos",
    refTitle: "Referência rápida",
    prompts: [
      {
        title: "Subir pela primeira vez",
        hint: "instala, sobe o proxy e abre o dashboard",
        text:
          "Estou configurando o Corvus, um proxy local que roda o Claude Code CLI e serve um " +
          "dashboard no navegador. Leia o README.md e o src/lib/claude.ts deste repositório " +
          "antes de responder.\n\nMe ajude a: 1) confirmar que o Claude Code CLI está " +
          "instalado e autenticado nesta máquina; 2) subir o proxy; 3) abrir o dashboard e " +
          "criar meu primeiro projeto apontando para a pasta de um repositório meu.\n\n" +
          "Vá um passo por vez, me diga o comando exato a rodar e espere eu confirmar o " +
          "resultado antes de seguir. Se algo falhar, diagnostique pela mensagem de erro em " +
          "vez de chutar.",
      },
      {
        title: "Montar o maestro",
        hint: "a conversa que comanda agentes em vários repositórios",
        text:
          "Estou usando o Corvus. Quero configurar uma conversa como maestro: ela não edita " +
          "arquivos, ela cria agentes que editam, um por pasta.\n\nLeia src/lib/orchestrator.ts, " +
          "src/lib/situation.ts e a constante MANAGER_PROMPT em src/lib/claude.ts para entender " +
          "como o quadro, as demandas e a fila funcionam.\n\nDepois me explique, na prática: " +
          "como marcar uma conversa como maestro, como ele decide o que delegar, o que são " +
          "demandas e ordens permanentes, e quais limites de concorrência eu deveria usar para " +
          "os meus projetos. Pergunte quantos repositórios eu tenho e quantos agentes quero " +
          "rodando ao mesmo tempo antes de recomendar os números.",
      },
      {
        title: "Ajustar o freio",
        hint: "o que roda sozinho e o que para para pedir permissão",
        text:
          "Estou usando o Corvus, que roda o Claude Code em bypassPermissions com um hook " +
          "PreToolUse que barra só comandos destrutivos.\n\nLeia scripts/corvus-guard.mjs e a " +
          "função buildArgs em src/lib/claude.ts.\n\nMe explique exatamente o que hoje é " +
          "barrado e o que passa direto, e me ajude a decidir se devo ligar o modo turbo com " +
          "freio. Se eu quiser acrescentar um padrão à lista de comandos perigosos, me mostre " +
          "onde e como, com um exemplo do meu caso.",
      },
      {
        title: "Algo não funcionou",
        hint: "proxy não sobe, agente some, pergunta não chega",
        text:
          "Estou com um problema no Corvus. Antes de responder, leia o README.md, " +
          "src/lib/engine.ts (ciclo de vida do turno), src/lib/runtime.ts (processos) e " +
          "src/app/api/chats/[id]/stream/route.ts.\n\nO que está acontecendo comigo: " +
          "[DESCREVA AQUI]\n\nDiagnostique pelo código e pelos logs, não por suposição. Se " +
          "precisar de uma informação da minha máquina (versão do Node, saída de um comando, " +
          "conteúdo do banco em ~/.corvus), peça uma coisa de cada vez. Não altere arquivo " +
          "nenhum antes de me explicar a causa.",
      },
    ],
    reference: [
      { term: "CORVUS_HOME", desc: "Onde ficam o corvus.db e os backups. Padrão: ~/.corvus" },
      { term: "CORVUS_CLAUDE_BIN", desc: "Caminho do executável do Claude Code, quando a detecção falhar" },
      { term: "Modos de permissão", desc: "aceitar edições, automático, plano, não perguntar, sem restrições" },
      { term: "Turbo com freio", desc: "Roda em bypass, mas o hook barra o que destrói trabalho" },
      { term: "Limites da fila", desc: "Quantos agentes ao mesmo tempo, e quantos por pasta" },
      { term: "Limpeza", desc: "Arquiva ou apaga conversas de trabalho paradas há N dias" },
    ],
  },

  pricing: {
    eyebrow: "Preço",
    trial: {
      title: "Teste",
      price: "grátis",
      per: "7 dias",
      cta: "Começar agora",
      note: "sem cartão, sem cadastro — só o comando",
      bullets: [
        "Tudo que a versão paga faz, com limites.",
        "300 chamadas de ferramenta, 10 tarefas, 2 agentes ao mesmo tempo.",
        "1 projeto e 5 verificações no navegador.",
        "Acabou o teste? Você continua lendo tudo que já fez.",
      ],
    },
    title: "O código é seu, não um acesso alugado",
    currency: "US$",
    per: "/ mês",
    brl: "cerca de R$ 77 · a cobrança é em dólar, pelo GitHub",
    lede:
      "O acesso é um patrocínio no GitHub: ao assinar, a sua conta entra no repositório " +
      "corvus-prod. Você clona e roda. Não existe chave de licença, não existe ativação, " +
      "não existe verificação online — o Corvus nunca fala com servidor nosso.",
    bullets: [
      "Código-fonte completo do proxy e do dashboard, no repositório corvus-prod.",
      "Atualizações enquanto a assinatura estiver ativa: é só dar git pull.",
      "Sem chave e sem ativação — rode nas suas máquinas, é o repositório clonado.",
      "Cancelou? Você fica com a versão que já tem, para sempre — só para de receber as novas.",
      "Nada roda em servidor nosso: o processo, o banco e o código são seus.",
    ],
    cta: "Assinar no GitHub",
    ctaNote: "você precisa do Claude Code CLI instalado e autenticado",
    keepTitle: "O que acontece se eu parar de pagar?",
    keepBody:
      "Nada some. O que você clonou continua rodando na sua máquina, sem limite de tempo e " +
      "sem nenhuma checagem online — não há o que expirar. O que você perde é o acesso ao " +
      "repositório e às versões seguintes; reativando a assinatura, ele volta.",
  },

  footer: {
    title: "Rode local.",
    titleEm: " Só local.",
    note:
      "Precisa do Claude Code CLI instalado e autenticado. O banco fica em ~/.corvus/corvus.db " +
      "— sobrescreva com CORVUS_HOME. Apagar uma conversa aqui não apaga a sessão original da " +
      "CLI no disco.",
    cta: "Assinar por US$ 15",
    tagline: "um cockpit para o Claude Code",
    credit: "feito por Christofer e Kevin",
    version: "v1.0.3",
    legal: {
      privacy: { href: "/privacidade.html", label: "Privacidade" },
      terms: { href: "/termos.html", label: "Termos de uso" },
      email: "editorial@agropujante.com.br",
    },
  },
};

/** A forma que a tradução tem de cumprir. Sem `as const`: chave nova quebra `en.ts`. */
export type Copy = typeof pt;

import type { Copy } from "./pt";

/** English mirror of `pt.ts`. The type check fails if a key is missing. */
export const en: Copy = {
  code: "en",
  label: "EN",
  nav: {
    links: [
      { href: "#produto", label: "Product" },
      { href: "#telas", label: "Screens" },
      { href: "#rede", label: "Network" },
      { href: "#api", label: "API" },
      { href: "#docs", label: "Docs" },
      { href: "#preco", label: "Pricing" },
    ],
    more: {
      label: "More",
      links: [
        { href: "#recursos", label: "Features" },
        { href: "#orquestracao", label: "Orchestration" },
        { href: "#verificacao", label: "Verification" },
        { href: "#guarda", label: "Brakes" },
        { href: "#desktop", label: "Desktop" },
        { href: "#registro", label: "Backup & trail" },
        { href: "#mcp", label: "MCP" },
        { href: "#stack", label: "Stack" },
      ],
    },
    menuLabel: "Open menu",
    cta: "Subscribe",
  },

  hero: {
    badge: "local proxy for the Claude Code CLI",
    titleA: "Five terminals open, or",
    titleEm: "one cockpit.",
    lede:
      "You subscribe, run one command in your terminal, and the dashboard opens in your " +
      "browser. Conversations filed by project, turns that outlive the tab you closed, and a " +
      "conductor that commands agents across several repositories at once — demanding proof " +
      "that the work actually works.",
    ctaPrimary: "Try it free for 7 days",
    ctaSecondary: "See pricing",
    terminalCaption: "one command, and the cockpit is up",
    terminalChips: ["proxy · 127.0.0.1:3210", "claude cli", "trial · 7 days"],
    terminalComment: "# the dashboard opens in your browser · nothing leaves your machine",
    stats: [
      { value: "29", label: "API routes" },
      { value: "16", label: "MCP tools" },
      { value: "1", label: "command to start" },
      { value: "0", label: "data leaving your machine" },
    ],
  },

  proxy: {
    eyebrow: "How it works",
    title: "A proxy on your machine. Nothing in the cloud.",
    lede:
      "Corvus is not a SaaS: it is a process running in your terminal, on your machine, with " +
      "your Claude Code and your folders. The dashboard is its interface — it opens on " +
      "localhost and dies when you stop the process. None of your code passes through a " +
      "server of ours.",
    steps: [
      {
        step: "01",
        title: "Subscribe on GitHub",
        body:
          "Sponsoring gives you read access to the corvus-prod repository, with the full " +
          "source. There is no key to keep or lose: the access is your GitHub account.",
      },
      {
        step: "02",
        title: "Run the proxy",
        body:
          "One command, nothing to install. It finds the Claude Code you already have and " +
          "starts the local server.",
      },
      {
        step: "03",
        title: "Open the dashboard",
        body:
          "localhost:3210 in your browser. From there you just work — the proxy stays in the " +
          "terminal, minding the processes.",
      },
    ],
    note:
      "While the proxy runs, everything already configured on your machine still applies: " +
      "claude-mem, hooks, skills, MCP servers, CLAUDE.md and permissions.",
    terminal: {
      caption: "the proxy, running",
      lines: [
        { kind: "cmd", text: "npx corvus-trial" },
        { kind: "blank", text: "" },
        { kind: "ok", text: "proxy up           127.0.0.1:3210" },
        { kind: "ok", text: "trial              7 days · 300 calls" },
        { kind: "ok", text: "claude cli         found (v2.4.1)" },
        { kind: "ok", text: "database           ~/.corvus/corvus.db" },
        { kind: "blank", text: "" },
        { kind: "url", text: "dashboard → http://localhost:3210" },
        { kind: "dim", text: "ctrl+c stops the proxy and kills any live agents" },
      ],
    },
  },

  shots: {
    eyebrow: "The cockpit",
    title: "This is what opens in your browser",
    lede:
      "Screenshots of the real thing — sidebar by project, the conductor's board on the " +
      "right, expandable tool calls, and the cost of every turn at the bottom.",
    items: [
      {
        src: "/images/shot-maestro.png",
        title: "The conductor and the board",
        body:
          "On the right, the department: open demands and every agent, with state and cost. " +
          "On the left, each project with its conversations. In the middle, what the " +
          "conductor did this turn — MCP calls included.",
      },
      {
        src: "/images/shot-agente.png",
        title: "An agent at work",
        body:
          "Reasoning, every tool with its input and output, and a closing report in the shape " +
          "Corvus demands: what changed, what was verified and how, what is still open.",
      },
      {
        src: "/images/shot-decisao.png",
        title: "The question that stops the work",
        body:
          "A headless process has no interactive prompt. The agent parks the decision, it " +
          "shows up in the middle of your screen — even if you are reading another " +
          "conversation — and your answer unblocks the call.",
      },
    ],
  },

  network: {
    eyebrow: "Network",
    title: "The whole cockpit as one map",
    lede:
      "Folders hold conversations, conversations command agents, agents spawn subagents. All " +
      "of it becomes a navigable constellation — like Obsidian's graph, except the nodes are " +
      "working. Drag to arrange; a spark travels the link wherever work is really flowing.",
    hint: "drag the nodes · tap to isolate",
    legend: [
      { kind: "project", label: "project" },
      { kind: "orchestrator", label: "conductor" },
      { kind: "chat", label: "conversation" },
      { kind: "task", label: "agent" },
      { kind: "subagent", label: "subagent" },
    ],
    nodes: {
      people: "People Web",
      fin: "Finance API",
      app: "Mobile App",
      site: "Marketing Site",
      maestro: "Conductor",
      t1: "Post-SSO redirect",
      t2: "Report timeout",
      t3: "Blank profile",
      t4: "Home deploy",
      c1: "Accessibility",
      s1: "find routes",
      s2: "read migrations",
    },
    caption: "The same network, inside the product",
    wip: {
      badge: "Under construction",
      note: "This part is still being built. What's described below isn't ready to use yet.",
    },
    deep: {
      title: "Two Corvus talking",
      lede: "The network isn't a drawing. It's a closed channel between two Corvus installs.",
      items: [
        "Everything is end-to-end encrypted and signed. The relay in the middle stores sealed envelopes: it can't read a prompt, holds no key, and orders no one to run anything.",
        "An incoming message becomes a real turn in your conductor — not an inbox, work starting.",
        "Each contact carries its own permission: talk only, or also propose tasks. Blocking is one click.",
        "Envelopes last 30 days, 500 per sync, with a traffic cap. The relay runs in a container and listens only where you tell it to.",
      ],
    },
  },

  desktop: {
    eyebrow: "Desktop version",
    title: "It's also an app",
    lede: "If you'd rather skip the terminal, install and open it.",
    items: [
      {
        title: "Windows installer.",
        body: "A shortcut in the Start menu, its own window, no address to type.",
      },
      {
        title: "No Node install required.",
        body: "The whole Corvus ships inside.",
      },
      {
        title: "Still runs only on your machine, on 127.0.0.1.",
        body: "Close the window and the server goes with it.",
      },
    ],
  },

  trail: {
    eyebrow: "Backup, audit trail and standing orders",
    title: "Nothing lost, nothing repeated",
    lede: "Agent work needs memory and a trail. Corvus keeps both, unasked.",
    items: [
      {
        title: "A backup a day, on its own.",
        body:
          "One copy of the database per day in ~/.corvus/backups, the 10 most recent kept. " +
          "A consistent copy, taken while Corvus runs.",
      },
      {
        title: "Seven days of trail.",
        body:
          "Turns started and ended, tasks approved, refused or delivered unverified, questions " +
          "asked and answered, deploys blocked, server commands denied. Twenty event types, each " +
          "with time, chat and task.",
      },
      {
        title: "Orders that stick.",
        body:
          "“Always run the tests first.” “Never ship on a Friday.” Say it once and it sits at the " +
          "top of every time the conductor picks work back up. It won't ask again.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    title: "What the CLI alone won't give you",
    lede:
      "None of this replaces Claude Code — it is the same CLI, with the same environment from " +
      "your machine. What changes is everything around it.",
    items: [
      {
        title: "Turns that don't belong to the tab",
        body:
          "The turn lives in the proxy, with a replay buffer of its own. Close the browser, " +
          "reload, come back from another device on the same network: you re-attach in the " +
          "middle of what was happening, without losing a delta.",
        detail: "engine.ts · subscribe() · 4,000-event buffer",
      },
      {
        title: "Conversations by project",
        body:
          "Coloured projects, conversations you can pin, rename and move. Say “in people web, " +
          "fix the login” and Corvus files the conversation under the right repository by itself.",
        detail: "projectResolver.ts",
      },
      {
        title: "Real streaming",
        body:
          "The CLI's NDJSON turned into SSE: text, reasoning, tool calls with input and " +
          "output, and subagents followed apart from the main transcript.",
        detail: "stream-json → 17 event types",
      },
      {
        title: "Your machine, all of it",
        body:
          "No --bare, no --safe-mode. claude-mem, hooks, skills, MCP servers, CLAUDE.md and " +
          "permissions keep working inside Corvus exactly as they do in the terminal.",
        detail: "the proxy inherits the environment",
      },
      {
        title: "Questions that reach your screen",
        body:
          "Headless mode has no interactive prompt. Corvus injects an MCP server: the agent " +
          "parks the question, it becomes a card in the browser, and your answer unblocks the call.",
        detail: "corvus-mcp.mjs · /api/decisions",
      },
      {
        title: "A database with no native build",
        body:
          "SQLite through Node's built-in node:sqlite. Ten tables, incremental migrations and " +
          "a daily backup in ~/.corvus. No compiled module to break on the next release.",
        detail: "db.ts · durable.ts",
      },
    ],
  },

  orchestration: {
    eyebrow: "Orchestration",
    title: "One conductor, many repositories",
    lede:
      "Mark a conversation as the conductor and it gets a department: it edits no files, it " +
      "creates agents that do. Every task becomes its own conversation in the sidebar, with " +
      "full history and session.",
    flow: [
      {
        step: "01",
        title: "Becomes a demand",
        body:
          "Everything you ask lands on the board before it becomes work. One subject, one " +
          "demand — five requests in one message are five lines.",
      },
      {
        step: "02",
        title: "Becomes a task",
        body:
          "The conductor delegates: one agent per demand, in the right folder, with a " +
          "self-contained prompt. Each task gets its own conversation.",
      },
      {
        step: "03",
        title: "The queue decides",
        body:
          "A global limit and a per-folder limit, dependencies between tasks, cascading " +
          "cancellation, and orphan collection when a process dies.",
      },
      {
        step: "04",
        title: "The result wakes the conductor",
        body:
          "Nobody sits blocked waiting. When an agent finishes, Corvus wakes the conductor " +
          "with the result and the whole board in hand.",
      },
    ],
    cards: [
      {
        title: "Autonomous pulse",
        body:
          "Every eight minutes, if work is stalled and the conductor is free, it wakes on its " +
          "own. If there is no news worth your time, the whole exchange is erased.",
      },
      {
        title: "Durable message",
        body:
          "A message typed while the agent was busy goes to the database, not to RAM. " +
          "Restarting the proxy no longer swallows what you wrote.",
      },
      {
        title: "Deploy lock",
        body:
          "One ship per folder, and only when nothing else is touching it. The lock lives in " +
          "SQLite, so a restart mid-deploy doesn't hand the folder to the next comer.",
      },
      {
        title: "Standing orders",
        body:
          "“Always run the tests first”, “never ship on a Friday”. They are recorded, shown at " +
          "the top of the board, and obeyed without asking you twice.",
      },
    ],
  },

  verify: {
    eyebrow: "Verified delivery",
    title: "“It works” is not a delivery",
    lede:
      "An agent that touches a screen and calls it done without opening it is how the 401 " +
      "shows up two minutes later, on your side. In Corvus, if it touched a screen, a route, " +
      "a permission or a login, someone opens it — and reports what they saw.",
    items: [
      {
        title: "Opens a browser",
        body:
          "Real Playwright: it logs in, walks the routes and reports what happened — where it " +
          "was thrown back to the login, which request came back 401, what the console screamed.",
      },
      {
        title: "Sees canvas apps",
        body:
          "Flutter Web paints into a canvas and the DOM shows nothing. Corvus switches on the " +
          "hidden accessibility tree and the screen becomes readable and clickable again.",
      },
      {
        title: "Or checks underneath",
        body:
          "When even that fails, it is an API login, a stored token, and every endpoint the " +
          "screen uses called — saying which returns 401 and with what message.",
      },
    ],
    report: {
      tool: "check_in_browser",
      tag: "playwright",
      rows: [
        { status: "ok", route: "/login", note: "200 · form filled, session created" },
        { status: "ok", route: "/dashboard", note: "200 · admin profile, 18 people" },
        { status: "warn", route: "/reports", note: "200 · console: duplicate key" },
        { status: "fail", route: "/admin/users", note: "401 · bounced back to /login" },
      ],
      footA: "Without that report the demand stays ",
      footStrong: "blocked",
      footB: " with the note “not verified”. Never delivered.",
    },
  },

  guard: {
    eyebrow: "Turbo with brakes",
    title: "No prompt at every step. Brakes on what can't be undone.",
    ledeA:
      "Approving every file read is what makes everyone end up in bypassPermissions and hope " +
      "for the best. Corvus runs in bypass on purpose and installs a PreToolUse hook: " +
      "everything goes through except what can destroy work. That handful stops and waits for " +
      "your click.",
    ledeB:
      "If the proxy is unreachable, the guard denies rather than running something " +
      "irreversible blind. And plan mode is never overridden.",
    samples: [
      { cmd: "rm -rf ./build", why: "deletes files recursively or by force" },
      { cmd: "git reset --hard origin/main", why: "throws local changes away for good" },
      { cmd: "git push --force", why: "rewrites remote history" },
      { cmd: "delete from users", why: "wipes every row in the table" },
      { cmd: "drop table orders", why: "drops a table or a database" },
      { cmd: "curl https://x.sh | sh", why: "runs a script downloaded from the internet" },
    ],
    more: "+ 19 other patterns · writing outside the conversation's folder",
  },

  tools: {
    eyebrow: "MCP server",
    title: "Sixteen tools the CLI didn't have",
    lede:
      "The proxy starts its own MCP server alongside every run and declares it through " +
      "--mcp-config. These are how a headless process can ask you something, open a browser, " +
      "or command another agent.",
    groups: {
      interaction: "Interaction",
      verification: "Verification",
      orchestration: "Orchestration",
    },
    badge: "conductors only",
    items: [
      { name: "perguntar_ao_usuario", group: "interaction", body: "Parks a question with 2 to 4 options and waits for the click in the browser." },
      { name: "aprovar_plano", group: "interaction", body: "Shows the plan in markdown and only proceeds once you approve." },
      { name: "verificar_no_navegador", group: "verification", body: "Opens the pages in a real browser, logs in, and reports what it saw." },
      { name: "verificar_api", group: "verification", body: "Authenticates, keeps the token and calls every endpoint the screen uses." },
      { name: "listar_projetos", group: "orchestration", body: "The available projects and each one's folder." },
      { name: "criar_tarefa", group: "orchestration", body: "Creates an agent and hands it one task, with dependencies if needed." },
      { name: "status_tarefas", group: "orchestration", body: "Where each task stands right now, without waiting for anything." },
      { name: "esperar_tarefas", group: "orchestration", body: "Blocks until the tasks settle. Last resort — and interruptible." },
      { name: "falar_com_tarefa", group: "orchestration", body: "Another instruction for the same agent, in the same session and context." },
      { name: "cancelar_tarefa", group: "orchestration", body: "Kills the task and its agent." },
      { name: "limpar_tarefas", group: "orchestration", body: "Sweeps the finished and long-idle ones, archiving or deleting." },
      { name: "anotar_demanda", group: "orchestration", body: "Records what was asked on the board, with a priority." },
      { name: "ver_quadro", group: "orchestration", body: "The whole board: demands, tasks, rules, and what doesn't add up." },
      { name: "mover_demanda", group: "orchestration", body: "Open, doing, blocked, delivered or dropped — with a note on why." },
      { name: "anotar_regra", group: "orchestration", body: "Records a standing order, in your own words." },
      { name: "pedir_deploy", group: "orchestration", body: "Checks the folder is free, asks for your approval and locks it while shipping." },
    ],
  },

  api: {
    eyebrow: "API reference",
    title: "29 routes, all local",
    lede:
      "The proxy exposes an HTTP API on localhost, consumed by the dashboard, the MCP server " +
      "and the guard hook. It is born and dies with the process in your terminal — /api/fs " +
      "lists your disk and /api/chats/[id]/stream runs the CLI. Don't expose that port to the network.",
    groups: [
      {
        id: "conversas",
        label: "Conversations",
        blurb: "The core: create, edit and run a turn — which stays alive with nobody watching.",
        routes: [
          { methods: ["GET", "POST"], path: "/api/chats", body: "Lists conversations with message counts, or creates one." },
          { methods: ["GET", "PATCH", "DELETE"], path: "/api/chats/[id]", body: "Title, folder, model, permission mode, pin, archive." },
          { methods: ["POST", "GET"], path: "/api/chats/[id]/stream", body: "POST starts the turn and streams it over SSE; GET re-attaches to one in flight." },
          { methods: ["GET", "DELETE"], path: "/api/chats/[id]/messages", body: "The transcript, or truncate from a message onwards (edit and resend)." },
          { methods: ["POST"], path: "/api/chats/[id]/abort", body: "Kills that turn's CLI process tree." },
          { methods: ["GET"], path: "/api/running", body: "Who is running right now — the green dot in the sidebar." },
        ],
      },
      {
        id: "projetos",
        label: "Projects",
        blurb: "Folders, colours, and the bridge to what the CLI already has on disk.",
        routes: [
          { methods: ["GET", "POST"], path: "/api/projects", body: "Lists and creates projects, with a colour and a default folder." },
          { methods: ["PATCH", "DELETE"], path: "/api/projects/[id]", body: "Rename, recolour, point at a folder, or remove (with or without its chats)." },
          { methods: ["GET"], path: "/api/fs", body: "A directory browser for the folder picker." },
          { methods: ["GET"], path: "/api/claude-projects", body: "Finds folders the CLI has already used, with session counts and last use." },
          { methods: ["GET"], path: "/api/claude-mem", body: "Reads claude-mem's memories scoped to that folder." },
          { methods: ["GET", "POST", "PUT", "DELETE"], path: "/api/claude-config", body: "CLAUDE.md rules and skills, per scope — create, edit and remove." },
        ],
      },
      {
        id: "orquestrador",
        label: "Orchestrator",
        blurb: "The queue, the board, and everything the conductor commands through MCP.",
        routes: [
          { methods: ["GET", "POST"], path: "/api/orchestrator/tasks", body: "One conductor's tasks (or everyone's), and enqueueing a new one." },
          { methods: ["GET", "POST", "DELETE"], path: "/api/orchestrator/tasks/[id]", body: "Task state, another instruction for the same agent, or cancellation." },
          { methods: ["POST"], path: "/api/orchestrator/wait", body: "Waits for tasks to settle — and returns at once if you interrupt." },
          { methods: ["POST"], path: "/api/orchestrator/nudge", body: "Delivers your message to a conductor parked listening to its agents." },
          { methods: ["GET", "POST", "PATCH"], path: "/api/orchestrator/demands", body: "The board: what was asked, where it stands, with what note." },
          { methods: ["GET", "POST", "DELETE"], path: "/api/orchestrator/rules", body: "The conductor's standing orders." },
          { methods: ["POST"], path: "/api/orchestrator/deploy", body: "Checks the folder, asks for approval, and holds the lock while shipping." },
          { methods: ["GET"], path: "/api/orchestrator/projects", body: "Projects as the conductor sees them, with the folder resolved." },
          { methods: ["POST"], path: "/api/orchestrator/cleanup", body: "Sweeps old worker conversations: archive or delete." },
        ],
      },
      {
        id: "decisoes",
        label: "Decisions and verification",
        blurb: "What is stopped waiting for you, and what proves the delivery works.",
        routes: [
          { methods: ["GET", "POST"], path: "/api/decisions", body: "The parked questions; POST is an agent stopping to ask." },
          { methods: ["POST"], path: "/api/decisions/[id]", body: "Your answer — unblocks the MCP call that was waiting." },
          { methods: ["POST"], path: "/api/browser/audit", body: "Walks routes in a real browser and returns the report." },
          { methods: ["POST"], path: "/api/browser/api-check", body: "API login, stored token, every endpoint called." },
        ],
      },
      {
        id: "sistema",
        label: "System",
        blurb: "Settings, the maintenance window, backups, and the log of what happened.",
        routes: [
          { methods: ["GET", "PATCH"], path: "/api/settings", body: "Default folder, queue limits, turbo with brakes, cleanup policy." },
          { methods: ["GET", "POST"], path: "/api/maintenance", body: "Pauses the queue: what runs finishes, nothing new starts." },
          { methods: ["GET", "POST"], path: "/api/backups", body: "Lists database copies and makes one now." },
          { methods: ["GET"], path: "/api/audit", body: "Corvus's own account of events, so nobody has to read a console." },
        ],
      },
    ],
  },

  stack: {
    eyebrow: "Underneath",
    title: "Few parts, no magic",
    items: [
      { name: "Next.js 16", role: "The proxy and the dashboard, in one process" },
      { name: "React 19", role: "The interface, with zustand for client state" },
      { name: "node:sqlite", role: "Built-in database, no native module" },
      { name: "SSE", role: "Turn streaming, re-attachable at any moment" },
      { name: "MCP", role: "Its own server, injected into every run" },
      { name: "Playwright", role: "The browser that proves the screen works" },
    ],
    eventsLabel: "Stream events",
  },

  docs: {
    eyebrow: "Documentation",
    title: "Claude is the one who teaches you Corvus",
    lede:
      "The repository ships with a README, a CLAUDE.md and code commented end to end — " +
      "written to be read by an agent. Instead of digging through it yourself, copy one of " +
      "the prompts below, paste it into Claude Code inside the Corvus folder, and ask. It " +
      "reads the right files and sets you up.",
    copy: "Copy prompt",
    copied: "Copied",
    promptsTitle: "Ready-made prompts",
    refTitle: "Quick reference",
    prompts: [
      {
        title: "First run",
        hint: "installs, starts the proxy and opens the dashboard",
        text:
          "I am setting up Corvus, a local proxy that runs the Claude Code CLI and serves a " +
          "dashboard in the browser. Read README.md and src/lib/claude.ts in this repository " +
          "before answering.\n\nHelp me: 1) confirm the Claude Code CLI is installed and " +
          "authenticated on this machine; 2) start the proxy; 3) open the dashboard and create " +
          "my first project pointing at one of my repositories.\n\nGo one step at a time, " +
          "give me the exact command to run, and wait for me to confirm the result before " +
          "moving on. If something fails, diagnose from the error message instead of guessing.",
      },
      {
        title: "Set up the conductor",
        hint: "the conversation that commands agents across repositories",
        text:
          "I am using Corvus. I want to set up a conversation as the conductor: it edits no " +
          "files, it creates agents that do, one per folder.\n\nRead src/lib/orchestrator.ts, " +
          "src/lib/situation.ts and the MANAGER_PROMPT constant in src/lib/claude.ts to " +
          "understand how the board, the demands and the queue work.\n\nThen explain to me, " +
          "practically: how to mark a conversation as the conductor, how it decides what to " +
          "delegate, what demands and standing orders are, and which concurrency limits I " +
          "should use for my projects. Ask me how many repositories I have and how many agents " +
          "I want running at once before recommending numbers.",
      },
      {
        title: "Tune the brakes",
        hint: "what runs on its own and what stops to ask",
        text:
          "I am using Corvus, which runs Claude Code in bypassPermissions with a PreToolUse " +
          "hook that stops only destructive commands.\n\nRead scripts/corvus-guard.mjs and the " +
          "buildArgs function in src/lib/claude.ts.\n\nExplain exactly what is blocked today " +
          "and what goes straight through, and help me decide whether to turn on turbo with " +
          "brakes. If I want to add a pattern to the dangerous-command list, show me where and " +
          "how, with an example from my own case.",
      },
      {
        title: "Something broke",
        hint: "proxy won't start, agent vanishes, question never arrives",
        text:
          "I have a problem with Corvus. Before answering, read README.md, src/lib/engine.ts " +
          "(turn lifecycle), src/lib/runtime.ts (processes) and " +
          "src/app/api/chats/[id]/stream/route.ts.\n\nWhat is happening to me: " +
          "[DESCRIBE HERE]\n\nDiagnose from the code and the logs, not from assumption. If you " +
          "need something from my machine (Node version, the output of a command, the contents " +
          "of the database in ~/.corvus), ask for one thing at a time. Do not change any file " +
          "before explaining the cause to me.",
      },
    ],
    reference: [
      { term: "CORVUS_HOME", desc: "Where corvus.db and the backups live. Default: ~/.corvus" },
      { term: "CORVUS_CLAUDE_BIN", desc: "Path to the Claude Code executable, when detection fails" },
      { term: "Permission modes", desc: "accept edits, automatic, plan, don't ask, no restrictions" },
      { term: "Turbo with brakes", desc: "Runs in bypass, but the hook stops what destroys work" },
      { term: "Queue limits", desc: "How many agents at once, and how many per folder" },
      { term: "Cleanup", desc: "Archives or deletes worker conversations idle for N days" },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    trial: {
      title: "Trial",
      price: "free",
      per: "7 days",
      cta: "Start now",
      note: "no card, no signup — just the command",
      bullets: [
        "Everything the paid version does, with limits.",
        "300 tool calls, 10 tasks, 2 agents at a time.",
        "1 project and 5 browser checks.",
        "Trial over? You keep reading everything you did.",
      ],
    },
    title: "The code is yours, not rented access",
    currency: "$",
    per: "/ month",
    brl: "about R$ 77 · billed in dollars, through GitHub",
    lede:
      "Access is a GitHub sponsorship: subscribing puts your account into the corvus-prod " +
      "repository. You clone it and run it. No license key, no activation, no online check — " +
      "Corvus never talks to a server of ours.",
    bullets: [
      "Full source of the proxy and the dashboard, in the corvus-prod repository.",
      "Updates for as long as the subscription is active: just git pull.",
      "No key and no activation — run it on your machines, it is the cloned repository.",
      "Cancelled? You keep the version you have, forever — you just stop getting new ones.",
      "Nothing runs on a server of ours: the process, the database and the code are yours.",
    ],
    cta: "Subscribe on GitHub",
    ctaNote: "you need the Claude Code CLI installed and authenticated",
    keepTitle: "What happens if I stop paying?",
    keepBody:
      "Nothing disappears. What you cloned keeps running on your machine, with no time limit " +
      "and no online check at all — there is nothing to expire. What you lose is access to " +
      "the repository and to later versions; reactivate the subscription and it comes back.",
  },

  footer: {
    title: "Run it local.",
    titleEm: " Only local.",
    note:
      "You need the Claude Code CLI installed and authenticated. The database lives in " +
      "~/.corvus/corvus.db — override it with CORVUS_HOME. Deleting a conversation here does " +
      "not delete the original CLI session on disk.",
    cta: "Subscribe for $15",
    tagline: "a cockpit for Claude Code",
    credit: "made by Christofer and Kevin",
    version: "v1.0.3",
    legal: {
      privacy: { href: "/privacy.html", label: "Privacy" },
      terms: { href: "/terms.html", label: "Terms of use" },
      email: "editorial@agropujante.com.br",
    },
  },
};

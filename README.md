# Corvus — landing

Página de apresentação do [Corvus](https://github.com/asunavlr/corvus), um front-end
para o Claude Code CLI.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## Como está montada

| Caminho | O quê |
| --- | --- |
| `src/data/content.ts` | Todo o texto, mais as rotas e as ferramentas MCP — tiradas do código do Corvus |
| `src/lib/motion.ts` | O vocabulário de movimento: uma curva e um conjunto de variantes para a página inteira |
| `src/components/` | Uma seção por arquivo, com o CSS do hero à parte e o resto em `sections.css` |
| `src/index.css` | Tokens: névoa sobre tinta, com o verde reservado para "algo rodando agora" |

React 19 + TypeScript, Vite e [Motion](https://motion.dev) nas animações. Sem framework
de CSS: são variáveis e algumas primitivas (`.shell`, `.section`, `.card`).

Se a API do Corvus mudar, o lugar de corrigir é `src/data/content.ts` — nenhum endpoint
está escrito dentro de componente.

## Detalhes que importam

- Tudo que entra em cena usa `whileInView` com `once: true`: a animação acontece uma vez,
  não a cada rolagem.
- `prefers-reduced-motion` desliga o paralaxe do hero e as transições.
- A imagem do bando é a mesma do Corvus, invertida no CSS — o original é preto sobre
  névoa clara, e a página é escura.

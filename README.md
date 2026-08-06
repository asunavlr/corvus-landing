# Corvus — landing

Página de venda do [Corvus](https://github.com/asunavlr/corvus): um proxy que roda no
terminal e abre o cockpit do Claude Code no navegador.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

Publicada em <https://corvus-cockpit.vercel.app>.

## Como está montada

| Caminho | O quê |
| --- | --- |
| `src/content/pt.ts` | Todo o texto em português — e o tipo `Copy`, que a tradução tem de cumprir |
| `src/content/en.ts` | O espelho em inglês; falta de chave quebra o build |
| `src/content/index.tsx` | Provider de idioma, com preferência salva no `localStorage` |
| `src/components/Network.tsx` | O grafo do produto recriado em canvas, com a mesma física |
| `src/lib/motion.ts` | Uma curva e um conjunto de variantes para a página inteira |
| `public/images/shot-*.png` | Capturas do produto rodando de verdade, não mockups |

React 19 + TypeScript, Vite e [Motion](https://motion.dev). Sem framework de CSS: são
variáveis e algumas primitivas (`.shell`, `.section`, `.card`, `.btn`).

## Idiomas

Português é o texto-fonte. `en.ts` é tipado como `Copy`, então uma chave nova em `pt.ts`
quebra o typecheck até existir também em inglês — é de propósito. O idioma inicial vem do
navegador (`pt-*` → português, resto → inglês) e a escolha do visitante fica salva.

Nada de texto visível mora dentro de componente: se precisar corrigir uma frase, um preço
ou um endpoint, é em `src/content/`.

## Detalhes que importam

- A paleta é a do próprio cockpit (`raven #ef4444`, `sheen #f97316`, `plume #fb923c`),
  com o laranja sempre como brilho — nunca como área chapada.
- O grafo assenta antes de aparecer e só então recebe energia de volta; sem isso os nós
  nascem empilhados no meio da tela.
- Tudo que entra em cena usa `whileInView` com `once: true`, e `prefers-reduced-motion`
  desliga o paralaxe do hero, a física do grafo e as transições.
- A imagem do bando é a mesma do Corvus, invertida no CSS — o original é preto sobre
  névoa clara, e a página é escura.

## O fluxo comercial

Não existe chave de licença em lugar nenhum — nem no produto, nem na página. São dois
caminhos:

- **Teste grátis:** `npx corvus-trial`. Sete dias, 300 chamadas de ferramenta, 10 tarefas,
  2 agentes ao mesmo tempo, 1 projeto e 5 verificações no navegador.
- **Pago (US$ 15/mês):** patrocínio no [GitHub Sponsors](https://github.com/sponsors/asunavlr),
  que dá acesso de leitura ao repositório `corvus-prod`. Você clona e roda. Sem ativação,
  sem verificação online.

Se aparecer "chave", "licença" ou "N máquinas" em qualquer texto, é bug de conteúdo.

## Páginas legais

`public/privacidade.html`, `public/termos.html` e os espelhos em inglês (`privacy.html`,
`terms.html`) são HTML estático, com folha própria em `public/legal.css` — não passam pelo
React. Ambas trazem um bloco vermelho `.legal__todo` com o que falta preencher (razão
social, CNPJ, foro). **Não publique com esse bloco na tela.**

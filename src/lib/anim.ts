import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Um vocabulário de movimento só, para a página inteira — agora em GSAP.
 * Curvas diferentes em cada seção é o que faz um site parecer montado por
 * três pessoas.
 *
 * Quem entra em cena ao rolar não precisa saber nada disso: basta marcar o
 * elemento com data-rise (ou data-rise="sm" para um passo mais curto). O
 * estado inicial é CSS, e só existe quando a classe .anim está no <html> —
 * assim, sem JS ou com prefers-reduced-motion, o conteúdo já nasce visível.
 */

export const EASE = "expo.out";

export const reduced =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced && typeof document !== "undefined") {
  document.documentElement.classList.add("anim");
}

/** Liga o revelador de seções. Chamado uma vez, no App. */
export function initReveal() {
  if (reduced) return () => {};

  let triggers: ScrollTrigger[] = [];

  /* Registrar de novo, não do zero: kill(false) tira o gatilho antigo sem
     desfazer o que ele já revelou. Quem já apareceu tem opacity no style e
     continua visível; quem é novo entra na fila. */
  const build = () => {
    triggers.forEach((t) => t.kill(false));
    triggers = ScrollTrigger.batch("[data-rise]", {
      start: "top 90%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: EASE,
          stagger: 0.07,
          overwrite: true,
        }),
    });
  };

  build();

  /* Trocar de idioma troca o texto, mas também cria e destrói elementos —
     listas de tamanho diferente entre pt e en, blocos que só existem num dos
     dois. O ScrollTrigger.batch só conhece o que existia quando foi montado:
     sem reavaliar, um cartão criado depois fica no estado escondido do CSS
     para sempre. Foi assim que os cartões sumiam ao trocar de idioma. */
  let pending = 0;
  const observer = new MutationObserver(() => {
    window.clearTimeout(pending);
    pending = window.setTimeout(() => {
      build();
      ScrollTrigger.refresh();
    }, 120);
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // As imagens chegam depois do primeiro cálculo e empurram a página inteira.
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);

  return () => {
    window.clearTimeout(pending);
    observer.disconnect();
    window.removeEventListener("load", onLoad);
    triggers.forEach((t) => t.kill(false));
  };
}

export { gsap, ScrollTrigger, useGSAP };

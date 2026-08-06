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

  const ctx = gsap.context(() => {
    ScrollTrigger.batch("[data-rise]", {
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
  });

  // As imagens chegam depois do primeiro cálculo e empurram a página inteira.
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);

  return () => {
    window.removeEventListener("load", onLoad);
    ctx.revert();
  };
}

export { gsap, ScrollTrigger, useGSAP };

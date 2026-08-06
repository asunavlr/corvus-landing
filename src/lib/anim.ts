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

  const triggers: ScrollTrigger[] = [];
  /* Quem já foi inscrito não é inscrito de novo. Refazer a fila inteira a cada
     mudança do DOM era pior que o defeito: os gatilhos morriam e nasciam com a
     página já rolada, nunca disparavam, e a página inteira ficava escondida. */
  const inscritos = new WeakSet<Element>();

  const revelar = (alvos: Element[]) =>
    gsap.to(alvos, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: EASE,
      stagger: 0.07,
      overwrite: true,
    });

  const inscrever = () => {
    const novos = [...document.querySelectorAll("[data-rise]")].filter(
      (el) => !inscritos.has(el),
    );
    if (!novos.length) return;
    novos.forEach((el) => inscritos.add(el));

    /* O que já está na tela (ou acima dela) não tem gatilho para esperar: um
       ScrollTrigger criado depois que a rolagem passou nunca dispara. */
    const linha = window.innerHeight * 0.9;
    const agora = novos.filter((el) => el.getBoundingClientRect().top < linha);
    const depois = novos.filter((el) => el.getBoundingClientRect().top >= linha);

    if (agora.length) revelar(agora);
    if (depois.length) {
      triggers.push(
        ...ScrollTrigger.batch(depois, {
          start: "top 90%",
          once: true,
          onEnter: (batch) => revelar(batch),
        }),
      );
    }
  };

  inscrever();

  /* Trocar de idioma troca o texto, mas também cria e destrói elementos —
     listas de tamanho diferente entre pt e en, blocos que só existem num dos
     dois. O que nascesse depois ficava no estado escondido do CSS para sempre,
     porque a fila só conhecia o que existia quando foi montada. */
  let pendente = 0;
  const observador = new MutationObserver(() => {
    window.clearTimeout(pendente);
    pendente = window.setTimeout(inscrever, 150);
  });
  observador.observe(document.body, { childList: true, subtree: true });

  // As imagens chegam depois do primeiro cálculo e empurram a página inteira.
  const onLoad = () => ScrollTrigger.refresh();
  window.addEventListener("load", onLoad);

  return () => {
    window.clearTimeout(pendente);
    observador.disconnect();
    window.removeEventListener("load", onLoad);
    triggers.forEach((t) => t.kill(false));
  };
}

export { gsap, ScrollTrigger, useGSAP };

import type { Transition, Variants } from "motion/react";

/**
 * Um vocabulário de movimento só, usado pela página inteira. Curvas diferentes
 * em cada seção é o que faz um site parecer montado por três pessoas.
 */

export const ease: Transition["ease"] = [0.16, 1, 0.3, 1];

export const spring: Transition = { type: "spring", stiffness: 240, damping: 30 };

/** Sobe e aparece. O padrão de tudo que entra em cena ao rolar. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const riseSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
};

/** Um pai que solta os filhos em fila indiana. */
export const stagger = (each = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: each, delayChildren: delay } },
});

/** Dispara uma vez, quando a seção entra de verdade — não de raspão. */
export const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
} as const;

/** Para blocos altos, que nunca ficariam 25% visíveis de uma vez. */
export const inViewSoft = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

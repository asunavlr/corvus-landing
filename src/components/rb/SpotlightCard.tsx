import { useRef, type ElementType, type PropsWithChildren } from "react";
import "./SpotlightCard.css";

/**
 * SpotlightCard — React Bits (variante TS-CSS), portado para as variáveis do
 * cockpit. O original chega com cores fixas (#111 no fundo, branco no facho) e
 * uma classe .card-spotlight própria; aqui ele só empresta a técnica — escrever
 * a posição do mouse em --mouse-x/--mouse-y — e o desenho fica com o CSS da
 * página, para o cartão continuar sendo o cartão do Corvus.
 *
 * Fonte: reactbits.dev — Components/SpotlightCard (ts-default).
 */
type Props = PropsWithChildren<{
  as?: ElementType;
  className?: string;
}>;

export default function SpotlightCard({ as: Tag = "div", className = "", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);

  return (
    <Tag
      ref={ref}
      className={`spot ${className}`}
      onPointerMove={(event: React.PointerEvent<HTMLElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
      }}
      {...rest}
    />
  );
}

import { useCopy } from "../content";
import SpotlightCard from "./rb/SpotlightCard";

export default function Features() {
  const copy = useCopy();
  return (
    <section className="section" id="recursos">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.features.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.features.title}</h2>
          <p className="lede" data-rise>{copy.features.lede}</p>
        </div>

        {/* Três colunas iguais é o desenho mais previsível que existe: aqui a
            primeira ficha ocupa duas casas e quebra a fileira. */}
        <div className="grid grid--features">
          {copy.features.items.map((feature, i) => (
            <SpotlightCard
              as="article"
              key={i}
              className={`card${i === 0 ? " card--wide" : ""}`}
              data-rise
            >
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              <p className="card__detail mono">{feature.detail}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useCopy } from "../content";
import SpotlightCard from "./rb/SpotlightCard";

export default function Trail() {
  const copy = useCopy();
  return (
    <section className="section section--tinted" id="registro">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.trail.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.trail.title}</h2>
          <p className="lede" data-rise>{copy.trail.lede}</p>
        </div>

        <div className="grid grid--three">
          {copy.trail.items.map((item, i) => (
            <SpotlightCard as="article" key={i} className="card" data-rise>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

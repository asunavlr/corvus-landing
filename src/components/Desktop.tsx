import { useCopy } from "../content";
import SpotlightCard from "./rb/SpotlightCard";

export default function Desktop() {
  const copy = useCopy();
  return (
    <section className="section" id="desktop">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.desktop.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.desktop.title}</h2>
          <p className="lede" data-rise>{copy.desktop.lede}</p>
        </div>

        <div className="grid grid--three">
          {copy.desktop.items.map((item, i) => (
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

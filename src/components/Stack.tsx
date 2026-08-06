import { useCopy } from "../content";

const EVENTS = [
  "session", "text_delta", "thinking_delta", "tool_use", "tool_result",
  "subagent_start", "subagent_part", "subagent_end", "decision", "task",
  "chat_moved", "message", "title", "block_end", "done", "error",
];

export default function Stack() {
  const copy = useCopy();
  return (
    <section className="section" id="stack">
      <div className="shell">
        <div>
          <p className="eyebrow" data-rise="sm">{copy.stack.eyebrow}</p>
          <h2 className="h2" data-rise>{copy.stack.title}</h2>
        </div>

        <div className="grid grid--three">
          {copy.stack.items.map((item, i) => (
            <div key={i} className="stack__item" data-rise>
              <p className="stack__name">{item.name}</p>
              <p className="stack__role">{item.role}</p>
            </div>
          ))}
        </div>

        <div className="events">
          <p className="events__label eyebrow" data-rise="sm">{copy.stack.eventsLabel}</p>
          <div className="events__wrap">
            {EVENTS.map((event) => (
              <span key={event} className="events__chip mono" data-rise="sm">
                {event}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

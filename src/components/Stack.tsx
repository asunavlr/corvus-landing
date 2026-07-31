import { motion } from "motion/react";
import { useCopy } from "../content";
import { inViewSoft, rise, riseSmall, stagger } from "../lib/motion";

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
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>{copy.stack.eyebrow}</motion.p>
          <motion.h2 className="h2" variants={rise}>{copy.stack.title}</motion.h2>
        </motion.div>

        <motion.div className="grid grid--three" variants={stagger(0.06, 0.1)} {...inViewSoft}>
          {copy.stack.items.map((item, i) => (
            <motion.div key={i} className="stack__item" variants={rise}>
              <p className="stack__name">{item.name}</p>
              <p className="stack__role">{item.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="events" variants={stagger(0.03, 0.15)} {...inViewSoft}>
          <motion.p className="events__label eyebrow" variants={riseSmall}>
            {copy.stack.eventsLabel}
          </motion.p>
          <div className="events__wrap">
            {EVENTS.map((event) => (
              <motion.span key={event} className="events__chip mono" variants={riseSmall}>
                {event}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

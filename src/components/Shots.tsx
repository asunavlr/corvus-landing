import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useCopy } from "../content";
import { ease, inViewSoft, rise, riseSmall, stagger } from "../lib/motion";
import "./Shots.css";

/** Capturas do produto rodando de verdade — clique amplia. */
export default function Shots() {
  const copy = useCopy();
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <section className="section section--tinted" id="telas">
      <div className="shell">
        <motion.div variants={stagger()} {...inViewSoft}>
          <motion.p className="eyebrow" variants={riseSmall}>
            {copy.shots.eyebrow}
          </motion.p>
          <motion.h2 className="h2" variants={rise}>
            {copy.shots.title}
          </motion.h2>
          <motion.p className="lede" variants={rise}>
            {copy.shots.lede}
          </motion.p>
        </motion.div>

        <motion.div className="shots" variants={stagger(0.1, 0.1)} {...inViewSoft}>
          {copy.shots.items.map((item, i) => (
            <motion.figure
              key={item.src}
              className={`shot${i === 0 ? " shot--lead" : ""}`}
              variants={rise}
            >
              <div className="shot__media">
                <button className="shot__frame" onClick={() => setZoom(item.src)}>
                  <img src={item.src} alt={item.title} loading="lazy" />
                </button>
                {/* Fora do contêiner que rola: dentro dele, o selo ia junto com
                    a imagem e sumia da vista no celular. */}
                <span className="shot__zoom mono" aria-hidden="true">
                  ↗
                </span>
              </div>
              <figcaption>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setZoom(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.img
              src={zoom}
              alt=""
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

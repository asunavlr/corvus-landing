import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { SPONSOR, useLang } from "../content";

/** Transparente sobre o bando; sólida assim que a página sai do céu. */
export default function Nav() {
  const { copy, lang, setLang } = useLang();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setSolid(y > 80));

  return (
    <motion.nav
      className={`nav${solid ? " nav--solid" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
    >
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top">
          <img src="/images/crow-icon.png" alt="" aria-hidden="true" />
          <span>Corvus</span>
        </a>
        <ul className="nav__links">
          {copy.nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="nav__right">
          <div className="lang" role="group" aria-label="Idioma / Language">
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                className={`lang__btn${lang === code ? " lang__btn--on" : ""}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {lang === code && (
                  <motion.span
                    className="lang__bg"
                    layoutId="lang-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="lang__label">{code.toUpperCase()}</span>
              </button>
            ))}
          </div>
          <a className="nav__cta" href={SPONSOR}>
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

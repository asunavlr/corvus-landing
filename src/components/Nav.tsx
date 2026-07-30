import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { REPO } from "../data/content";

const LINKS = [
  { href: "#recursos", label: "Recursos" },
  { href: "#orquestracao", label: "Orquestração" },
  { href: "#mcp", label: "MCP" },
  { href: "#api", label: "API" },
];

/** Transparente sobre o bando; sólida assim que a página sai do céu. */
export default function Nav() {
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
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="nav__cta" href={REPO}>
          GitHub
        </a>
      </div>
    </motion.nav>
  );
}

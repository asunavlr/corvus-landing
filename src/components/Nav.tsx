import { useEffect, useRef, useState } from "react";
import { SPONSOR, useLang } from "../content";
import { EASE, gsap, reduced, ScrollTrigger, useGSAP } from "../lib/anim";

/** Transparente sobre o bando; sólida assim que a página sai do céu. */
export default function Nav() {
  const { copy, lang, setLang } = useLang();
  const [solid, setSolid] = useState(false);
  const [more, setMore] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const root = useRef<HTMLElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const drawerEl = useRef<HTMLDivElement>(null);
  const pill = useRef<HTMLSpanElement>(null);

  /* Doze seções não cabem numa barra só: o excedente vira "Mais" no desktop e a
     lista inteira vira uma gaveta no celular. Rolar fecha o "Mais" — senão ele
     fica pendurado no meio da página depois de clicar num item. */
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const passou = self.scroll() > 80;
        /* Comparar antes de setar: onUpdate roda a cada quadro, e um setState
           com o mesmo valor não renderiza de novo. */
        setSolid((v) => (v === passou ? v : passou));
        setMore((v) => (v ? false : v));
      },
    });
    setSolid(window.scrollY > 80);
    return () => st.kill();
  }, []);

  /* A barra desce quando a página abre. */
  useGSAP(() => {
    if (reduced) return;
    gsap.from(root.current, { y: -24, opacity: 0, duration: 0.7, ease: EASE, delay: 0.1 });
  }, []);

  useGSAP(
    () => {
      if (!menu.current) return;
      gsap.fromTo(
        menu.current,
        { opacity: 0, y: -6 },
        { opacity: 1, y: 0, duration: reduced ? 0 : 0.18, ease: EASE },
      );
    },
    { dependencies: [more] },
  );

  useGSAP(
    () => {
      if (!drawerEl.current) return;
      gsap.fromTo(
        drawerEl.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: reduced ? 0 : 0.24, ease: EASE },
      );
    },
    { dependencies: [drawer] },
  );

  /* Uma pílula só, que desliza entre as duas metades. */
  useGSAP(
    () => {
      gsap.to(pill.current, {
        xPercent: lang === "pt" ? 0 : 100,
        duration: reduced ? 0 : 0.4,
        ease: "back.out(1.6)",
      });
    },
    { dependencies: [lang] },
  );

  useEffect(() => {
    if (!drawer) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDrawer(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawer]);

  const allLinks = [...copy.nav.links, ...copy.nav.more.links];

  return (
    <nav className={`nav${solid || drawer ? " nav--solid" : ""}`} ref={root}>
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
          <li
            className="nav__more"
            onMouseEnter={() => setMore(true)}
            onMouseLeave={() => setMore(false)}
          >
            <button
              className="nav__more-btn"
              aria-expanded={more}
              onClick={() => setMore((v) => !v)}
            >
              {copy.nav.more.label}
              <span aria-hidden="true">›</span>
            </button>
            {more && (
              <ul className="nav__menu" ref={menu}>
                {copy.nav.more.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setMore(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        <div className="nav__right">
          <div className="lang" role="group" aria-label="Idioma / Language">
            <span className="lang__bg" aria-hidden="true" ref={pill} />
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                className={`lang__btn${lang === code ? " lang__btn--on" : ""}`}
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="nav__cta" href={SPONSOR}>
            {copy.nav.cta}
          </a>
          <button
            className="nav__burger"
            aria-label={copy.nav.menuLabel}
            aria-expanded={drawer}
            onClick={() => setDrawer((v) => !v)}
          >
            <span className={`nav__burger-ico${drawer ? " is-open" : ""}`} aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {drawer && (
        <div className="nav__drawer" ref={drawerEl}>
          <ul className="shell nav__drawer-list">
            {allLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setDrawer(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

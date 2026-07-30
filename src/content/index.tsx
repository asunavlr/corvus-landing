import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { pt, type Copy } from "./pt";
import { en } from "./en";

export { REPO, SPONSOR, PRICE_USD, PRICE_BRL } from "./pt";
export type { Copy };

export type Lang = "pt" | "en";

const DICT: Record<Lang, Copy> = { pt, en };
const STORAGE_KEY = "corvus-lang";

/** Português por padrão; inglês só se o navegador não for pt e nada foi escolhido. */
function initialLang(): Lang {
  if (typeof window === "undefined") return "pt";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "pt" || saved === "en") return saved;
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

type Ctx = { lang: Lang; copy: Copy; setLang: (lang: Lang) => void };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo(() => ({ lang, copy: DICT[lang], setLang }), [lang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): Ctx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de <LangProvider>");
  return ctx;
}

/** Atalho para quem só quer o texto. */
export const useCopy = () => useLang().copy;

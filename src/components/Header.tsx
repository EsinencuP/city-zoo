import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TreePine, Menu, X, Ticket } from "lucide-react";
import { translations } from "../data/translations";
import Button from "./ui/Button";
import { popupMotion } from "../lib/motion";

interface HeaderProps {
  lang: "ru" | "ro" | "en";
  setLang: (lang: "ru" | "ro" | "en") => void;
  onOpenTickets: () => void;
  onNavigate: (route: string) => void;
  currentRoute: string;
}

export default function Header({ lang, setLang, onOpenTickets, onNavigate, currentRoute }: HeaderProps) {
  const t = translations[lang].header;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.navHome, route: `/${lang}` },
    { name: t.navAnimals, route: `/${lang}/animals` },
    { name: t.navMap, route: `/${lang}/map` },
    { name: t.navNews, route: `/${lang}/news` },
    { name: t.navFaq, route: `/${lang}/faq` },
    { name: lang === "ru" ? "Визит" : lang === "ro" ? "Vizită" : "Visit", route: `/${lang}/visit` }
  ];

  const handleLangChange = (newLang: "ru" | "ro" | "en") => {
    setLang(newLang);
    const segments = currentRoute.split("/");
    if (segments[1] === "ru" || segments[1] === "ro" || segments[1] === "en") {
      segments[1] = newLang;
      onNavigate(segments.join("/"));
    } else {
      onNavigate(`/${newLang}`);
    }
  };

  const isActive = (route: string) => {
    if (route === `/${lang}` && currentRoute === `/${lang}`) return true;
    return route !== `/${lang}` && currentRoute.startsWith(route);
  };

  const go = (route: string) => {
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-3 z-40 px-3 md:top-4">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between rounded-full bg-cream/84 px-3 shadow-soft-card backdrop-blur-xl md:px-4">
        <button
          onClick={() => go(`/${lang}`)}
          className="flex min-h-11 items-center gap-2 rounded-full px-3 text-canopy transition-[background-color,transform] duration-200 hover:bg-mint/70 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-canopy text-mint">
            <TreePine className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-[-0.04em]">{t.logo}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => go(item.route)}
              className={[
                "relative min-h-10 rounded-full px-3.5 text-sm font-semibold transition-[background-color,color] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20",
                isActive(item.route) ? "bg-mint text-canopy" : "text-moss hover:bg-mint/55 hover:text-canopy"
              ].join(" ")}
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full bg-mint/60 p-1" id="lang-selector">
            {(["ru", "ro", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={[
                  "flex min-h-8 min-w-8 items-center justify-center rounded-full px-2 text-xs font-bold uppercase transition-[background-color,color,transform] duration-200 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20",
                  lang === l ? "bg-canopy text-cream" : "text-moss hover:text-canopy"
                ].join(" ")}
                aria-label={`Switch language to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>

          <Button onClick={onOpenTickets} className="hidden px-4 py-2 sm:flex" id="buy-ticket-header-cta">
            <Ticket className="h-4 w-4" />
            <span>{t.ctaBuyTicket}</span>
          </Button>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-mint/70 text-canopy transition-[background-color,scale] duration-200 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-[30px] bg-cream/96 p-4 shadow-soft-card backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="flex flex-col gap-2" initial="hidden" animate="visible" exit="exit" variants={popupMotion}>
              {navItems.map((item) => (
                <button
                  key={item.route}
                  onClick={() => go(item.route)}
                  className={[
                    "flex min-h-11 items-center justify-between rounded-2xl px-4 text-left text-base font-semibold transition-[background-color,color] duration-200",
                    isActive(item.route) ? "bg-mint text-canopy" : "text-moss hover:bg-mint/55 hover:text-canopy"
                  ].join(" ")}
                >
                  <span>{item.name}</span>
                  {isActive(item.route) && <span className="h-2 w-2 rounded-full bg-terracotta" />}
                </button>
              ))}
              <Button onClick={() => { setMobileMenuOpen(false); onOpenTickets(); }} className="mt-2 w-full rounded-2xl">
                <Ticket className="h-5 w-5" />
                <span>{t.ctaBuyTicket}</span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

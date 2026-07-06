import React, { useState } from "react";
import { TreePine, Menu, X, Ticket, HelpCircle } from "lucide-react";
import { translations } from "../data/translations";

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
    { name: lang === "ru" ? "Визит" : lang === "ro" ? "Vizită" : "Visit", route: `/${lang}/visit` },
  ];

  const handleLangChange = (newLang: "ru" | "ro" | "en") => {
    setLang(newLang);
    // Replace the current route's language segment if it has one
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
    if (route !== `/${lang}` && currentRoute.startsWith(route)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F1E8]/90 backdrop-blur-md border-b border-[#233122]/10 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <button 
          onClick={() => onNavigate(`/${lang}`)}
          className="flex items-center gap-2 group min-h-[40px] px-2 rounded-lg hover:bg-[#E7F0E1]/50 transition-colors"
        >
          <TreePine className="w-6 h-6 text-[#6F8F5B] group-hover:scale-105 transition-transform duration-300" />
          <span className="font-serif font-bold text-lg text-[#233122] tracking-tight">
            {t.logo}
          </span>
        </button>

        {/* COMPACT NAVIGATION - DESKTOP */}
        <nav className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.route}
              onClick={() => onNavigate(item.route)}
              className={`text-sm font-medium transition-colors duration-200 py-2 min-h-[40px] flex items-center relative ${
                isActive(item.route) 
                  ? "text-[#233122] font-semibold" 
                  : "text-[#5E6B5C] hover:text-[#233122]"
              }`}
            >
              <span>{item.name}</span>
              {isActive(item.route) && (
                <span className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-[#6F8F5B] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT AREA: LANGS, CTA, MOBILE TRIGGER */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* LANGUAGE SELECTOR - ALWAYS VISIBLE */}
          <div className="flex items-center border border-[#233122]/10 rounded-full p-0.5 bg-[#F6F1E8]" id="lang-selector">
            {(["ru", "ro", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => handleLangChange(l)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-full uppercase transition-all duration-200 min-w-[32px] min-h-[32px] flex items-center justify-center ${
                  lang === l
                    ? "bg-[#6F8F5B] text-[#F6F1E8] shadow-sm"
                    : "text-[#5E6B5C] hover:text-[#233122]"
                }`}
                aria-label={`Switch language to ${l}`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <button
            onClick={onOpenTickets}
            className="hidden sm:flex items-center gap-2 bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 hover:scale-[0.98] active:scale-95 shadow-sm min-h-[40px]"
            id="buy-ticket-header-cta"
          >
            <Ticket className="w-4 h-4" />
            <span>{t.ctaBuyTicket}</span>
          </button>

          {/* MOBILE HAMBURGER TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#E7F0E1]/80 text-[#233122] transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* MOBILE NAV PANEL */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#F6F1E8] border-b border-[#233122]/10 shadow-lg px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.route}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.route);
                }}
                className={`text-base font-medium text-left border-b border-[#233122]/5 pb-2 transition-colors min-h-[40px] flex items-center justify-between ${
                  isActive(item.route) ? "text-[#6F8F5B] font-semibold" : "text-[#233122]"
                }`}
              >
                <span>{item.name}</span>
                {isActive(item.route) && <span className="w-1.5 h-1.5 bg-[#6F8F5B] rounded-full" />}
              </button>
            ))}
          </div>

          {/* MOBILE ONLY PRIMARY CTA */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTickets();
            }}
            className="flex items-center justify-center gap-2 bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] py-3 rounded-xl font-semibold transition-all duration-200 active:scale-95 shadow-sm w-full min-h-[44px]"
          >
            <Ticket className="w-5 h-5" />
            <span>{t.ctaBuyTicket}</span>
          </button>
        </div>
      )}
    </header>
  );
}

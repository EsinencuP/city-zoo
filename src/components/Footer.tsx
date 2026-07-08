import React from "react";
import { TreePine, Mail, Phone, MapPin } from "lucide-react";
import { translations } from "../data/translations";

interface FooterProps {
  lang: "ru" | "ro" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;
  const th = translations[lang].header;

  return (
    <footer className="bg-[#233122] text-[#F6F1E8]/90 py-16 border-t border-[#233122]/20 relative overflow-hidden">
      {/* Botanical Backdrop Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4F6942]/10 via-transparent to-transparent opacity-40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-[#F6F1E8]/10">
          
          {/* Logo & Slogan column - 5 cols */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <a href="#hero" className="flex items-center gap-2 group min-h-[40px]">
              <TreePine className="w-7 h-7 text-[#6F8F5B] group-hover:scale-105 transition-transform" />
              <span className="font-serif font-bold text-xl text-[#F6F1E8] tracking-tight">
                {th.logo}
              </span>
            </a>
            <p className="text-sm text-[#F6F1E8]/70 leading-relaxed max-w-sm text-pretty">
              {t.desc}
            </p>
          </div>

          {/* Nav links column - 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-sm text-[#F6F1E8] uppercase tracking-wider">
              {t.colNavTitle}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#F6F1E8]/70">
              <a href="#hero" className="hover:text-white transition-colors">{th.navHome}</a>
              <a href="#map" className="hover:text-white transition-colors">{th.navMap}</a>
              <a href="#animals" className="hover:text-white transition-colors">{th.navAnimals}</a>
              <a href="#news" className="hover:text-white transition-colors">{th.navNews}</a>
            </div>
          </div>

          {/* Contacts column - 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-sm text-[#F6F1E8] uppercase tracking-wider">
              {t.colContactTitle}
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#F6F1E8]/70 font-mono">
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6F8F5B]" />
                <span className="tabular-nums">+373 22 56 27 22</span>
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#6F8F5B]" />
                <span className="tabular-nums">+373 689 44 244</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6F8F5B]" />
                <span>grzoo.info@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#6F8F5B]" />
                <span>zooparkmd@gmail.com</span>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#6F8F5B]" />
                <span>MD-2072, bd. Dacia 50/7, Chișinău</span>
              </span>
            </div>
          </div>

          {/* Support / Help column - 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="font-serif font-bold text-sm text-[#F6F1E8] uppercase tracking-wider">
              {t.colSupportTitle}
            </h4>
            <p className="text-sm text-[#F6F1E8]/70 leading-relaxed text-pretty">
              {t.supportText}
            </p>
            <div className="flex gap-2.5 mt-1">
              <a 
                href="https://www.facebook.com/gradinazoo/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#6F8F5B] hover:bg-[#4F6942] text-[#F6F1E8] text-xs font-semibold px-4 py-2 rounded-lg transition-all min-h-[36px] flex items-center justify-center shadow-sm"
              >
                Facebook
              </a>
              <a 
                href="https://zoo.md/"
                target="_blank"
                rel="noreferrer"
                className="bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] text-xs font-semibold px-4 py-2 rounded-lg transition-all min-h-[36px] flex items-center justify-center shadow-sm"
              >
                zoo.md
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F1E8]/50">
          <div>
            <span>{t.copyright}</span> <span className="font-mono">{t.allRightsReserved}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#hero" className="hover:text-white transition-colors">{lang === "ru" ? "Политика конфиденциальности" : lang === "ro" ? "Politica de confidențialitate" : "Privacy Policy"}</a>
            <a href="#hero" className="hover:text-white transition-colors">{lang === "ru" ? "Правила посещения" : lang === "ro" ? "Reguli de vizitare" : "Visitor Rules"}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}



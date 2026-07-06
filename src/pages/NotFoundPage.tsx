import React from "react";
import { AlertCircle, ArrowLeft, Home, QrCode } from "lucide-react";

interface NotFoundPageProps {
  lang: "ru" | "ro" | "en";
  reason?: "qr" | "route" | "animal";
  onNavigate: (route: string) => void;
}

export default function NotFoundPage({ lang, reason = "route", onNavigate }: NotFoundPageProps) {
  const copy = {
    ru: {
      eyebrow: reason === "qr" ? "QR-код не найден" : "Страница не найдена",
      title: reason === "qr" ? "Карточка по этому QR-коду недоступна" : "Такой страницы нет в демо",
      text: reason === "qr"
        ? "Проверьте код на табличке или откройте список животных. В демо доступны QR-ссылки вроде /qr/tiger и /qr/red_panda."
        : "Текущая демо-версия показывает публичный сайт без админ-панели и служебных разделов.",
      home: "На главную",
      animals: "К животным"
    },
    ro: {
      eyebrow: reason === "qr" ? "Cod QR negăsit" : "Pagina nu există",
      title: reason === "qr" ? "Fișa pentru acest cod QR nu este disponibilă" : "Această pagină nu este în demo",
      text: reason === "qr"
        ? "Verificați codul de pe panou sau deschideți lista animalelor. În demo funcționează linkuri precum /qr/tiger și /qr/red_panda."
        : "Versiunea demo afișează site-ul public, fără panou de administrare și secțiuni interne.",
      home: "Acasă",
      animals: "Animale"
    },
    en: {
      eyebrow: reason === "qr" ? "QR code not found" : "Page not found",
      title: reason === "qr" ? "This QR animal card is unavailable" : "This page is not part of the demo",
      text: reason === "qr"
        ? "Check the sign code or open the animal directory. Demo QR links include /qr/tiger and /qr/red_panda."
        : "The current demo shows the public visitor site without admin or internal service areas.",
      home: "Home",
      animals: "Animals"
    }
  }[lang];

  return (
    <div className="max-w-[760px] mx-auto px-4 md:px-6 py-16 animate-in fade-in duration-300">
      <section className="bg-[#F6F1E8] border border-[#233122]/10 rounded-[32px] p-8 sm:p-10 shadow-sm text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F0E1] text-[#4F6942]">
          {reason === "qr" ? <QrCode className="h-7 w-7" /> : <AlertCircle className="h-7 w-7" />}
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#6F8F5B]">
          {copy.eyebrow}
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-[#233122] text-balance">
          {copy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#5E6B5C] text-pretty">
          {copy.text}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate(`/${lang}`)}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#233122] px-6 py-3 text-sm font-semibold text-[#F6F1E8] transition-[scale,background-color] duration-150 active:scale-[0.96] hover:bg-[#4F6942]"
          >
            <Home className="h-4 w-4" />
            <span>{copy.home}</span>
          </button>
          <button
            onClick={() => onNavigate(`/${lang}/animals`)}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#233122]/15 px-6 py-3 text-sm font-semibold text-[#233122] transition-[scale,background-color] duration-150 active:scale-[0.96] hover:bg-[#E7F0E1]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{copy.animals}</span>
          </button>
        </div>
      </section>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TicketModal from "./components/TicketModal";
import { animals, Animal } from "./data/animals";

import Home from "./pages/Home";
import AnimalsList from "./pages/AnimalsList";
import AnimalDetail from "./pages/AnimalDetail";
import MapPage from "./pages/MapPage";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import FaqPage from "./pages/FaqPage";
import VisitPage from "./pages/VisitPage";
import NotFoundPage from "./pages/NotFoundPage";

type Locale = "ru" | "ro" | "en";

const SUPPORTED_LOCALES: Locale[] = ["ru", "ro", "en"];
const DEFAULT_LOCALE: Locale = "ru";

const getBrowserLocale = (): Locale => {
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("ro")) return "ro";
  if (browserLanguage.startsWith("en")) return "en";
  return DEFAULT_LOCALE;
};

const normalizeRoute = (path: string): { lang: Locale; route: string } => {
  const cleanPath = path === "/" ? `/${DEFAULT_LOCALE}` : path.replace(/\/+$/, "");
  const segments = cleanPath.split("/").filter(Boolean);
  const firstSegment = segments[0] as Locale | undefined;
  const lang = firstSegment && SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : DEFAULT_LOCALE;

  if (segments[0] === "qr" && segments[1]) {
    return { lang: getBrowserLocale(), route: `/qr/${segments[1]}` };
  }

  if (segments[0] === "admin") {
    return { lang: DEFAULT_LOCALE, route: `/${DEFAULT_LOCALE}` };
  }

  if (!firstSegment || !SUPPORTED_LOCALES.includes(firstSegment)) {
    return { lang: DEFAULT_LOCALE, route: `/${DEFAULT_LOCALE}` };
  }

  return { lang, route: cleanPath || `/${lang}` };
};

export default function App() {
  const initialRoute = normalizeRoute(window.location.pathname);
  const [lang, setLang] = useState<Locale>(initialRoute.lang);
  const [currentRoute, setCurrentRoute] = useState<string>(initialRoute.route);
  const [ticketModalOpen, setTicketModalOpen] = useState<boolean>(false);
  const [notFoundReason, setNotFoundReason] = useState<"qr" | "route" | null>(null);

  useEffect(() => {
    const handleUrlParsing = () => {
      const params = new URLSearchParams(window.location.search);
      const qrVal = params.get("qr") || params.get("animal");
      const normalized = normalizeRoute(window.location.pathname);

      if (qrVal) {
        const found = animals.find((a) => a.id === qrVal);
        if (found) {
          const qrLocale = normalized.lang || getBrowserLocale();
          const targetRoute = `/${qrLocale}/animals/${found.id}`;
          window.history.replaceState({}, "", targetRoute);
          setLang(qrLocale);
          setCurrentRoute(targetRoute);
          setNotFoundReason(null);
          return;
        }
      }

      if (normalized.route.startsWith("/qr/")) {
        const animalSlug = normalized.route.split("/")[2];
        const found = animals.find((a) => a.id === animalSlug);
        if (found) {
          const targetRoute = `/${normalized.lang}/animals/${found.id}`;
          window.history.replaceState({}, "", targetRoute);
          setLang(normalized.lang);
          setCurrentRoute(targetRoute);
          setNotFoundReason(null);
          return;
        }
        setLang(normalized.lang);
        setCurrentRoute(normalized.route);
        setNotFoundReason("qr");
        return;
      }

      setNotFoundReason(null);
      setLang(normalized.lang);
      setCurrentRoute(normalized.route);
    };

    handleUrlParsing();
    window.addEventListener("popstate", handleUrlParsing);
    return () => window.removeEventListener("popstate", handleUrlParsing);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleNavigate = (route: string) => {
    window.history.pushState({}, "", route);
    const normalized = normalizeRoute(route);
    setLang(normalized.lang);
    setCurrentRoute(normalized.route);
    setNotFoundReason(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenTickets = () => {
    setTicketModalOpen(true);
  };

  const handleCloseTickets = () => {
    setTicketModalOpen(false);
  };

  const renderCurrentPage = () => {
    if (notFoundReason) {
      return <NotFoundPage lang={lang} reason={notFoundReason} onNavigate={handleNavigate} />;
    }

    const newsDetailRegex = /^\/(ru|ro|en)\/news\/(\d+)$/;
    const newsDetailMatch = currentRoute.match(newsDetailRegex);
    if (newsDetailMatch) {
      const articleId = parseInt(newsDetailMatch[2], 10);
      return (
        <NewsDetail
          newsId={articleId}
          onBack={() => handleNavigate(`/${lang}/news`)}
          lang={lang}
        />
      );
    }

    const animalDetailRegex = /^\/(ru|ro|en)\/animals\/([a-zA-Z0-9_-]+)$/;
    const animalDetailMatch = currentRoute.match(animalDetailRegex);
    if (animalDetailMatch) {
      const animalId = animalDetailMatch[2];
      const matchedAnimal = animals.find((a) => a.id === animalId) || null;
      return (
        <AnimalDetail
          animal={matchedAnimal}
          onBack={() => handleNavigate(`/${lang}/animals`)}
          lang={lang}
        />
      );
    }

    const baseRoute = currentRoute.replace(/^\/(ru|ro|en)/, "") || "/";

    switch (baseRoute) {
      case "/animals":
        return (
          <AnimalsList
            lang={lang}
            onSelectAnimal={(animal: Animal) => handleNavigate(`/${lang}/animals/${animal.id}`)}
          />
        );
      case "/map":
        return (
          <MapPage
            lang={lang}
            onSelectAnimal={(animal: Animal) => handleNavigate(`/${lang}/animals/${animal.id}`)}
          />
        );
      case "/news":
      case "/events":
        return (
          <NewsList
            lang={lang}
            onSelectNews={(id) => handleNavigate(`/${lang}/news/${id}`)}
          />
        );
      case "/faq":
      case "/about":
      case "/contact":
        return <FaqPage lang={lang} />;
      case "/visit":
      case "/plan-your-visit":
      case "/tickets":
        return (
          <VisitPage
            lang={lang}
            onOpenTickets={handleOpenTickets}
          />
        );
      case "/":
        return (
          <Home
            lang={lang}
            onNavigate={handleNavigate}
            onOpenTickets={handleOpenTickets}
          />
        );
      default:
        return <NotFoundPage lang={lang} reason="route" onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen text-[#233122] selection:bg-[#6F8F5B] selection:text-[#F6F1E8]">
      <Header
        lang={lang}
        setLang={setLang}
        onOpenTickets={handleOpenTickets}
        onNavigate={handleNavigate}
        currentRoute={currentRoute}
      />

      <main className="min-h-[calc(100vh-16rem)]">
        {renderCurrentPage()}
      </main>

      <Footer lang={lang} />

      <TicketModal
        isOpen={ticketModalOpen}
        onClose={handleCloseTickets}
        lang={lang}
      />
    </div>
  );
}

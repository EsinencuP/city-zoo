import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TicketModal from "./components/TicketModal";
import { animals, Animal } from "./data/animals";

// Import all dedicated sub-pages
import Home from "./pages/Home";
import AnimalsList from "./pages/AnimalsList";
import AnimalDetail from "./pages/AnimalDetail";
import MapPage from "./pages/MapPage";
import NewsList from "./pages/NewsList";
import NewsDetail from "./pages/NewsDetail";
import FaqPage from "./pages/FaqPage";
import VisitPage from "./pages/VisitPage";

export default function App() {
  const [lang, setLang] = useState<"ru" | "ro" | "en">("ru");
  const [currentRoute, setCurrentRoute] = useState<string>(`/ru`);
  const [ticketModalOpen, setTicketModalOpen] = useState<boolean>(false);

  // Initialize route from hash, search query, or default
  useEffect(() => {
    const handleUrlParsing = () => {
      // Direct QR-code scanning or email link simulation:
      // If we see ?qr=tiger or ?animal=tiger in the URL search params, navigate to detail page!
      const params = new URLSearchParams(window.location.search);
      const qrVal = params.get("qr") || params.get("animal");
      
      if (qrVal) {
        const found = animals.find(a => a.id === qrVal);
        if (found) {
          // Clear query params to prevent reload loop
          window.history.replaceState({}, document.title, window.location.pathname);
          setCurrentRoute(`/${lang}/animals/${found.id}`);
          return;
        }
      }

      // Default relative routing parsing
      const path = window.location.hash.replace("#", "") || `/${lang}`;
      setCurrentRoute(path);
    };

    handleUrlParsing();
    window.addEventListener("hashchange", handleUrlParsing);
    return () => window.removeEventListener("hashchange", handleUrlParsing);
  }, [lang]);

  // Handle route navigation and auto-scroll to top for native feel
  const handleNavigate = (route: string) => {
    window.location.hash = route;
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenTickets = () => {
    setTicketModalOpen(true);
  };

  const handleCloseTickets = () => {
    setTicketModalOpen(false);
  };

  // Main Page Router Switch Logic
  const renderCurrentPage = () => {
    // 1. Specific news article detail page: /:lang/news/:id
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

    // 2. Specific animal resident details page: /:lang/animals/:id
    const animalDetailRegex = /^\/(ru|ro|en)\/animals\/([a-zA-Z0-9_-]+)$/;
    const animalDetailMatch = currentRoute.match(animalDetailRegex);
    if (animalDetailMatch) {
      const animalId = animalDetailMatch[2];
      const matchedAnimal = animals.find(a => a.id === animalId) || null;
      return (
        <AnimalDetail 
          animal={matchedAnimal}
          onBack={() => handleNavigate(`/${lang}/animals`)}
          lang={lang}
        />
      );
    }

    // 3. Static routing catalog mapping
    const baseRoute = currentRoute.replace(/^\/(ru|ro|en)/, "") || "/";

    switch (baseRoute) {
      case "/animals":
        return (
          <AnimalsList 
            lang={lang} 
            onSelectAnimal={(animal) => handleNavigate(`/${lang}/animals/${animal.id}`)}
          />
        );
      case "/map":
        return (
          <MapPage 
            lang={lang} 
            onSelectAnimal={(animal) => handleNavigate(`/${lang}/animals/${animal.id}`)}
          />
        );
      case "/news":
        return (
          <NewsList 
            lang={lang} 
            onSelectNews={(id) => handleNavigate(`/${lang}/news/${id}`)}
          />
        );
      case "/faq":
        return (
          <FaqPage lang={lang} />
        );
      case "/visit":
        return (
          <VisitPage 
            lang={lang} 
            onOpenTickets={handleOpenTickets}
          />
        );
      case "/":
      default:
        return (
          <Home 
            lang={lang} 
            onNavigate={handleNavigate}
            onOpenTickets={handleOpenTickets}
          />
        );
    }
  };

  return (
    <div className="min-h-screen text-[#233122] selection:bg-[#6F8F5B] selection:text-[#F6F1E8]">
      
      {/* Dynamic Header with state properties */}
      <Header 
        lang={lang} 
        setLang={setLang} 
        onOpenTickets={handleOpenTickets} 
        onNavigate={handleNavigate}
        currentRoute={currentRoute}
      />

      {/* Primary Page Content Wrapper */}
      <main className="min-h-[calc(100vh-16rem)]">
        {renderCurrentPage()}
      </main>

      {/* Editorial Footer */}
      <Footer lang={lang} />

      {/* Ticket Checkout Modal */}
      <TicketModal 
        isOpen={ticketModalOpen} 
        onClose={handleCloseTickets} 
        lang={lang} 
      />

    </div>
  );
}

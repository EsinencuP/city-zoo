import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Coffee, Compass, Cross, Footprints, HelpCircle, RotateCcw, ShieldAlert, Users, ZoomIn, ZoomOut } from "lucide-react";
import { translations } from "../data/translations";
import { animals, Animal } from "../data/animals";
import { animalImages } from "../data/animalImages";
import { popupMotion } from "../lib/motion";
import Button from "./ui/Button";

interface MapSectionProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}

type MarkerType = "animal" | "entrance_exit" | "food" | "playground" | "medical_help";

interface MapMarker {
  id: string;
  type: MarkerType;
  name: { ru: string; ro: string; en: string };
  description?: { ru: string; ro: string; en: string };
  coordinates: { x: number; y: number };
  refId?: string;
}

const infrastructureMarkers: MapMarker[] = [
  {
    id: "main_entrance",
    type: "entrance_exit",
    name: { ru: "Главный вход Zoo", ro: "Intrarea principală Zoo", en: "Zoo Main Entrance" },
    description: {
      ru: "Кассы, входная зона и старт прогулочного маршрута по Zoo.",
      ro: "Casele, zona de intrare și începutul traseului de vizită Zoo.",
      en: "Ticket desks, entry area, and the start of the Zoo visitor route."
    },
    coordinates: { x: 50, y: 90 }
  },
  {
    id: "garden_cafe",
    type: "food",
    name: { ru: "Садовое кафе", ro: "Cafenea de grădină", en: "Garden Cafe" },
    description: {
      ru: "Спокойная остановка для напитков, выпечки и короткого семейного отдыха.",
      ro: "O oprire calmă pentru băuturi, patiserie și pauză de familie.",
      en: "A calm stop for drinks, pastries, and a short family break."
    },
    coordinates: { x: 30, y: 20 }
  },
  {
    id: "kids_playground",
    type: "playground",
    name: { ru: "Детская площадка", ro: "Teren de joacă", en: "Playground" },
    description: {
      ru: "Игровая зона для паузы между вольерами. Рекомендуется для семей с детьми.",
      ro: "Zonă de joacă pentru pauză între incinte. Recomandată familiilor cu copii.",
      en: "Play area for a break between enclosures. Recommended for families with children."
    },
    coordinates: { x: 68, y: 48 }
  },
  {
    id: "medical_help",
    type: "medical_help",
    name: { ru: "Медпункт", ro: "Punct medical", en: "Medical Help" },
    description: {
      ru: "Обратитесь сюда при недомогании, травме или если нужна помощь сотрудника Zoo.",
      ro: "Adresați-vă aici în caz de disconfort, accidentare sau dacă aveți nevoie de ajutorul echipei Zoo.",
      en: "Use this point for illness, injury, or help from the Zoo team."
    },
    coordinates: { x: 58, y: 84 }
  }
];

const typeLabel = (type: MarkerType, t: ReturnType<typeof getMapTranslations>) => {
  switch (type) {
    case "animal":
      return t.legendAnimal;
    case "entrance_exit":
      return t.legendEntry;
    case "food":
      return t.legendCafe;
    case "playground":
      return t.legendKids;
    case "medical_help":
      return t.legendFirstAid;
  }
};

function getMapTranslations(lang: "ru" | "ro" | "en") {
  return translations[lang].mapSection;
}

export default function MapSection({ lang, onSelectAnimal }: MapSectionProps) {
  const t = getMapTranslations(lang);
  const tFeatured = translations[lang].featuredAnimals;
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const markers: MapMarker[] = [
    ...infrastructureMarkers,
    ...animals.map((animal) => ({
      id: `animal_${animal.id}`,
      type: "animal" as const,
      name: animal.name,
      coordinates: animal.mapCoordinates,
      refId: animal.id
    }))
  ];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2.2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.8));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActiveMarker(null);
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: event.clientX - pan.x, y: event.clientY - pan.y };
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging.current) return;
    const bound = 120 * zoom;
    const nextX = event.clientX - dragStart.current.x;
    const nextY = event.clientY - dragStart.current.y;
    setPan({
      x: Math.max(-bound, Math.min(bound, nextX)),
      y: Math.max(-bound, Math.min(bound, nextY))
    });
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const getMarkerIcon = (type: MarkerType) => {
    switch (type) {
      case "entrance_exit":
        return <Footprints className="h-4 w-4" />;
      case "food":
        return <Coffee className="h-4 w-4" />;
      case "playground":
        return <Users className="h-4 w-4" />;
      case "medical_help":
        return <Cross className="h-4 w-4 rotate-45" />;
      case "animal":
        return <Compass className="h-4 w-4" />;
    }
  };

  const getMarkerStyles = (type: MarkerType, isSelected: boolean) => {
    const base = "map-marker absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full shadow-md transition-[transform,box-shadow,background-color] duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25";
    const size = isSelected ? "z-30 h-10 w-10 scale-110 ring-4 ring-terracotta is-active" : "z-20 h-8 w-8 hover:z-30 hover:scale-110";
    const tone = {
      animal: "border border-leaf/30 bg-mint text-leaf",
      entrance_exit: "bg-canopy text-cream",
      food: "bg-leaf text-cream",
      playground: "bg-terracotta text-cream",
      medical_help: "border border-terracotta/20 bg-cream text-terracotta"
    }[type];

    return `${base} ${size} ${tone}`;
  };

  const activeAnimal = activeMarker?.type === "animal" ? animals.find((animal) => animal.id === activeMarker.refId) : null;

  return (
    <section id="map" className="relative overflow-hidden border-b border-canopy/10 bg-cream py-16 md:py-24">
      <div className="absolute inset-0 botanical-map-grid opacity-45" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-[0.22em] text-leaf">Interactive guide</span>
            <h2 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-moss text-pretty sm:text-base">{t.subtitle}</p>
          </div>
          <div className="inline-flex max-w-md items-center gap-2 rounded-full bg-mint px-4 py-2.5 text-xs font-semibold text-canopy shadow-soft-card">
            <ShieldAlert className="h-4 w-4 shrink-0 text-terracotta" />
            <span>{t.interactiveGuideTip}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div
              className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[36px] border border-canopy/10 bg-mint shadow-[inset_0_2px_10px_rgba(35,49,34,0.05)] sm:aspect-[16/10]"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDragging}
              onMouseLeave={stopDragging}
              id="interactive-svg-map-wrapper"
            >
              <div
                className="relative h-full w-full origin-center transition-transform duration-100 ease-out"
                style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` }}
              >
                <svg viewBox="0 0 800 500" className="pointer-events-none h-full w-full object-cover select-none" aria-hidden="true">
                  <rect width="800" height="500" fill="#e4f0dd" />
                  <path d="M50 150 C200 120, 250 180, 420 150 C580 120, 680 160, 750 140 L800 200 L800 0 L0 0 Z" fill="#cfe1df" opacity="0.9" />
                  <circle cx="200" cy="250" r="45" fill="#cfe1df" opacity="0.95" />
                  <circle cx="580" cy="380" r="60" fill="#cfe1df" opacity="0.95" />
                  <path d="M200 250 Q390 315 580 380" stroke="#cfe1df" strokeWidth="24" fill="none" strokeLinecap="round" opacity="0.9" />
                  <path d="M 0,200 C 150,150 250,220 300,350 C 350,480 200,500 0,500 Z" fill="#789c61" opacity="0.18" />
                  <path d="M 500,200 C 650,150 750,220 800,350 L 800,500 L 400,500 C 450,400 450,300 500,200 Z" fill="#789c61" opacity="0.22" />
                  <path d="M400,500 L400,400 C400,350 480,260 480,220 C480,180 400,100 400,80" stroke="#fbf4e8" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.95" />
                  <path d="M400,350 C250,350 120,280 120,200 C120,120 250,80 400,80 C550,80 680,120 680,200 C680,280 550,350 400,350 Z" stroke="#fbf4e8" strokeWidth="10" fill="none" opacity="0.95" />
                  <path d="M120,200 L250,300 C300,320 500,320 550,300 L680,200" stroke="#fbf4e8" strokeWidth="8" fill="none" opacity="0.62" strokeDasharray="5,5" />
                  <rect x="50" y="80" width="120" height="80" rx="15" fill="none" stroke="#253721" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <rect x="230" y="50" width="100" height="70" rx="15" fill="none" stroke="#253721" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <rect x="630" y="80" width="120" height="80" rx="15" fill="none" stroke="#253721" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <circle cx="200" cy="250" r="55" fill="none" stroke="#253721" strokeWidth="2" strokeDasharray="4,4" opacity="0.18" />
                  <circle cx="580" cy="380" r="75" fill="none" stroke="#253721" strokeWidth="2" strokeDasharray="4,4" opacity="0.18" />
                  <g transform="translate(60, 430) scale(0.7)" opacity="0.42">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#253721" strokeWidth="2" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="#253721" strokeWidth="2" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="#253721" strokeWidth="2" />
                    <polygon points="50,15 45,50 50,45" fill="#d87949" />
                    <polygon points="50,85 45,50 50,45" fill="#253721" />
                    <text x="45" y="8" fontFamily="monospace" fontSize="10" fill="#253721" fontWeight="bold">N</text>
                  </g>
                </svg>

                {markers.map((marker) => {
                  const isSelected = activeMarker?.id === marker.id;
                  const label = `${typeLabel(marker.type, t)}: ${marker.name[lang]}`;
                  return (
                    <button
                      key={marker.id}
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setActiveMarker(marker);
                      }}
                      style={{ left: `${marker.coordinates.x}%`, top: `${marker.coordinates.y}%` }}
                      className={getMarkerStyles(marker.type, isSelected)}
                      aria-label={label}
                      title={label}
                      id={`map-marker-btn-${marker.id}`}
                    >
                      {getMarkerIcon(marker.type)}
                    </button>
                  );
                })}
              </div>

              <div className="absolute bottom-5 right-5 z-30 flex items-center gap-1.5 rounded-full border border-canopy/10 bg-cream/90 p-1.5 shadow-soft-card backdrop-blur-md">
                <button type="button" onClick={handleZoomIn} className="flex h-10 w-10 items-center justify-center rounded-full text-canopy transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20" aria-label="Zoom in">
                  <ZoomIn className="h-5 w-5" />
                </button>
                <button type="button" onClick={handleZoomOut} className="flex h-10 w-10 items-center justify-center rounded-full text-canopy transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20" aria-label="Zoom out">
                  <ZoomOut className="h-5 w-5" />
                </button>
                <button type="button" onClick={handleReset} className="flex h-10 w-10 items-center justify-center rounded-full text-canopy transition-colors hover:bg-mint focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20" aria-label={t.resetZoom} title={t.resetZoom}>
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>

              <div className="absolute left-5 top-5 z-30 hidden max-w-[420px] flex-wrap gap-2 rounded-[22px] border border-canopy/10 bg-cream/90 p-2.5 font-mono text-[10px] shadow-soft-card backdrop-blur-md sm:flex">
                {([
                  ["animal", t.legendAnimal],
                  ["entrance_exit", t.legendEntry],
                  ["food", t.legendCafe],
                  ["playground", t.legendKids],
                  ["medical_help", t.legendFirstAid]
                ] as Array<[MarkerType, string]>).map(([type, label]) => (
                  <span key={type} className="inline-flex items-center gap-1.5 rounded-full bg-mint px-2.5 py-1 text-canopy">
                    <span className={[
                      "h-2 w-2 rounded-full",
                      type === "animal" ? "bg-terracotta" : type === "entrance_exit" ? "bg-canopy" : type === "food" ? "bg-leaf" : type === "playground" ? "bg-terracotta" : "bg-cream ring-1 ring-terracotta"
                    ].join(" ")} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="min-h-[320px] rounded-[34px] border border-canopy/10 bg-cream/92 p-6 shadow-soft-card backdrop-blur-md lg:min-h-[430px]">
              {activeMarker ? (
                <motion.div key={activeMarker.id} initial="hidden" animate="visible" variants={popupMotion} className="flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-leaf">{typeLabel(activeMarker.type, t)}</span>
                    <button type="button" onClick={() => setActiveMarker(null)} className="rounded-full px-3 py-1.5 text-xs font-bold text-moss transition-colors hover:bg-mint hover:text-canopy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20">
                      {t.popupClose}
                    </button>
                  </div>

                  {activeAnimal ? (
                    <>
                      <div className="overflow-hidden rounded-[26px] bg-mint">
                        <img src={animalImages[activeAnimal.id] || animalImages.tiger} alt={activeAnimal.name[lang]} className="h-44 w-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h3 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance">{activeAnimal.name[lang]}</h3>
                        <p className="mt-2 font-mono text-xs italic text-leaf">{activeAnimal.latinName}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${activeAnimal.biomeColor}`}>{activeAnimal.biome[lang]}</span>
                        <span className="rounded-full bg-mint px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-canopy">{tFeatured.biomeLabel}</span>
                      </div>
                      <p className="text-sm leading-6 text-moss text-pretty">{activeAnimal.shortFact[lang]}</p>
                      <Button onClick={() => onSelectAnimal(activeAnimal)} className="mt-auto w-full justify-center rounded-[20px]" id={`map-popup-detail-cta-${activeAnimal.id}`}>
                        <span>{t.viewInDetail}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div>
                        <h3 className="font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-canopy text-balance">{activeMarker.name[lang]}</h3>
                        <p className="mt-4 text-sm leading-7 text-moss text-pretty">{activeMarker.description?.[lang]}</p>
                      </div>
                      <div className="mt-auto rounded-[26px] bg-mint p-5">
                        <p className="font-mono text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-canopy/70">
                          {lang === "ru" ? "Инфраструктура отмечена для быстрой ориентации внутри Zoo." : lang === "ro" ? "Infrastructura este marcată pentru orientare rapidă în Zoo." : "Infrastructure markers are here for quick wayfinding inside Zoo."}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <div className="flex min-h-[270px] flex-col items-center justify-center gap-4 text-center text-moss lg:min-h-[380px]">
                  <HelpCircle className="h-12 w-12 text-leaf/50" />
                  <p className="max-w-[230px] text-sm leading-6 text-balance">{t.clickMarkerTip}</p>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

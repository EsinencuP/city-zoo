import React, { useState, useRef } from "react";
import { 
  Compass, ZoomIn, ZoomOut, RotateCcw, 
  MapPin, Coffee, Users, Cross, Eye, HelpCircle, Footprints, ShieldAlert 
} from "lucide-react";
import { translations } from "../data/translations";
import { animals, Animal } from "../data/animals";

interface MapPageProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}

interface MapMarker {
  id: string;
  type: "animal" | "entry" | "cafe" | "kids" | "first_aid";
  name: { ru: string; ro: string; en: string };
  coordinates: { x: number; y: number };
  refId?: string;
}

export default function MapPage({ lang, onSelectAnimal }: MapPageProps) {
  const t = translations[lang].mapSection;
  const tFeatured = translations[lang].featuredAnimals;

  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const markers: MapMarker[] = [
    {
      id: "entry_exit",
      type: "entry",
      name: {
        ru: "Главный вход и кассы",
        ro: "Intrarea Principală și Case",
        en: "Main Entrance & Ticket Office"
      },
      coordinates: { x: 50, y: 90 }
    },
    {
      id: "botanical_cafe",
      type: "cafe",
      name: {
        ru: "Эко-кафе «Листья»",
        ro: "Eco-Cafenea „Frunze”",
        en: "Leaves Eco-Cafe"
      },
      coordinates: { x: 30, y: 20 }
    },
    {
      id: "kids_playground",
      type: "kids",
      name: {
        ru: "Детская игровая эко-площадка",
        ro: "Teren de joacă ecologic",
        en: "Kids Eco-Playground"
      },
      coordinates: { x: 68, y: 48 }
    },
    {
      id: "first_aid",
      type: "first_aid",
      name: {
        ru: "Пункт первой помощи",
        ro: "Punct Medical",
        en: "First Aid & Info Desk"
      },
      coordinates: { x: 58, y: 84 }
    },
    ...animals.map((a) => ({
      id: `marker_animal_${a.id}`,
      type: "animal" as const,
      name: a.name,
      coordinates: a.mapCoordinates,
      refId: a.id
    }))
  ];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActiveMarker(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    const bound = 150 * zoom;
    setPan({
      x: Math.max(-bound, Math.min(bound, dx)),
      y: Math.max(-bound, Math.min(bound, dy))
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMarkerClick = (marker: MapMarker, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMarker(marker);
  };

  const getMarkerIcon = (type: MapMarker["type"]) => {
    switch (type) {
      case "entry": return <Footprints className="w-4 h-4" />;
      case "cafe": return <Coffee className="w-4 h-4" />;
      case "kids": return <Users className="w-4 h-4" />;
      case "first_aid": return <Cross className="w-4 h-4 rotate-45 text-red-600" />;
      case "animal":
      default: return <Compass className="w-4 h-4 text-[#D77A4A]" />;
    }
  };

  const getMarkerStyles = (type: MapMarker["type"], isSelected: boolean) => {
    const base = "map-marker absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-[transform,box-shadow,background-color] duration-200 shadow-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25";
    const size = isSelected ? "w-10 h-10 ring-4 ring-terracotta z-30 scale-110 is-active" : "w-8 h-8 hover:scale-110 z-20 hover:z-25";

    let colorClass = "";
    switch (type) {
      case "entry": colorClass = "bg-[#233122] text-[#F6F1E8]"; break;
      case "cafe": colorClass = "bg-[#6F8F5B] text-[#F6F1E8]"; break;
      case "kids": colorClass = "bg-[#D77A4A] text-[#F6F1E8]"; break;
      case "first_aid": colorClass = "bg-white text-red-600 border border-red-100"; break;
      case "animal":
      default: colorClass = "bg-[#E7F0E1] text-[#4F6942] border border-[#6F8F5B]/30"; break;
    }

    return `${base} ${size} ${colorClass}`;
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 animate-in fade-in duration-300">
      
      {/* Title block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[#233122]/10 pb-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-widest block mb-2">Interactive Guide Map</span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233122]">
            {lang === "ru" ? "Интерактивная карта зоопарка" : lang === "ro" ? "Harta Interactivă" : "Interactive Sanctuary Map"}
          </h1>
          <p className="text-sm sm:text-base text-[#5E6B5C] mt-2 text-pretty">
            {t.subtitle}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#E7F0E1] border border-[#6F8F5B]/15 px-4 py-2.5 rounded-full text-xs font-semibold text-[#4F6942] self-start md:self-auto shadow-sm">
          <ShieldAlert className="w-4 h-4 text-[#D77A4A]" />
          <span>{t.interactiveGuideTip}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* MAP INNER STAGE */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div 
            ref={mapContainerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] botanical-map-grid bg-mint border border-canopy/10 rounded-[36px] overflow-hidden cursor-grab active:cursor-grabbing select-none shadow-[inset_0_2px_10px_rgba(35,49,34,0.05)]"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="w-full h-full relative origin-center transition-transform duration-100 ease-out"
              style={{ transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)` }}
            >
              <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none pointer-events-none">
                <path d="M50 150 C200 120, 250 180, 420 150 C580 120, 680 160, 750 140 L800 200 L800 0 L0 0 Z" fill="#C4D0D9" opacity="0.6" />
                <circle cx="200" cy="250" r="45" fill="#C4D0D9" opacity="0.8" />
                <circle cx="580" cy="380" r="60" fill="#C4D0D9" opacity="0.8" />
                <path d="M200 250 Q390 315 580 380" stroke="#C4D0D9" strokeWidth="24" fill="none" strokeLinecap="round" opacity="0.7" />
                <path d="M 0,200 C 150,150 250,220 300,350 C 350,480 200,500 0,500 Z" fill="#6F8F5B" opacity="0.15" />
                <path d="M 500,200 C 650,150 750,220 800,350 L 800,500 L 400,500 C 450,400 450,300 500,200 Z" fill="#6F8F5B" opacity="0.2" />
                <path d="M400,500 L400,400 C400,350 480,260 480,220 C480,180 400,100 400,80" stroke="#F6F1E8" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9" />
                <path d="M400,350 C250,350 120,280 120,200 C120,120 250,80 400,80 C550,80 680,120 680,200 C680,280 550,350 400,350 Z" stroke="#F6F1E8" strokeWidth="10" fill="none" opacity="0.9" />
                <path d="M120,200 L250,300 C300,320 500,320 550,300 L680,200" stroke="#F6F1E8" strokeWidth="8" fill="none" opacity="0.6" strokeDasharray="5,5" />
                <g transform="translate(60, 430) scale(0.7)" opacity="0.4">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#233122" strokeWidth="2" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="#233122" strokeWidth="2" />
                  <polygon points="50,15 45,50 50,45" fill="#D77A4A" />
                  <polygon points="50,85 45,50 50,45" fill="#233122" />
                </g>
              </svg>

              {markers.map((marker) => (
                <button
                  key={marker.id}
                  onClick={(e) => handleMarkerClick(marker, e)}
                  style={{ left: `${marker.coordinates.x}%`, top: `${marker.coordinates.y}%` }}
                  className={getMarkerStyles(marker.type, activeMarker?.id === marker.id)}
                >
                  {getMarkerIcon(marker.type)}
                </button>
              ))}
            </div>

            {/* Controls panel */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#F6F1E8]/90 backdrop-blur-md border border-[#233122]/10 p-1.5 rounded-full shadow-lg z-30">
              <button onClick={handleZoomIn} className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"><ZoomIn className="w-5 h-5" /></button>
              <button onClick={handleZoomOut} className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"><ZoomOut className="w-5 h-5" /></button>
              <button onClick={handleReset} className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"><RotateCcw className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        {/* DETAILS SIDE PANEL */}
        <div className="lg:col-span-4 h-full flex flex-col justify-between">
          <div className="bg-cream/90 border border-canopy/10 rounded-[32px] p-6 shadow-soft-card min-h-[280px] lg:min-h-[380px] flex flex-col justify-between backdrop-blur-sm">
            {activeMarker ? (
              <div className="popup-motion flex flex-col gap-4">
                <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block">
                  {activeMarker.type === "animal" ? t.legendAnimal : activeMarker.type}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#233122] leading-tight">
                  {activeMarker.name[lang]}
                </h3>

                {activeMarker.type === "animal" ? (
                  (() => {
                    const animalData = animals.find((a) => a.id === activeMarker.refId);
                    if (!animalData) return null;
                    return (
                      <div className="flex flex-col gap-4">
                        <p className="font-mono text-xs text-[#5E6B5C] italic">{animalData.latinName}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold uppercase">{tFeatured.biomeLabel}:</span>
                          <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${animalData.biomeColor}`}>
                            {animalData.biome[lang]}
                          </span>
                        </div>
                        <p className="text-sm text-[#233122] leading-relaxed">{animalData.shortFact[lang]}</p>
                        <button
                          onClick={() => onSelectAnimal(animalData)}
                          className="mt-4 bg-terracotta hover:bg-terracotta-deep text-cream px-6 py-3 rounded-[16px] font-semibold text-sm transition-all duration-200 active:scale-[0.96] flex items-center justify-center gap-2 shadow-md hover:scale-[0.98] min-h-[44px]"
                        >
                          <Eye className="w-4 h-4" />
                          <span>{t.viewInDetail}</span>
                        </button>
                      </div>
                    );
                  })()
                ) : (
                  <div className="flex flex-col gap-3">
                    <p className="text-sm text-[#5E6B5C] leading-relaxed">
                      {activeMarker.type === "entry" && (
                        lang === "ru" ? "Главный пропускной узел парка. Оборудован бесконтактными сканерами QR-кодов для мгновенного входа." :
                        lang === "ro" ? "Punctul principal de acces. Echipat cu scanere QR contactless pentru intrare instantanee." :
                        "Main access checkpoint. Equipped with contactless QR scanners for instant, line-free entry."
                      )}
                      {activeMarker.type === "cafe" && (
                        lang === "ru" ? "Уютное кафе среди зелени. Натуральные фермерские продукты, чай из дикорастущих трав и свежая выпечка." :
                        lang === "ro" ? "Cafenea primitoare înconjurată de verdeață. Produse bio de fermă, ceai din ierburi sălbatice și patiserie caldă." :
                        "Cosy cafe surrounded by rich vegetation. Featuring natural farm food, herbal teas, and hot pastry."
                      )}
                      {activeMarker.type === "kids" && (
                        lang === "ru" ? "Безопасная детская эко-площадка, построенная полностью из натурального дерева и каната для активного отдыха." :
                        lang === "ro" ? "Teren de joacă ecologic, sigur, construit în întregime din lemn natural și frânghii." :
                        "Safe eco-playground constructed completely of organic wood and hemp ropes for physical recreation."
                      )}
                      {activeMarker.type === "first_aid" && (
                        lang === "ru" ? "Круглосуточный пункт оказания первой медицинской помощи, а также центральная стойка информации." :
                        lang === "ro" ? "Punct medical non-stop de prim ajutor și biroul central de informații pentru vizitatori." :
                        "First aid medical station and centralized visitor information desk, active during park hours."
                      )}
                    </p>
                    <button
                      onClick={() => setActiveMarker(null)}
                      className="mt-6 border border-[#233122]/15 hover:bg-[#F6F1E8]/40 text-[#233122] px-5 py-2.5 rounded-[12px] font-semibold text-xs transition-all duration-200 min-h-[40px]"
                    >
                      {t.popupClose}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8 text-[#5E6B5C]">
                <HelpCircle className="w-12 h-12 text-[#6F8F5B] opacity-50" />
                <p className="text-sm max-w-[200px] leading-relaxed text-balance">
                  {t.clickMarkerTip}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}

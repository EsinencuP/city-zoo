import React, { useState, useRef } from "react";
import { 
  Compass, ZoomIn, ZoomOut, RotateCcw, 
  MapPin, Coffee, Users, Cross, Eye, HelpCircle, Footprints, ShieldAlert 
} from "lucide-react";
import { translations } from "../data/translations";
import { animals, Animal } from "../data/animals";

interface MapSectionProps {
  lang: "ru" | "ro" | "en";
  onSelectAnimal: (animal: Animal) => void;
}

interface MapMarker {
  id: string;
  type: "animal" | "entry" | "cafe" | "kids" | "first_aid";
  name: { ru: string; ro: string; en: string };
  coordinates: { x: number; y: number }; // percentage coords
  refId?: string; // links to animal dataset if type === 'animal'
}

export default function MapSection({ lang, onSelectAnimal }: MapSectionProps) {
  const t = translations[lang].mapSection;
  const tFeatured = translations[lang].featuredAnimals;

  // State for interactive map controls
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeMarker, setActiveMarker] = useState<MapMarker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Infrastructure markers + Animal markers compiled
  const markers: MapMarker[] = [
    // Entrance / Exit
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
    // Cafe
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
    // Kids Zone
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
    // First Aid
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
    // Animals markers (pulling from animals data coordinates)
    ...animals.map((a) => ({
      id: `marker_animal_${a.id}`,
      type: "animal" as const,
      name: a.name,
      coordinates: a.mapCoordinates,
      refId: a.id
    }))
  ];

  // Zoom controls
  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setActiveMarker(null);
  };

  // Drag to pan logic for custom SVG map
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    // Bound the panning boundaries relative to zoom
    const bound = 150 * zoom;
    setPan({
      x: Math.max(-bound, Math.min(bound, dx)),
      y: Math.max(-bound, Math.min(bound, dy))
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Click on a marker
  const handleMarkerClick = (marker: MapMarker, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMarker(marker);
  };

  // Helper to render beautiful category indicator icon
  const getMarkerIcon = (type: MapMarker["type"]) => {
    switch (type) {
      case "entry":
        return <Footprints className="w-4 h-4" />;
      case "cafe":
        return <Coffee className="w-4 h-4" />;
      case "kids":
        return <Users className="w-4 h-4" />;
      case "first_aid":
        return <Cross className="w-4 h-4 rotate-45 text-red-600" />;
      case "animal":
      default:
        return <Compass className="w-4 h-4 text-[#D77A4A]" />;
    }
  };

  // Render styling for categories
  const getMarkerStyles = (type: MapMarker["type"], isSelected: boolean) => {
    const base = "absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all duration-300 shadow-md cursor-pointer select-none";
    const size = isSelected ? "w-10 h-10 ring-4 ring-[#D77A4A] z-30 scale-110" : "w-8 h-8 hover:scale-110 z-20 hover:z-25";

    let colorClass = "";
    switch (type) {
      case "entry":
        colorClass = "bg-[#233122] text-[#F6F1E8]";
        break;
      case "cafe":
        colorClass = "bg-[#6F8F5B] text-[#F6F1E8]";
        break;
      case "kids":
        colorClass = "bg-[#D77A4A] text-[#F6F1E8]";
        break;
      case "first_aid":
        colorClass = "bg-white text-red-600 border border-red-100";
        break;
      case "animal":
      default:
        colorClass = "bg-[#E7F0E1] text-[#4F6942] border border-[#6F8F5B]/30";
        break;
    }

    return `${base} ${size} ${colorClass}`;
  };

  return (
    <section id="map" className="py-20 bg-[#F6F1E8] border-b border-[#233122]/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block mb-2">Interactive Guide</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#233122] font-semibold tracking-tight text-balance">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#5E6B5C] mt-2 text-pretty">
              {t.subtitle}
            </p>
          </div>

          {/* Quick tip badge */}
          <div className="inline-flex items-center gap-2 bg-[#E7F0E1] border border-[#6F8F5B]/15 px-4 py-2.5 rounded-full text-xs font-semibold text-[#4F6942] self-start md:self-auto shadow-sm">
            <ShieldAlert className="w-4 h-4 text-[#D77A4A]" />
            <span>{t.interactiveGuideTip}</span>
          </div>
        </div>

        {/* Map Control Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* THE INTERACTIVE MAP CANVAS CONTAINER - 8 cols on desktop */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Map Canvas Card */}
            <div 
              ref={mapContainerRef}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#E7F0E1] border border-[#233122]/10 rounded-[32px] overflow-hidden cursor-grab active:cursor-grabbing select-none shadow-[inset_0_2px_10px_rgba(35,49,34,0.05)]"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              id="interactive-svg-map-wrapper"
            >
              
              {/* Actual Map Drawing */}
              <div 
                className="w-full h-full relative origin-center transition-transform duration-100 ease-out"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
                }}
              >
                {/* SVG Botanical Park Layout Map */}
                <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none pointer-events-none">
                  {/* Lakes & Waterways */}
                  <path d="M50 150 C200 120, 250 180, 420 150 C580 120, 680 160, 750 140 L800 200 L800 0 L0 0 Z" fill="#C4D0D9" opacity="0.6" />
                  <circle cx="200" cy="250" r="45" fill="#C4D0D9" opacity="0.8" />
                  <circle cx="580" cy="380" r="60" fill="#C4D0D9" opacity="0.8" />
                  
                  {/* Rivers linking lakes */}
                  <path d="M200 250 Q390 315 580 380" stroke="#C4D0D9" strokeWidth="24" fill="none" strokeLinecap="round" opacity="0.7" />

                  {/* Botanical Green Zones & Forests */}
                  <rect x="0" y="0" width="800" height="500" fill="none" />
                  {/* Large Forest Habitats */}
                  <path d="M 0,200 C 150,150 250,220 300,350 C 350,480 200,500 0,500 Z" fill="#6F8F5B" opacity="0.15" />
                  <path d="M 500,200 C 650,150 750,220 800,350 L 800,500 L 400,500 C 450,400 450,300 500,200 Z" fill="#6F8F5B" opacity="0.2" />
                  
                  {/* Main Walkways & Paths */}
                  <path d="M400,500 L400,400 C400,350 480,260 480,220 C480,180 400,100 400,80" stroke="#F6F1E8" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.9" />
                  {/* Ring walkway */}
                  <path d="M400,350 C250,350 120,280 120,200 C120,120 250,80 400,80 C550,80 680,120 680,200 C680,280 550,350 400,350 Z" stroke="#F6F1E8" strokeWidth="10" fill="none" opacity="0.9" />
                  {/* Secondary walkway */}
                  <path d="M120,200 L250,300 C300,320 500,320 550,300 L680,200" stroke="#F6F1E8" strokeWidth="8" fill="none" opacity="0.6" strokeDasharray="5,5" />

                  {/* Enclosure boundary lines (botanical editorial style) */}
                  <rect x="50" y="80" width="120" height="80" rx="15" fill="none" stroke="#233122" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <rect x="230" y="50" width="100" height="70" rx="15" fill="none" stroke="#233122" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <rect x="630" y="80" width="120" height="80" rx="15" fill="none" stroke="#233122" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <circle cx="200" cy="250" r="55" fill="none" stroke="#233122" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  <circle cx="580" cy="380" r="75" fill="none" stroke="#233122" strokeWidth="2" strokeDasharray="4,4" opacity="0.2" />
                  
                  {/* Direction Compass graphic */}
                  <g transform="translate(60, 430) scale(0.7)" opacity="0.4">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#233122" strokeWidth="2" />
                    <line x1="50" y1="10" x2="50" y2="90" stroke="#233122" strokeWidth="2" />
                    <line x1="10" y1="50" x2="90" y2="50" stroke="#233122" strokeWidth="2" />
                    <polygon points="50,15 45,50 50,45" fill="#D77A4A" />
                    <polygon points="50,85 45,50 50,45" fill="#233122" />
                    <text x="45" y="8" font-family="monospace" font-size="10" fill="#233122" font-weight="bold">N</text>
                  </g>
                </svg>

                {/* Markers Placed Over the Layout */}
                {markers.map((marker) => {
                  const isSelected = activeMarker?.id === marker.id;
                  return (
                    <button
                      key={marker.id}
                      onClick={(e) => handleMarkerClick(marker, e)}
                      style={{
                        left: `${marker.coordinates.x}%`,
                        top: `${marker.coordinates.y}%`
                      }}
                      className={getMarkerStyles(marker.type, isSelected)}
                      id={`map-marker-btn-${marker.id}`}
                    >
                      {getMarkerIcon(marker.type)}
                    </button>
                  );
                })}
              </div>

              {/* FLOATING MAP ZOOM & PAN CONTROLS */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-[#F6F1E8]/90 backdrop-blur-md border border-[#233122]/10 p-1.5 rounded-full shadow-lg z-30">
                <button
                  onClick={handleZoomIn}
                  className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <button
                  onClick={handleReset}
                  className="w-10 h-10 rounded-full hover:bg-[#E7F0E1] text-[#233122] flex items-center justify-center transition-colors min-h-[40px] min-w-[40px]"
                  title="Reset Map View"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              {/* FLOATING LEGEND ON DESKTOP */}
              <div className="hidden sm:flex absolute top-6 left-6 flex-wrap gap-2.5 max-w-[400px] bg-[#F6F1E8]/90 backdrop-blur-md border border-[#233122]/10 p-2.5 rounded-2xl shadow-md z-30 font-mono text-[10px]">
                <div className="flex items-center gap-1 bg-[#E7F0E1] text-[#4F6942] border border-[#6F8F5B]/20 px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-[#D77A4A]" />
                  <span>{t.legendAnimal}</span>
                </div>
                <div className="flex items-center gap-1 bg-[#233122] text-[#F6F1E8] px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-[#F6F1E8]" />
                  <span>{t.legendEntry}</span>
                </div>
                <div className="flex items-center gap-1 bg-[#6F8F5B] text-[#F6F1E8] px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>{t.legendCafe}</span>
                </div>
                <div className="flex items-center gap-1 bg-[#D77A4A] text-[#F6F1E8] px-2 py-1 rounded-md">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <span>{t.legendKids}</span>
                </div>
              </div>

            </div>
          </div>

          {/* ACTIVE MARKER SIDE DETAILS PANEL (MAP POPUP) - 4 cols on desktop */}
          <div className="lg:col-span-4 h-full flex flex-col justify-between">
            <div className="bg-[#E7F0E1] border border-[#233122]/10 rounded-[32px] p-6 shadow-sm min-h-[280px] lg:min-h-[380px] flex flex-col justify-between">
              
              {activeMarker ? (
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  {/* Category Type Badge */}
                  <span className="font-mono text-xs text-[#6F8F5B] uppercase tracking-wider block">
                    {activeMarker.type === "animal" ? t.legendAnimal : activeMarker.type}
                  </span>

                  {/* Marker Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#233122] leading-tight">
                    {activeMarker.name[lang]}
                  </h3>

                  {activeMarker.type === "animal" ? (
                    (() => {
                      const animalData = animals.find((a) => a.id === activeMarker.refId);
                      if (!animalData) return null;
                      return (
                        <div className="flex flex-col gap-4">
                          {/* Latin name */}
                          <p className="font-mono text-xs text-[#5E6B5C] italic">
                            {animalData.latinName}
                          </p>
                          {/* Biome */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold uppercase">{tFeatured.biomeLabel}:</span>
                            <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${animalData.biomeColor}`}>
                              {animalData.biome[lang]}
                            </span>
                          </div>
                          {/* Short description / fact */}
                          <p className="text-sm text-[#233122] leading-relaxed">
                            {animalData.shortFact[lang]}
                          </p>

                          {/* CTA to open detailed profile */}
                          <button
                            onClick={() => onSelectAnimal(animalData)}
                            className="mt-4 bg-[#D77A4A] hover:bg-[#c2673a] text-[#F6F1E8] px-6 py-3 rounded-[16px] font-semibold text-sm transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 shadow-md hover:scale-[0.98] min-h-[44px]"
                            id={`map-popup-detail-cta-${animalData.id}`}
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
                        id="map-popup-close-infrastructure-btn"
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
    </section>
  );
}

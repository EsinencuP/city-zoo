import React, { useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, MapPin, CheckCircle, QrCode, ArrowLeft, Clock3, Utensils } from "lucide-react";
import { Animal } from "../data/animals";
import { animalImages } from "../data/animalImages";
import { translations } from "../data/translations";
import { fadeUp, imageReveal, staggerContainer, staggerItem } from "../lib/motion";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Container from "../components/ui/Container";
import FloatingLeaves from "../components/decorative/FloatingLeaves";

interface AnimalDetailProps {
  animal: Animal | null;
  onBack: () => void;
  lang: "ru" | "ro" | "en";
}


export default function AnimalDetail({ animal, onBack, lang }: AnimalDetailProps) {
  const t = translations[lang].qrCard;
  const [activeTab, setActiveTab] = useState<"about" | "habitat">("about");

  if (!animal) {
    return (
      <Container className="py-16">
        <div className="mx-auto max-w-md rounded-[32px] bg-cream p-8 text-center shadow-soft-card">
          <h3 className="font-serif text-2xl font-semibold text-canopy">
            {lang === "ru" ? "Животное не найдено" : lang === "ro" ? "Animalul nu a fost găsit" : "Resident not found"}
          </h3>
          <Button onClick={onBack} className="mt-5">{lang === "ru" ? "Назад" : lang === "ro" ? "Înapoi" : "Go back"}</Button>
        </div>
      </Container>
    );
  }

  const image = animalImages[animal.id] || animalImages.tiger;
  const gallery = [image, image, image];

  return (
    <main className="relative overflow-hidden py-8 md:py-12">
      <FloatingLeaves count={2} />
      <Container>
        <button
          onClick={onBack}
          className="mb-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-mint/70 px-4 text-sm font-semibold text-canopy transition-[background-color,transform] duration-200 hover:bg-mint active:scale-[0.96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/20"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{lang === "ru" ? "Назад к жителям Zoo" : lang === "ro" ? "Înapoi la locatarii Zoo" : "Back to Zoo residents"}</span>
        </button>

        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <motion.div initial="hidden" animate="visible" variants={imageReveal} className="space-y-4">
            <div className="relative h-[360px] overflow-hidden rounded-[38px] bg-mint shadow-soft-card sm:h-[520px]">
              <img src={image} alt={animal.name[lang]} className="h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-canopy/82 via-canopy/10 to-transparent" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-canopy px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cream shadow-soft-card">
                <QrCode className="h-4 w-4 text-terracotta" />
                <span>{lang === "ru" ? "QR открыт" : lang === "ro" ? "QR deschis" : "QR open"}</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">{animal.latinName}</span>
                <h1 className="mt-2 font-serif text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-balance sm:text-6xl">{animal.name[lang]}</h1>
              </div>
            </div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-3 gap-3">
              {gallery.map((src, index) => (
                <motion.img
                  key={`${src}-${index}`}
                  variants={staggerItem}
                  src={src}
                  alt={`${animal.name[lang]} ${index + 1}`}
                  loading="lazy"
                  className="h-24 rounded-[22px] object-cover shadow-soft-card transition-transform duration-200 hover:scale-[1.03] sm:h-32"
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col gap-6">
            <motion.div variants={staggerItem} className="rounded-[34px] bg-cream/88 p-6 shadow-soft-card backdrop-blur-md sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ${animal.biomeColor}`}>{animal.biome[lang]}</span>
                <Badge className="bg-mint/80"><CheckCircle className="h-3.5 w-3.5" />{t.scannedTip}</Badge>
              </div>
              <p className="mt-5 text-base leading-8 text-moss text-pretty sm:text-lg">{animal.shortFact[lang]}</p>
            </motion.div>

            <motion.div variants={staggerItem} className="flex rounded-full bg-mint/65 p-1">
              <button onClick={() => setActiveTab("about")} className={["min-h-11 flex-1 rounded-full px-4 text-sm font-bold transition-[background-color,color] duration-200", activeTab === "about" ? "bg-canopy text-cream" : "text-moss hover:text-canopy"].join(" ")}>{t.tabAbout}</button>
              <button onClick={() => setActiveTab("habitat")} className={["min-h-11 flex-1 rounded-full px-4 text-sm font-bold transition-[background-color,color] duration-200", activeTab === "habitat" ? "bg-canopy text-cream" : "text-moss hover:text-canopy"].join(" ")}>{t.tabHabitat}</button>
            </motion.div>

            {activeTab === "about" ? (
              <motion.div key="about" variants={fadeUp} initial="hidden" animate="visible" className="space-y-5">
                <div className="rounded-[30px] bg-cream/88 p-6 text-base leading-8 text-moss shadow-soft-card text-pretty">{animal.description[lang]}</div>
                <div className="rounded-[28px] bg-terracotta/10 p-5 shadow-[inset_0_0_0_1px_rgba(216,121,73,0.24)]">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-terracotta" />
                    <div>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-terracotta">{t.warningTitle}</h4>
                      <p className="mt-2 text-sm leading-6 text-canopy">{animal.warning[lang]}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key="habitat" variants={fadeUp} initial="hidden" animate="visible" className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[30px] bg-mint p-6 shadow-soft-card">
                  <Clock3 className="h-6 w-6 text-terracotta" />
                  <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf">{t.feedingTimeTitle}</span>
                  <p className="mt-2 font-serif text-2xl font-semibold leading-tight text-canopy">{animal.feedingTime[lang]}</p>
                </div>
                <div className="rounded-[30px] bg-cream p-6 shadow-soft-card">
                  <MapPin className="h-6 w-6 text-terracotta" />
                  <span className="mt-4 block font-mono text-xs font-bold uppercase tracking-[0.18em] text-leaf">{t.rangeTitle}</span>
                  <p className="mt-2 text-sm font-semibold leading-6 text-canopy">{animal.range[lang]}</p>
                </div>
                <div className="rounded-[30px] bg-canopy p-6 text-cream shadow-soft-card sm:col-span-2">
                  <Utensils className="h-6 w-6 text-terracotta" />
                  <p className="mt-4 text-sm leading-6 text-cream/75 text-pretty">
                    {lang === "ru" ? "Наблюдайте кормление только с гостевой стороны вольера и не предлагайте животным свою еду." : lang === "ro" ? "Urmăriți hrănirea doar din zona vizitatorilor și nu oferiți animalelor mâncare proprie." : "Watch feeding only from the visitor side of the enclosure and never offer outside food."}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </main>
  );
}


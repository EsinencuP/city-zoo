import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Compass, MapPin, Clock, CreditCard, TreePine } from "lucide-react";
import { translations } from "../data/translations";
import { heroAnimalImage } from "../data/animalImages";
import { fadeUp, imageReveal, staggerContainer, staggerItem } from "../lib/motion";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Container from "./ui/Container";
import FloatingLeaves from "./decorative/FloatingLeaves";
import LeafCorner from "./decorative/LeafCorner";
import OrganicShape from "./decorative/OrganicShape";

interface HeroProps {
  lang: "ru" | "ro" | "en";
  onOpenTickets: () => void;
  onNavigate: (route: string) => void;
}


export default function Hero({ lang, onOpenTickets, onNavigate }: HeroProps) {
  const t = translations[lang].hero;

  const words = t.title.split(" ");
  const facts = [
    { icon: Clock, label: t.hoursLabel, value: t.hoursValue },
    { icon: MapPin, label: t.addressLabel, value: t.addressValue },
    { icon: CreditCard, label: t.priceLabel, value: t.priceValue }
  ];

  return (
    <section id="hero" className="relative isolate overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <FloatingLeaves count={4} />
      <LeafCorner className="-left-10 top-20 h-40 w-40" />
      <LeafCorner className="-right-8 bottom-20 h-48 w-48" mirrored />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(228,240,221,0.9),transparent_28rem),radial-gradient(circle_at_72%_16%,rgba(232,181,150,0.18),transparent_24rem)]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-14">
          <motion.div className="relative z-10 flex flex-col items-start" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div variants={staggerItem}>
              <Badge className="bg-mint/80 shadow-[inset_0_0_0_1px_rgba(37,55,33,0.08)]">
                <TreePine className="h-3.5 w-3.5" />
                <span>{lang === "ru" ? "Живой гид Zoo" : lang === "ro" ? "Ghid viu Zoo" : "Living Zoo guide"}</span>
              </Badge>
            </motion.div>

            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3rem,9vw,7.25rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-canopy text-balance">
              {words.map((word, index) => (
                <motion.span key={`${word}-${index}`} className="mr-[0.16em] inline-block" variants={fadeUp}>
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={staggerItem} className="mt-6 max-w-xl text-base leading-8 text-moss text-pretty sm:text-lg">
              {t.subtitle}
            </motion.p>

            <motion.div variants={staggerItem} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button onClick={onOpenTickets} className="px-7 py-3.5 text-base" id="hero-buy-ticket-cta">
                <span>{t.ctaPrimary}</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" onClick={() => onNavigate(`/${lang}/map`)} className="px-7 py-3.5 text-base" id="hero-plan-visit-cta">
                <Compass className="h-5 w-5 text-leaf" />
                <span>{t.ctaSecondary}</span>
              </Button>
            </motion.div>

            <motion.div variants={staggerContainer} className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {facts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <motion.div
                    key={fact.label}
                    variants={staggerItem}
                    className="rounded-[24px] bg-cream/78 p-4 shadow-soft-card backdrop-blur-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[15px] bg-mint text-leaf">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-moss">{fact.label}</span>
                    <span className="mt-1 block text-sm font-semibold leading-snug text-canopy tabular-nums">{fact.value}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div className="relative min-h-[390px] sm:min-h-[510px]" initial="hidden" animate="visible" variants={imageReveal}>
            <OrganicShape className="-right-6 top-5 -z-10 h-[82%] w-[92%] bg-mint shadow-botanical" />
            <div className="absolute left-0 top-10 z-10 max-w-[210px] rounded-[26px] bg-cream/88 p-4 shadow-soft-card backdrop-blur-md max-sm:hidden">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-leaf">{lang === "ru" ? "Маршрут" : lang === "ro" ? "Traseu" : "Route note"}</span>
              <p className="mt-2 text-sm font-semibold leading-snug text-canopy">
                {lang === "ru" ? "Маршрут начинается у главного входа Zoo." : lang === "ro" ? "Traseul începe la intrarea principală Zoo." : "Start the visit from Zoo main entrance."}
              </p>
            </div>
            <div className="relative ml-auto h-[390px] w-full max-w-[560px] overflow-hidden rounded-[44px] bg-mint shadow-[0_28px_80px_rgba(37,55,33,0.18)] sm:h-[510px] lg:rotate-[1.5deg]">
              <img
                src={heroAnimalImage}
                alt="Amur tiger in green habitat"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-canopy/82 via-canopy/12 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cream/72">{lang === "ru" ? "Житель Zoo" : lang === "ro" ? "Locuitor Zoo" : "Zoo resident"}</span>
                <h4 className="mt-1 font-serif text-3xl font-semibold tracking-[-0.03em]">{lang === "ru" ? "Амурский тигр" : lang === "ro" ? "Tigrul Siberian" : "Amur Tiger"}</h4>
                <p className="mt-1 font-mono text-xs text-mint">Panthera tigris altaica / {lang === "ru" ? "зона A" : lang === "ro" ? "zona A" : "Area A"}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


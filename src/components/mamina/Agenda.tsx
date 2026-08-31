import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight, Music2 } from "lucide-react";
import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";

const events = [
  {
    date: "Vie 28",
    title: "Andean Deep Room",
    artist: "DJ Residente Nala Ruiz + Percusión en vivo",
    img: e1,
    alt: "DJ residente en cabina bajo luces ámbar",
    tag: "Organic House",
  },
  {
    date: "Sáb 29",
    title: "Golden Sax & Beats",
    artist: "Live Sax · Marco Bellido",
    img: e2,
    alt: "Saxofonista en vivo bajo haz de luz dorada",
    tag: "Live Session",
  },
  {
    date: "Sáb 05",
    title: "Noche Obsidiana",
    artist: "Dress code total black · High Fashion",
    img: e3,
    alt: "Salón con atmósfera nocturna exclusiva",
    tag: "Noche Temática",
  },
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative border-b border-[#C9A86A]/15 bg-[#080808] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div className="flex items-center gap-2 text-[#C9A86A]">
              <Music2 className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="eyebrow">Nightlife & Sonido</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-white">
              Lineup{" "}
              <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                del mes
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Link to="/agenda" className="btn-secondary">
              <span>Ver Calendario</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 120}>
              <article className="luxury-card group relative overflow-hidden bg-[#121212]">
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={ev.img}
                    alt={ev.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="rounded-[1px] border border-[#C9A86A]/35 bg-[#080808]/90 px-2.5 py-0.5 text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold backdrop-blur-md">
                    {ev.tag}
                  </span>
                  <h3 className="mt-3 text-white text-xl font-display">{ev.title}</h3>
                  <p className="mt-1 text-xs text-[#D1D1CB]/70 font-light">{ev.artist}</p>

                  <div className="gold-rule my-4 opacity-30" />

                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[#E5C378]">{ev.date}</span>
                    <Link to="/reservas" className="btn-primary text-[9px] py-2 px-4">
                      <span>Asegurar Mesa</span>
                      <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

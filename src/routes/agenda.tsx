import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/mamina/PageHeader";
import { Reveal } from "@/components/mamina/Reveal";
import { Music2, Clock, ArrowRight, Sparkles } from "lucide-react";

import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Lineup y Noches Especiales — Mamina Restobar (Ayacucho)" },
      {
        name: "description",
        content:
          "Sesiones de Organic House, Live Sax, DJs residentes y noches temáticas en Mamina Restobar, Jr. José Olaya, Ayacucho.",
      },
    ],
  }),
  component: AgendaPage,
});

const EVENTS = [
  {
    id: "andean-deep",
    dateNumber: "28",
    dateMonth: "AGO",
    dayOfWeek: "Viernes",
    title: "Andean Deep Room",
    genre: "Organic House & Percusión en Vivo",
    artist: "DJ Residente Nala Ruiz + Marco Percussion",
    time: "22:30 — 03:30 hrs",
    description:
      "Una inmersión sonora que entrelaza bombos andinos, vientos ancestrales y texturas electrónicas profundas sobre nuestro sistema de audio acústicamente calibrado.",
    dressCode: "Smart Casual / All Black",
    special: "Cóctel de bienvenida Huamanga Velvet para reservas VIP antes de las 23:00",
    img: e1,
  },
  {
    id: "golden-sax",
    dateNumber: "29",
    dateMonth: "AGO",
    dayOfWeek: "Sábado",
    title: "Golden Sax & Beats",
    genre: "Live Saxophone & Melodic Lounge",
    artist: "Marco Bellido (Saxofón) + DJ Resident Guest",
    time: "22:00 — 03:00 hrs",
    description:
      "El brillo del saxofón en directo recorriendo las mesas VIP al ritmo de clásicos del soul y deep house contemporáneo bajo una atmósfera de luces ámbar.",
    dressCode: "Elegante Nocturno",
    special: "Apertura especial de Cava y ritual de Champagne",
    img: e2,
  },
  {
    id: "noche-obsidiana",
    dateNumber: "05",
    dateMonth: "SEP",
    dayOfWeek: "Sábado",
    title: "Noche Obsidiana: Monocromo & Alta Moda",
    genre: "Indie Dance & Tech Lounge",
    artist: "Lineup Secreto de Invitados de Lima",
    time: "21:30 — 03:30 hrs",
    description:
      "Nuestra noche temática insignia. Un despliegue de iluminación arquitectónica y sonido inmersivo donde el negro absoluto y los reflejos dorados son los protagonistas.",
    dressCode: "Total Black Obligatorio",
    special: "Shots de bienvenida macerados en muña y destilados de colección",
    img: e3,
  },
];

function AgendaPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Curaduría Acústica y Escena Nocturna"
        title="El Lineup"
        titleItalic="del Mes"
        description="Cada noche en Mamina tiene su propia identidad acústica: desde el compás sereno de la cena hasta las sesiones electrónicas y acústicas de alta noche en Ayacucho."
        breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "Agenda y Eventos" }]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Events Editorial Stack */}
        <div className="space-y-12">
          {EVENTS.map((ev) => (
            <Reveal key={ev.id} delay={100}>
              <div className="luxury-card overflow-hidden border border-[#C9A86A]/20 bg-[#121212] p-8 lg:p-10">
                <div className="grid items-center gap-8 lg:grid-cols-12">
                  {/* Date Column */}
                  <div className="flex items-center gap-6 border-b border-[#C9A86A]/15 pb-6 lg:col-span-2 lg:flex-col lg:items-start lg:border-r lg:border-b-0 lg:pb-0 lg:pr-6">
                    <span className="font-display text-5xl sm:text-6xl text-[#E5C378]">
                      {ev.dateNumber}
                    </span>
                    <div>
                      <span className="block text-[11px] tracking-[0.25em] text-[#C9A86A] uppercase font-semibold">
                        {ev.dateMonth}
                      </span>
                      <span className="text-xs text-[#7A7A75] uppercase tracking-wider">
                        {ev.dayOfWeek}
                      </span>
                    </div>
                  </div>

                  {/* Photo Column */}
                  <div className="relative aspect-16/9 overflow-hidden rounded-[1px] lg:col-span-4">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-[1px] border border-[#C9A86A]/40 bg-[#080808]/90 px-3 py-0.5 text-[9px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold backdrop-blur-md">
                      {ev.genre}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="space-y-4 lg:col-span-6">
                    <div>
                      <h3 className="text-white text-2xl font-display">{ev.title}</h3>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-[#D1D1CB]/70 font-light">
                        <span className="flex items-center gap-1.5 text-[#E5C378]">
                          <Music2 className="h-3.5 w-3.5" strokeWidth={1.5} />
                          {ev.artist}
                        </span>
                        <span className="flex items-center gap-1.5 text-[#7A7A75]">
                          <Clock className="h-3.5 w-3.5 text-[#C9A86A]" strokeWidth={1.5} />
                          {ev.time}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs leading-[1.7] text-[#D1D1CB]/80 font-light">
                      {ev.description}
                    </p>

                    <div className="grid gap-2 border-t border-[#C9A86A]/10 pt-4 text-[11px] sm:grid-cols-2">
                      <p className="text-[#7A7A75]">
                        <strong className="text-[#C9A86A] uppercase tracking-[0.2em] text-[9px] block font-semibold not-italic">
                          Código de Vestimenta:
                        </strong>
                        {ev.dressCode}
                      </p>
                      <p className="text-[#7A7A75]">
                        <strong className="text-[#C9A86A] uppercase tracking-[0.2em] text-[9px] block font-semibold not-italic">
                          Especial:
                        </strong>
                        {ev.special}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <Link to="/reservas" className="btn-primary">
                        <span>Asegurar Mesa VIP</span>
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Private Artist Booking Banner */}
        <div className="mt-24 rounded-[1px] border border-[#C9A86A]/20 bg-gradient-to-r from-[#121212] via-[#080808] to-[#121212] p-10 text-center backdrop-blur-xl">
          <div className="flex items-center justify-center gap-2 text-[#C9A86A]">
            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
            <span className="eyebrow">DJs y Artistas Invitados</span>
          </div>
          <h2 className="mt-3 text-white text-3xl sm:text-4xl font-display">
            Propuestas Musicales y Residencias
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-[1.7] text-[#7A7A75] font-light">
            ¿Eres artista, selector o deseas celebrar un evento con tu propio lineup musical en
            nuestras salas de Ayacucho?
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/reservas" className="btn-primary">
              <span>Contactar con Curaduría</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

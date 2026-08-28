import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import vip from "@/assets/zone-vip.jpg";
import bar from "@/assets/zone-bar.jpg";
import terraza from "@/assets/zone-terraza.jpg";
import cava from "@/assets/cava-1.jpg";

const ZONES_SHOWCASE = [
  {
    id: "vip",
    name: "Mesas VIP Alabastro",
    subtitle: "Piedra de Huamanga retroiluminada y terciopelo",
    capacity: "4 a 12 personas",
    img: vip,
    description:
      "Ubicadas en desnivel frente a la cabina del DJ. Frontis de alabastro ayacuchano con luz ámbar, sofás de terciopelo esmeralda y atención dedicada.",
    perks: ["Frontis de Piedra de Huamanga", "Anfitrión VIP dedicado", "Acceso prioritario"],
  },
  {
    id: "barra",
    name: "Barra de Filigrana y Granito",
    subtitle: "El epicentro de la coctelería y botánicos andinos",
    capacity: "1 a 4 personas",
    img: bar,
    description:
      "Una barra monolítica de 12 metros inspirada en la platería de Huamanga. El asiento predilecto para degustar creaciones de autor a la minuta.",
    perks: ["Conversación con el Head Bartender", "Cócteles fuera de carta", "Servicio en Riedel"],
  },
  {
    id: "terraza",
    name: "Terraza Sky Lounge",
    subtitle: "Brisa andina, boxes privados y cielo abierto",
    capacity: "6 a 16 personas",
    img: terraza,
    description:
      "Ambiente al aire libre en nuestro nivel superior con sillones modulares, calentadores de diseño y vista despejada al cielo nocturno de Ayacucho.",
    perks: ["Servicio de Shisha artesanal", "Box privado climatizado", "Vista al cielo nocturno"],
  },
  {
    id: "cava",
    name: "Salón Cava Privada",
    subtitle: "Máxima discreción rodeado de 400 etiquetas de colección",
    capacity: "8 a 22 personas",
    img: cava,
    description:
      "Santuario reservado con sommelier privado, menú degustación a medida y sistema de sonido acústicamente aislado para celebraciones íntimas.",
    perks: ["Sommelier privado", "Menú degustación 5 pasos", "Privacidad acústica total"],
  },
];

export function Zones() {
  const [activeZone, setActiveZone] = useState(ZONES_SHOWCASE[0]);

  return (
    <section
      id="zonas"
      className="relative border-b border-[#C9A86A]/15 bg-[#0D0D0D] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <div className="flex items-center gap-2 text-[#C9A86A]">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="eyebrow">Arquitectura & Salas</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-white">
              Nuestros{" "}
              <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                espacios
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Link to="/experiencias" className="btn-secondary">
              <span>Comparar Zonas y Servicios</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        {/* Large Architectural Split-Screen Showcase */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Interactive Zone Selector Tabs */}
          <div className="space-y-3 lg:col-span-5">
            {ZONES_SHOWCASE.map((z) => {
              const isSelected = activeZone.id === z.id;
              return (
                <button
                  key={z.id}
                  type="button"
                  onClick={() => setActiveZone(z)}
                  className={`w-full text-left p-6 border transition-all duration-400 cursor-pointer ${
                    isSelected
                      ? "border-[#C9A86A]/60 bg-[#121212] shadow-[0_4px_25px_rgba(0,0,0,0.8)] border-l-2 border-l-[#C9A86A]"
                      : "border-transparent bg-transparent hover:bg-[#121212]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`font-display text-xl ${
                        isSelected ? "text-[#E5C378]" : "text-white"
                      }`}
                    >
                      {z.name}
                    </h3>
                    <span className="text-[10px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold">
                      {z.capacity}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#D1D1CB]/70 font-light">{z.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Right: Immersive Zone Photo & Details Presentation */}
          <div className="lg:col-span-7">
            <Reveal key={activeZone.id} delay={50}>
              <div className="luxury-card overflow-hidden border border-[#C9A86A]/20 bg-[#121212]">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img
                    src={activeZone.img}
                    alt={activeZone.name}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-[1px] border border-[#C9A86A]/40 bg-[#080808]/85 px-3 py-1 text-[10px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold backdrop-blur-md">
                    {activeZone.capacity}
                  </span>
                </div>

                <div className="p-8 pt-4">
                  <h3 className="text-white text-2xl font-display">{activeZone.name}</h3>
                  <p className="mt-2 text-xs leading-[1.7] text-[#D1D1CB]/80 font-light">
                    {activeZone.description}
                  </p>

                  <div className="gold-rule my-5 opacity-30" />

                  <div className="flex flex-wrap gap-4 text-xs text-[#D1D1CB]/70 font-light">
                    {activeZone.perks.map((p) => (
                      <span key={p} className="flex items-center gap-1.5 text-[#E5C378]">
                        <Check className="h-3.5 w-3.5" strokeWidth={1.5} />
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#C9A86A]/10 flex items-center justify-between">
                    <Link to="/reservas" search={{ zone: activeZone.id }} className="btn-primary">
                      <span>Reservar {activeZone.name.split(" ")[0]}</span>
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </Link>

                    <Link
                      to="/experiencias"
                      className="text-[11px] tracking-[0.2em] text-[#7A7A75] uppercase hover:text-[#C9A86A] transition-colors"
                    >
                      Ver Especificaciones →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

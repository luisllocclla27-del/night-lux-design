import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Barra monolítica y cristalería de alta noche en Mamina Restobar"
          width={1920}
          height={1280}
          className="cinema-zoom h-full w-full object-cover grayscale-[10%] contrast-[112%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/65 to-[#080808]/40" />
        <div className="ambient-radial absolute inset-0 opacity-60" />
      </div>

      {/* Main Asymmetric Grid */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pt-36 pb-20 lg:px-10 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A86A]" />
              <span className="eyebrow text-[#E5C378]">Jr. José Olaya · Ayacucho, Perú</span>
            </div>

            <h1 className="mt-8 font-display text-white text-5xl sm:text-7xl lg:text-[5.5rem] tracking-[0.04em] leading-[0.95]">
              MAMINA
              <span className="block font-editorial italic font-normal text-gold-gradient text-4xl sm:text-6xl lg:text-[4.5rem] tracking-normal mt-2">
                alta noche y coctelería
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-[#D1D1CB] text-[15px] leading-[1.7] font-light">
              Un concepto nocturno independiente en el predio de Las Flores. Alquimia de botánicos
              andinos, robata al carbón binchotan y una atmósfera acústica diseñada para alargar la
              conversación.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link to="/reservas" className="btn-primary">
                <span>Reservar Mesa</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>

              <Link to="/carta" className="btn-secondary">
                <span>Explorar la Carta</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Live Night Status / Curated Live Capsule */}
          <div className="lg:col-span-4">
            <div className="glass-panel p-6 border border-[#C9A86A]/20 bg-[#121212]/80 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-[#C9A86A]/15 pb-4">
                <span className="eyebrow text-[9px] text-[#C9A86A]">Estado de Sala</span>
                <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-[#E5C378] uppercase font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A86A] animate-pulse" />
                  Puertas Abiertas
                </span>
              </div>

              <div className="mt-4 space-y-3.5 text-xs text-[#D1D1CB]/80">
                <div className="flex items-start justify-between">
                  <span className="text-[#7A7A75]">Horario Hoy:</span>
                  <span className="text-white font-medium">19:00 — 03:00 hrs</span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#7A7A75]">Sesión Sonora:</span>
                  <span className="text-[#E5C378] font-editorial italic text-sm">
                    Andean Deep & Organic Beats
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#7A7A75]">Ambiente:</span>
                  <span className="text-white font-medium">Luz ámbar · Cava activa</span>
                </div>
              </div>

              <div className="gold-rule my-4 opacity-30" />

              <div className="flex items-center justify-between text-[10px] tracking-[0.2em] text-[#7A7A75] uppercase">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3 text-[#C9A86A]" strokeWidth={1.5} />
                  Reserva Recomendada
                </span>
                <Link
                  to="/experiencias"
                  className="text-[#C9A86A] hover:text-[#E5C378] transition-colors font-semibold"
                >
                  Ver Zonas VIP →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

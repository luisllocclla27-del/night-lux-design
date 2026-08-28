import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight, MapPin } from "lucide-react";
import vibe1 from "@/assets/vibe-1.jpg";
import mix2 from "@/assets/mix-2.jpg";

export function ConceptSection() {
  return (
    <section className="relative border-b border-[#C9A86A]/15 bg-[#0D0D0D]/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          {/* Asymmetric Photo Composition */}
          <div className="relative lg:col-span-6">
            <Reveal>
              <div className="relative aspect-4/5 overflow-hidden rounded-[1px] border border-[#C9A86A]/15 shadow-2xl">
                <img
                  src={vibe1}
                  alt="Atmósfera y diseño interior en Mamina Restobar"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
              </div>

              {/* Floating secondary photo */}
              <div className="absolute -bottom-8 -right-6 hidden w-3/5 overflow-hidden rounded-[1px] border border-[#C9A86A]/30 shadow-[var(--shadow-deep)] sm:block">
                <img
                  src={mix2}
                  alt="Coctelería de autor y humo de madera noble"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial Content */}
          <div className="space-y-6 lg:col-span-6 lg:pl-4">
            <Reveal>
              <p className="eyebrow">Identidad y Origen</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl text-white">
                Un santuario nocturno{" "}
                <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                  en el corazón de Ayacucho
                </span>
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-[15px] leading-[1.7] text-[#D1D1CB] font-light">
                Ubicados en <strong>Jr. José Olaya</strong>, dentro del predio del Restaurante Las
                Flores pero operando con total independencia, Mamina nace como un punto de encuentro
                para quienes buscan alta coctelería, gastronomía de brasa y música refinada.
              </p>
              <p className="mt-4 text-[15px] leading-[1.7] text-[#D1D1CB] font-light">
                Nuestra propuesta rinde homenaje a los materiales y botánicos de la región: muros
                con textura de piedra de Huamanga, destilados infusionados con muña y molle, y
                cortes al carbón binchotan en una atmósfera íntima y cuidada al milímetro.
              </p>
            </Reveal>

            <div className="gold-rule my-6 opacity-30" />

            <Reveal delay={150}>
              <div className="flex items-center gap-3 text-xs tracking-[0.2em] text-[#C9A86A] uppercase font-semibold">
                <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span>Jr. José Olaya (Local Las Flores) · Ayacucho</span>
              </div>

              <div className="pt-6">
                <Link to="/el-concepto" className="btn-secondary">
                  <span>Conocer el Manifiesto</span>
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

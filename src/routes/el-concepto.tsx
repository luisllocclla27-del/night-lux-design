import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/mamina/PageHeader";
import { Reveal } from "@/components/mamina/Reveal";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";

import vibe1 from "@/assets/vibe-1.jpg";
import vibe4 from "@/assets/vibe-4.jpg";
import mix2 from "@/assets/mix-2.jpg";
import food2 from "@/assets/food-2.jpg";

export const Route = createFileRoute("/el-concepto")({
  head: () => ({
    meta: [
      { title: "El Concepto y Manifiesto — Mamina Restobar (Ayacucho)" },
      {
        name: "description",
        content:
          "Descubre la visión y la filosofía de Mamina Restobar: alta coctelería con botánicos andinos, arquitectura en alabastro de Huamanga y gastronomía de brasa en Jr. José Olaya, Ayacucho.",
      },
    ],
  }),
  component: ConceptoPage,
});

const PILLARS = [
  {
    number: "01",
    title: "Alquimia & Botánica Andina",
    subtitle: "Muña silvestre, molle de Huanta, cacao de Chungui y tunas de Cangallo",
    text: "Nuestra barra no utiliza jarabes industriales. Cada cóctel es el resultado de maceraciones lentas en frío, destilaciones al vacío y perfumes botánicos extraídos directamente de las alturas de Ayacucho.",
    img: mix2,
  },
  {
    number: "02",
    title: "Robata Grill & Fuego Noble",
    subtitle: "Carbón japonés Binchotan y madera de molle",
    text: "La brasa es el corazón de nuestra cocina. Cortes Wagyu MB5, truchas asalmonadas de aguas glaciares y piqueos nikkei sellados a más de 800 °C para lograr ese característico toque ahumado mineral.",
    img: food2,
  },
  {
    number: "03",
    title: "Arquitectura de Sombras y Alabastro",
    subtitle: "Piedra de Huamanga traslúcida y orfebrería de filigrana",
    text: "Inspirados en la tradición escultórica ayacuchana, creamos una atmósfera de luz ámbar envolvente. La Piedra de Huamanga cobra vida al ser retroiluminada, dialogando con terciopelos esmeralda y granito negro.",
    img: vibe1,
  },
  {
    number: "04",
    title: "Cultura Acústica y Alta Noche",
    subtitle: "Diseño sonoro calibrado para la conversación y la euforia",
    text: "En Mamina la música nunca compite con la conversación durante la cena, y cobra energía orgánica con el paso de las horas gracias a una cabina curada con Organic House, live sax y selectores residentes.",
    img: vibe4,
  },
];

function ConceptoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Manifiesto y Filosofía"
        title="El Concepto"
        titleItalic="de Mamina"
        description="Un homenaje contemporáneo a la noche ayacuchana: donde la materia noble, el fuego y la botánica de altura convergen en un santuario sensorial independiente."
        breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "El Concepto" }]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Quote Headline */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-[#C9A86A]">Nuestra Declaración</span>
            <blockquote className="mt-6 font-display text-2xl sm:text-3xl text-white leading-relaxed">
              "No creamos un bar para pasar el rato. Diseñamos un refugio donde la noche en Ayacucho
              se vive con la sofisticación, el enigma y la calidez que se merece."
            </blockquote>
            <p className="mt-4 text-xs text-[#E5C378] italic font-editorial">
              — Equipo Fundador, Mamina Restobar
            </p>
          </div>
        </Reveal>

        {/* Pillars of Luxury Spread */}
        <div className="mt-28 space-y-24">
          {PILLARS.map((p, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <Reveal key={p.number} delay={80}>
                <div
                  className={`grid items-center gap-12 lg:grid-cols-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Photo with Frame */}
                  <div
                    className={`overflow-hidden rounded-[1px] border border-[#C9A86A]/20 bg-[#121212] lg:col-span-6 ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className={`space-y-4 lg:col-span-6 ${isReversed ? "lg:order-1" : ""}`}>
                    <span className="font-display text-4xl sm:text-5xl text-[#C9A86A]/50">
                      {p.number}
                    </span>
                    <h3 className="font-display text-white text-3xl">{p.title}</h3>
                    <p className="text-xs text-[#E5C378] italic font-editorial">{p.subtitle}</p>
                    <div className="gold-rule my-4 opacity-30" />
                    <p className="text-[15px] leading-[1.7] text-[#D1D1CB]/80 font-light">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Independent Location & Hospitality Manifesto */}
        <div className="mt-28 rounded-[1px] border border-[#C9A86A]/20 bg-[#121212] p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 lg:col-span-8">
              <div className="flex items-center gap-2 text-[#C9A86A]">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                <span className="eyebrow">Localización Independiente</span>
              </div>
              <h3 className="text-white text-3xl font-display">
                Ubicados en Jr. José Olaya (Local Las Flores)
              </h3>
              <p className="text-xs leading-[1.7] text-[#D1D1CB]/80 font-light">
                Mamina opera con identidad, carta y gestión 100% independiente en el Jr. José Olaya.
                Un espacio diseñado desde cero para quienes buscan privacidad, alta gastronomía y
                coctelería de autor en Ayacucho.
              </p>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <Link to="/reservas" className="btn-primary">
                <span>Reservar una Mesa VIP</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/mamina/PageHeader";
import { Reveal } from "@/components/mamina/Reveal";
import { LightboxModal } from "@/components/mamina/LightboxModal";
import { Maximize2 } from "lucide-react";

import v1 from "@/assets/vibe-1.jpg";
import v2 from "@/assets/vibe-2.jpg";
import v3 from "@/assets/vibe-3.jpg";
import v4 from "@/assets/vibe-4.jpg";
import v5 from "@/assets/vibe-5.jpg";
import v6 from "@/assets/vibe-6.jpg";
import mix1 from "@/assets/mix-1.jpg";
import mix2 from "@/assets/mix-2.jpg";
import mix3 from "@/assets/mix-3.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import zoneBar from "@/assets/zone-bar.jpg";
import zoneVip from "@/assets/zone-vip.jpg";
import zoneTerraza from "@/assets/zone-terraza.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "The Vibe — Galería Editorial Mamina Restobar (Ayacucho)" },
      {
        name: "description",
        content:
          "Explora la atmósfera visual, iluminación, coctelería y detalles arquitectónicos de Mamina Restobar en Jr. José Olaya, Ayacucho.",
      },
    ],
  }),
  component: GaleriaPage,
});

type GalleryItem = {
  src: string;
  alt: string;
  category: "mixologia" | "ambiente" | "cocina" | "noche";
  title: string;
  aspect?: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: v1,
    alt: "Techo de listones y luces ámbar suspendidas sobre el salón central",
    category: "ambiente",
    title: "Arquitectura de Luces y Sombras",
  },
  {
    src: mix1,
    alt: "Cóctel Obsidiana servido en copa coupe sobre mármol negro",
    category: "mixologia",
    title: "Obsidiana Signature Cocktail",
  },
  {
    src: food2,
    alt: "Wagyu Robata MB5 sellado a la brasa con glaseado brillante",
    category: "cocina",
    title: "Robata Grill y Binchotan",
  },
  {
    src: zoneVip,
    alt: "Box VIP Velvet con sofás de terciopelo y botellería de autor",
    category: "ambiente",
    title: "Salón VIP Velvet Lounge",
  },
  {
    src: v2,
    alt: "Garnish milimétrico colocado con pinzas de plata",
    category: "mixologia",
    title: "El Detalle Alquímico",
  },
  {
    src: event2,
    alt: "Saxofonista en directo bajo haz de luz dorada",
    category: "noche",
    title: "Golden Sax Live Session",
  },
  {
    src: food1,
    alt: "Tiradito Nikkei de atún con caviar y brotes frescos",
    category: "cocina",
    title: "Tiradito Bluefin y Trufa",
  },
  {
    src: zoneBar,
    alt: "Barra iluminada de granito negro y repisas de destilados",
    category: "ambiente",
    title: "Barra Monolítica de 12 Metros",
  },
  {
    src: mix2,
    alt: "Ahumado en madera de cerezo para el cóctel Ámbar 1290",
    category: "mixologia",
    title: "Campana de Humo Aromático",
  },
  {
    src: v5,
    alt: "Brindis con copas de champagne en mesa privada",
    category: "noche",
    title: "Champagne Ritual VIP",
  },
  {
    src: zoneTerraza,
    alt: "Terraza al aire libre con vista y mesas climatizadas",
    category: "ambiente",
    title: "Terraza Sky Lounge",
  },
  {
    src: mix3,
    alt: "Cóctel Oro de Ica con lámina de oro de 24 quilates",
    category: "mixologia",
    title: "Oro de Ica 24k",
  },
  {
    src: v3,
    alt: "Cristalería Riedel pulida y luz de vela en mesa reservada",
    category: "ambiente",
    title: "Mise en Place Nocturno",
  },
  {
    src: event1,
    alt: "DJ residente mezclando en cabina de sonido inmersivo",
    category: "noche",
    title: "Deep Room Resident Beat",
  },
  {
    src: v4,
    alt: "Lámparas doradas satinadas reflejadas en cristal",
    category: "ambiente",
    title: "Destellos de Oro Satinado",
  },
  {
    src: v6,
    alt: "Humo y haces de luz cálida creando texturas en la oscuridad",
    category: "ambiente",
    title: "La Atmósfera Inmersiva",
  },
];

const CATEGORIES = [
  { id: "todos", label: "Todas las fotos" },
  { id: "mixologia", label: "Mixología" },
  { id: "ambiente", label: "Arquitectura y Salón" },
  { id: "cocina", label: "Cocina y Brasa" },
  { id: "noche", label: "Música y Noche" },
];

function GaleriaPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div>
      <PageHeader
        eyebrow="Atmósfera Visual y Estética"
        title="The Vibe"
        titleItalic="Gallery"
        description="Una mirada íntima al juego de texturas oscuras, reflejos dorados y la energía irrepetible de nuestras noches en Ayacucho."
        breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "The Vibe" }]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Category Filters with Unified Tones */}
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[#C9A86A]/15 pb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={activeCategory === cat.id ? "btn-tab-active" : "btn-tab-inactive"}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {filtered.map((item, idx) => (
            <Reveal key={item.title + idx} delay={(idx % 3) * 100}>
              <div
                onClick={() => setLightboxIndex(idx)}
                className="luxury-card group relative cursor-pointer overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover brightness-95 transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-[10px]">{item.category}</span>
                  <h3 className="mt-1 font-display text-xl text-white">{item.title}</h3>
                  <p className="text-[11px] text-[#D1D1CB]/70">{item.alt}</p>
                </div>

                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#C9A86A]/40 bg-[#080808]/80 text-[#C9A86A] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" strokeWidth={1.5} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          images={filtered}
          currentIndex={lightboxIndex ?? 0}
          onPrev={() =>
            setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filtered.length - 1))
          }
          onNext={() =>
            setLightboxIndex((prev) => (prev !== null && prev < filtered.length - 1 ? prev + 1 : 0))
          }
        />

        {/* CTA banner */}
        <div className="mt-20 border-t border-[#C9A86A]/15 pt-16 text-center">
          <p className="eyebrow">Sé parte de la noche</p>
          <h2 className="mt-4 text-white text-3xl sm:text-4xl">
            Reserva tu lugar en la atmósfera de Mamina
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/reservas" className="btn-primary">
              Reservar Mesa VIP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

import mix1 from "@/assets/mix-1.jpg";
import mix2 from "@/assets/mix-2.jpg";
import mix3 from "@/assets/mix-3.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import cava1 from "@/assets/cava-1.jpg";
import cava2 from "@/assets/cava-2.jpg";

type MenuItem = {
  id: string;
  name: string;
  category: "cocteleria" | "brasa" | "cava";
  price: string;
  subtitle: string;
  origin: string;
  notes: string;
  img: string;
};

const MENU_DATA: MenuItem[] = [
  {
    id: "huamanga-velvet",
    name: "Huamanga Velvet",
    category: "cocteleria",
    price: "S/ 48",
    subtitle: "Gin andino infusionado en muña negra silvestre",
    origin: "Botánicos de Huanta y Cangallo",
    notes: "Herbal fresco, cítrico balsámico y final seco aterciopelado.",
    img: mix1,
  },
  {
    id: "cacao-vraem",
    name: "Cacao VRAEM 70%",
    category: "cocteleria",
    price: "S/ 54",
    subtitle: "Mezcal artesanal, nibs de Chungui y humo de eucalipto",
    origin: "Cacao fino de aroma del VRAEM",
    notes: "Chocolate amargo tostado, caramelo quemado y humo andino.",
    img: mix2,
  },
  {
    id: "oro-huamanga",
    name: "Oro de Huamanga 24k",
    category: "cocteleria",
    price: "S/ 46",
    subtitle: "Pisco mosto verde, reducción de tuna roja y lámina de oro",
    origin: "Tuna roja de altura y pisco de guarda",
    notes: "Dulzor sedoso, acidez brillante y destellos de oro puro.",
    img: mix3,
  },
  {
    id: "tiradito-trucha",
    name: "Tiradito Trucha y Tumbo",
    category: "brasa",
    price: "S/ 68",
    subtitle: "Trucha asalmonada andina, leche de tigre de tumbo y quinua negra",
    origin: "Aguas frías andinas y trufa negra",
    notes: "Servido a 4 °C sobre piedra volcánica.",
    img: food1,
  },
  {
    id: "wagyu-molle",
    name: "Wagyu al Fuego de Molle",
    category: "brasa",
    price: "S/ 98",
    subtitle: "Cortes de Wagyu MB5 al carbón binchotan y chicha de jora",
    origin: "Leña de molle y carbón japonés",
    notes: "Sellado jugoso con notas ahumadas de leña noble.",
    img: food2,
  },
  {
    id: "single-malts",
    name: "Cava de Single Malts",
    category: "cava",
    price: "Desde S/ 85",
    subtitle: "Macallan 18, Hibiki Japanese Harmony y añadas de colección",
    origin: "Servicio en cristalería Riedel con diamante de hielo tallado",
    notes: "Servicio de alta etiqueta con agua de manantial andino.",
    img: cava1,
  },
  {
    id: "champagne-vip",
    name: "Ritual Champagne VIP",
    category: "cava",
    price: "Desde S/ 420",
    subtitle: "Dom Pérignon Vintage, Veuve Clicquot y cortejo de bengalas",
    origin: "Champagne de Reims, Francia",
    notes: "Presentación en mesa con hielera retroiluminada.",
    img: cava2,
  },
];

const CATEGORIES = [
  { id: "cocteleria", label: "Mixología de Autor" },
  { id: "brasa", label: "Cocina y Brasa" },
  { id: "cava", label: "Cava y Destilados" },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<"cocteleria" | "brasa" | "cava">(
    "cocteleria",
  );
  const [activeItem, setActiveItem] = useState<MenuItem>(MENU_DATA[0]);

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  return (
    <section
      id="carta"
      className="relative border-b border-[#C9A86A]/15 bg-[#080808] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div className="flex items-center gap-2 text-[#C9A86A]">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span className="eyebrow">Carta de Noche</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-white">
              Creaciones{" "}
              <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                y maridajes
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Link to="/carta" className="btn-secondary">
              <span>Ver Carta Completa</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap gap-4 border-b border-[#C9A86A]/15 pb-4">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    const nextCat = cat.id as "cocteleria" | "brasa" | "cava";
                    setActiveCategory(nextCat);
                    const firstInCat = MENU_DATA.find((m) => m.category === nextCat);
                    if (firstInCat) setActiveItem(firstInCat);
                  }}
                  className={`text-xs tracking-[0.2em] uppercase font-medium transition-all pb-3 relative cursor-pointer ${
                    isSelected
                      ? "text-[#E5C378] font-semibold"
                      : "text-[#7A7A75] hover:text-[#D1D1CB]"
                  }`}
                >
                  {cat.label}
                  {isSelected && (
                    <span className="absolute inset-x-0 -bottom-[17px] h-0.5 bg-[#C9A86A]" />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Editorial Interactive Split Layout (Awwwards Style) */}
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left: Interactive Menu Item List */}
          <div className="space-y-3 lg:col-span-7">
            {filteredItems.map((item) => {
              const isHovered = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                  className={`group relative cursor-pointer border-b border-[#C9A86A]/10 p-5 transition-all duration-300 ${
                    isHovered
                      ? "bg-[#121212]/90 border-l-2 border-l-[#C9A86A] pl-6"
                      : "bg-transparent hover:bg-[#121212]/40"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3
                      className={`font-display text-xl transition-colors ${
                        isHovered ? "text-[#E5C378]" : "text-white group-hover:text-[#E5C378]"
                      }`}
                    >
                      {item.name}
                    </h3>
                    <span className="text-xs font-semibold tracking-[0.15em] text-[#C9A86A]">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs text-[#D1D1CB]/70 font-light leading-[1.6]">
                    {item.subtitle}
                  </p>

                  <div className="mt-2 flex items-center gap-3 text-[10px] text-[#7A7A75] uppercase tracking-[0.18em]">
                    <span>{item.origin}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic High-End Showcase Card for Active Item */}
          <div className="lg:col-span-5">
            <Reveal key={activeItem.id} delay={50}>
              <div className="luxury-card overflow-hidden border border-[#C9A86A]/20 bg-[#121212]">
                <div className="relative aspect-4/3 overflow-hidden">
                  <img
                    src={activeItem.img}
                    alt={activeItem.name}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-[1px] border border-[#C9A86A]/40 bg-[#080808]/85 px-3 py-1 text-[10px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold backdrop-blur-md">
                    {activeItem.category}
                  </span>
                </div>

                <div className="p-7 pt-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-white text-2xl font-display">{activeItem.name}</h3>
                    <span className="text-sm font-semibold tracking-widest text-[#E5C378]">
                      {activeItem.price}
                    </span>
                  </div>

                  <div className="gold-rule my-4 opacity-40" />

                  <p className="text-xs text-[#E5C378] italic font-editorial leading-relaxed">
                    "{activeItem.notes}"
                  </p>

                  <p className="mt-3 text-xs leading-[1.6] text-[#D1D1CB]/80 font-light">
                    {activeItem.subtitle}. Insumos seleccionados y técnica de alta noche en
                    Ayacucho.
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#C9A86A]/10 flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-[#7A7A75] uppercase">
                      {activeItem.origin}
                    </span>
                    <Link
                      to="/reservas"
                      className="text-[11px] tracking-[0.2em] text-[#C9A86A] uppercase font-semibold hover:text-[#E5C378] transition-colors"
                    >
                      Probar en mesa →
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

import { useState } from "react";
import { Reveal } from "./Reveal";
import mix1 from "@/assets/mix-1.jpg";
import mix2 from "@/assets/mix-2.jpg";
import mix3 from "@/assets/mix-3.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import cava1 from "@/assets/cava-1.jpg";
import cava2 from "@/assets/cava-2.jpg";

type Item = {
  name: string;
  price: string;
  img: string;
  alt: string;
  ingredients: string;
  notes: string;
};

const tabs = [
  { id: "mixologia", label: "Mixología" },
  { id: "piqueos", label: "Piqueos Premium" },
  { id: "cava", label: "Cava & Destilados" },
] as const;

const data: Record<string, Item[]> = {
  mixologia: [
    {
      name: "Obsidiana",
      price: "S/ 48",
      img: mix1,
      alt: "Cóctel de autor Obsidiana en copa coupe con humo",
      ingredients: "Gin infusionado en cacao, vermut rosso, bitter de naranja sanguina",
      notes: "Notas: cacao tostado, cáscara cítrica, final seco y largo.",
    },
    {
      name: "Ámbar 1290",
      price: "S/ 52",
      img: mix2,
      alt: "Cóctel ahumado servido en vaso de cristal con hielo esférico",
      ingredients: "Mezcal espadín, licor de maracuyá, ahumado en madera de cerezo",
      notes: "Notas: humo dulce, fruta tropical, mineralidad final.",
    },
    {
      name: "Oro de Ica",
      price: "S/ 44",
      img: mix3,
      alt: "Cóctel de pisco con espuma cítrica y hoja de oro",
      ingredients: "Pisco quebranta, limón, clara sedosa, polvo de oro comestible",
      notes: "Notas: cítrico brillante, textura de terciopelo.",
    },
  ],
  piqueos: [
    {
      name: "Tiradito Nikkei",
      price: "S/ 62",
      img: food1,
      alt: "Tiradito de atún premium en plato negro",
      ingredients: "Atún de aleta amarilla, leche de tigre de yuzu, aceite de sacha inchi",
      notes: "Corte diario, servido a 4 °C sobre plato templado.",
    },
    {
      name: "Wagyu Robata",
      price: "S/ 96",
      img: food2,
      alt: "Brochetas de wagyu a la brasa sobre piedra negra",
      ingredients: "Wagyu MB5, sal de humo, glaseado de miso y kion",
      notes: "Brasa de carbón binchotan, punto sellado al momento.",
    },
    {
      name: "Causa de Cangrejo",
      price: "S/ 58",
      img: food1,
      alt: "Causa limeña con cangrejo en presentación fine dining",
      ingredients: "Cangrejo, papa amarilla, ají amarillo confitado, huacatay",
      notes: "Clásico limeño en clave de barra nocturna.",
    },
  ],
  cava: [
    {
      name: "Reserva de Malta",
      price: "S/ 78 / copa",
      img: cava1,
      alt: "Botellas y decantadores de whisky en estante retroiluminado",
      ingredients: "Selección de single malts 12, 18 y 25 años",
      notes: "Servicio con agua mineral y pipeta de dilución.",
    },
    {
      name: "Champagne Service",
      price: "Desde S/ 390",
      img: cava2,
      alt: "Botella de champagne en hielera con luces de bengala",
      ingredients: "Brut Nature, Rosé y Blanc de Blancs por botella",
      notes: "Presentación en mesa con bengala y copas Riedel.",
    },
    {
      name: "Vinos de Autor",
      price: "Desde S/ 145",
      img: cava1,
      alt: "Selección de vinos de autor en cava oscura",
      ingredients: "Etiquetas de guarda de Perú, Argentina y Ribera del Duero",
      notes: "Maridaje sugerido por nuestro sommelier residente.",
    },
  ],
};

export function Menu() {
  const [tab, setTab] = useState<string>("mixologia");
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="carta" className="ambient-radial relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Gastro-lounge</p>
          <h2 className="mt-6 max-w-2xl font-display text-5xl text-cream sm:text-6xl">
            Carta de autor <span className="text-gold-gradient italic">y coctelería</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap gap-8 border-b border-gold/15 pb-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setTab(t.id);
                  setOpen(null);
                }}
                className={`relative pb-3 text-xs tracking-[0.26em] uppercase transition-colors duration-400 ${
                  tab === t.id ? "text-gold" : "text-cream/45 hover:text-cream/80"
                }`}
              >
                {t.label}
                <span
                  className={`absolute inset-x-0 -bottom-[17px] h-px bg-gold transition-transform duration-500 ${
                    tab === t.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {data[tab]?.map((item, i) => {
            const key = `${tab}-${item.name}`;
            const isOpen = open === key;
            return (
              <Reveal key={key} delay={i * 120}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : key)}
                  className="glow-card group block w-full overflow-hidden rounded-sm border border-gold/15 bg-graphite/40 text-left"
                >
                  <div className="relative aspect-4/5 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
                  </div>
                  <div className="relative -mt-16 p-7">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-3xl text-cream">{item.name}</h3>
                      <span className="text-xs tracking-[0.2em] text-gold">{item.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-cream/55">
                      {item.ingredients}
                    </p>
                    <div
                      className="grid transition-all duration-700 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="gold-rule mt-5" />
                        <p className="pt-4 text-sm text-gold-soft/80 italic">{item.notes}</p>
                      </div>
                    </div>
                    <span className="mt-5 inline-block text-[10px] tracking-[0.3em] text-cream/35 uppercase">
                      {isOpen ? "Cerrar" : "Notas de cata"}
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import vip from "@/assets/zone-vip.jpg";
import bar from "@/assets/zone-bar.jpg";
import terraza from "@/assets/zone-terraza.jpg";

const zones = [
  {
    name: "Mesas VIP",
    img: vip,
    alt: "Box VIP con sofás de terciopelo y luz ámbar",
    capacity: "4 — 10 personas",
    perks: ["Anfitrión dedicado", "Botillería premium en mesa", "Ingreso preferente sin cola"],
  },
  {
    name: "Barra Principal",
    img: bar,
    alt: "Barra principal con muro de botellas retroiluminado",
    capacity: "1 — 6 personas",
    perks: ["Menú degustación de barra", "Conversación con el head bartender", "Servicio express"],
  },
  {
    name: "Terraza & Boxes",
    img: terraza,
    alt: "Terraza nocturna con boxes privados y vista a la ciudad",
    capacity: "6 — 16 personas",
    perks: ["Box privado al aire libre", "Servicio de shisha premium", "Vista a la ciudad"],
  },
];

export function Zones() {
  return (
    <section id="zonas" className="relative border-y border-gold/10 bg-graphite/30 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Experiencias exclusivas</p>
          <h2 className="mt-6 max-w-2xl font-display text-5xl text-cream sm:text-6xl">
            Elige tu <span className="text-gold-gradient italic">territorio</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {zones.map((z, i) => (
            <Reveal key={z.name} delay={i * 140}>
              <article className="glow-card overflow-hidden rounded-sm border border-gold/15 bg-obsidian/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={z.img}
                    alt={z.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-3xl text-cream">{z.name}</h3>
                    <span className="text-[10px] tracking-[0.25em] text-gold/70 uppercase">
                      {z.capacity}
                    </span>
                  </div>
                  <div className="gold-rule my-6" />
                  <ul className="space-y-3">
                    {z.perks.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-cream/55">
                        <span className="mt-2 h-px w-4 shrink-0 bg-gold/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reserva"
                    className="mt-8 inline-block text-xs tracking-[0.28em] text-gold uppercase transition-opacity duration-300 hover:opacity-70"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

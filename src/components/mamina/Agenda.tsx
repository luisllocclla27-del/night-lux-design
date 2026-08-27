import { Reveal } from "./Reveal";
import e1 from "@/assets/event-1.jpg";
import e2 from "@/assets/event-2.jpg";
import e3 from "@/assets/event-3.jpg";

const events = [
  {
    date: "Vie 28",
    title: "Deep Room",
    artist: "Resident DJ · Nala Ruiz",
    img: e1,
    alt: "DJ residente en cabina bajo luces ámbar",
    tag: "Deep House",
  },
  {
    date: "Sáb 29",
    title: "Golden Sax",
    artist: "Live set · Marco Bellido",
    img: e2,
    alt: "Saxofonista en vivo bajo un haz de luz dorada",
    tag: "Live Session",
  },
  {
    date: "Sáb 05",
    title: "Noche Obsidiana",
    artist: "Dress code total black",
    img: e3,
    alt: "Salón lleno bailando bajo luces cálidas",
    tag: "Themed Night",
  },
];

export function Agenda() {
  return (
    <section id="agenda" className="ambient-radial relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Nightlife lineup</p>
              <h2 className="mt-6 font-display text-5xl text-cream sm:text-6xl">
                Agenda <span className="text-gold-gradient italic">del mes</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm text-cream/45">
              Line-up rotativo de residentes y sesiones en vivo. Cupos limitados por noche.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((ev, i) => (
            <Reveal key={ev.title} delay={i * 130}>
              <article className="glow-card group relative overflow-hidden rounded-sm border border-gold/15">
                <img
                  src={ev.img}
                  alt={ev.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="eyebrow">{ev.tag}</span>
                  <h3 className="mt-4 font-display text-4xl text-cream">{ev.title}</h3>
                  <p className="mt-2 text-sm text-cream/55">{ev.artist}</p>
                  <div className="gold-rule my-6" />
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-gold">{ev.date}</span>
                    <a
                      href="#reserva"
                      className="rounded-full border border-gold/45 px-5 py-2.5 text-[10px] tracking-[0.24em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
                    >
                      Asegurar mesa
                    </a>
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

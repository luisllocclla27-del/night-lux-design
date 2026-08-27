import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bartender preparando coctelería de autor en la barra de Mamina Restobar"
          width={1920}
          height={1280}
          className="cinema-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/60 to-obsidian" />
        <div className="ambient-radial absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-40">
        <p className="eyebrow animate-fade-in">Restobar · Lounge · Coctelería de autor</p>
        <h1 className="mt-8 max-w-3xl font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
          La noche se sirve
          <span className="block text-gold-gradient italic">en copa de autor</span>
        </h1>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/60">
          Un salón oscuro, luz cálida y una barra que trabaja como cocina. Mixología de precisión,
          piqueos premium y música que nunca interrumpe la conversación.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#reserva"
            className="rounded-full border border-gold px-10 py-4 text-xs tracking-[0.28em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]"
          >
            Reservar experiencia
          </a>
          <a
            href="#carta"
            className="text-xs tracking-[0.28em] text-cream/60 uppercase transition-colors duration-300 hover:text-gold"
          >
            Ver la carta
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-10">
        <div className="gold-rule" />
        <div className="flex flex-wrap justify-between gap-6 pt-5 text-[10px] tracking-[0.3em] text-cream/40 uppercase">
          <span>Mar — Dom · 19:00 / 03:00</span>
          <span>Av. La Mar 1290, Lima</span>
          <span>Dress code: Smart elegant</span>
        </div>
      </div>
    </section>
  );
}

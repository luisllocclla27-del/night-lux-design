import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const links = [
  { href: "#carta", label: "Carta" },
  { href: "#zonas", label: "Zonas VIP" },
  { href: "#agenda", label: "Agenda" },
  { href: "#vibe", label: "The Vibe" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleAudio = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.volume = 0.25;
      void el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
        scrolled ? "glass-panel border-x-0 border-t-0 py-3" : "border-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="font-display text-2xl tracking-[0.3em] text-gold-gradient">
          MAMINA
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.28em] text-cream/70 uppercase transition-colors duration-300 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleAudio}
            aria-label={playing ? "Silenciar música ambiental" : "Reproducir música ambiental"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/25 text-gold/70 transition-all duration-300 hover:border-gold/60 hover:text-gold"
          >
            {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </button>
          <a
            href="#reserva"
            className="hidden rounded-full border border-gold/50 px-6 py-2.5 text-xs tracking-[0.24em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-glow)] sm:inline-block"
          >
            Reservar
          </a>
        </div>
      </nav>
      <audio ref={audioRef} loop preload="none" src="/audio/lounge.mp3" />
    </header>
  );
}

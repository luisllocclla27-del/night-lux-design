import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Volume2, VolumeX, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "La Carta" },
  { to: "/experiencias", label: "Experiencias VIP" },
  { to: "/agenda", label: "Agenda" },
  { to: "/el-concepto", label: "El Concepto" },
  { to: "/galeria", label: "The Vibe" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-700 ${
          scrolled
            ? "glass-panel border-x-0 border-t-0 py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)]"
            : "border-transparent bg-gradient-to-b from-[#070707]/90 via-[#070707]/40 to-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Brand Wordmark: MAMINA RESTOBAR */}
          <Link
            to="/"
            className="group flex flex-col font-display text-2xl tracking-[0.28em] text-white transition-all duration-300 hover:opacity-85"
          >
            <span className="text-gold-gradient font-medium">MAMINA</span>
            <span className="text-[8px] tracking-[0.48em] text-[#C9A86A] uppercase font-semibold transition-colors group-hover:text-white">
              RESTOBAR
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const isActive = currentPath === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative py-1 text-[11px] tracking-[0.22em] uppercase transition-all duration-300 ${
                    isActive
                      ? "text-[#E8D3A7] font-semibold"
                      : "text-[#CECBC4]/70 hover:text-white font-normal"
                  }`}
                >
                  {l.label}
                  {isActive && <span className="absolute inset-x-0 -bottom-1 h-px bg-[#C9A86A]" />}
                </Link>
              );
            })}
          </div>

          {/* Actions: Audio Equalizer Button and VIP Booking CTA */}
          <div className="flex items-center gap-3.5">
            {/* Ambient Sound Equalizer Toggle */}
            <button
              type="button"
              onClick={toggleAudio}
              title={playing ? "Silenciar ambiente sonoro" : "Activar ambiente sonoro"}
              aria-label={playing ? "Silenciar ambiente sonoro" : "Activar ambiente sonoro"}
              className={`flex items-center gap-2 px-3 h-8 rounded-[1px] border transition-all duration-300 cursor-pointer ${
                playing
                  ? "border-[#C9A86A] bg-[#C9A86A]/10 text-[#E5C378]"
                  : "border-white/15 text-[#CECBC4]/60 hover:border-[#C9A86A]/50 hover:text-white"
              }`}
            >
              {playing ? (
                <>
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 bg-[#E5C378] animate-[bounce_1s_infinite_100ms] h-full" />
                    <span className="w-0.5 bg-[#E5C378] animate-[bounce_1.2s_infinite_300ms] h-2/3" />
                    <span className="w-0.5 bg-[#E5C378] animate-[bounce_0.8s_infinite_200ms] h-4/5" />
                  </div>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-semibold hidden sm:inline">
                    Sound ON
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5" strokeWidth={1.5} />
                  <span className="text-[9px] tracking-[0.2em] uppercase hidden sm:inline">
                    Sound
                  </span>
                </>
              )}
            </button>

            {/* Refined Header Action */}
            <Link to="/reservas" className="btn-header hidden md:inline-flex">
              Reservar Mesa
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
              className="flex h-8 w-8 items-center justify-center rounded-[1px] border border-white/15 text-[#CECBC4] transition-colors hover:border-[#C9A86A] hover:text-white lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
        <audio ref={audioRef} loop preload="none" src="/audio/lounge.mp3" />
      </header>

      {/* Mobile Menu Glass Drawer */}
      <div
        className={`fixed inset-0 z-30 flex flex-col justify-between bg-[#070707]/95 px-8 pt-28 pb-10 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-6">
          <div className="flex flex-col font-display text-2xl tracking-[0.28em]">
            <span className="text-gold-gradient font-medium">MAMINA</span>
            <span className="text-[8px] tracking-[0.48em] text-[#C9A86A] uppercase font-semibold">
              RESTOBAR
            </span>
          </div>
          <nav className="flex flex-col space-y-4">
            {links.map((l) => {
              const isActive = currentPath === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`font-display text-2xl tracking-[0.1em] transition-colors ${
                    isActive ? "text-[#E5C378]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4 border-t border-[#C9A86A]/20 pt-6">
          <p className="text-xs text-[#7A7A75]">Jr. José Olaya (Local Las Flores) · Ayacucho</p>
          <Link to="/reservas" className="btn-primary w-full text-center">
            Reservar Experiencia VIP
          </Link>
        </div>
      </div>
    </>
  );
}

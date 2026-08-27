export function Footer() {
  return (
    <footer className="border-t border-gold/10 pt-20 pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="font-display text-4xl tracking-[0.28em] text-gold-gradient">MAMINA</p>
            <p className="mt-4 max-w-xs text-sm text-cream/45">
              Restobar de noche larga. Coctelería de autor, cocina de barra y música en vivo.
            </p>
          </div>
          <div className="space-y-2 text-sm text-cream/50">
            <p>Av. La Mar 1290, Miraflores · Lima</p>
            <p>+51 999 888 777 · concierge@mamina.pe</p>
            <p>Martes a domingo · 19:00 — 03:00</p>
          </div>
        </div>
        <div className="gold-rule my-10" />
        <p className="text-[10px] tracking-[0.3em] text-cream/30 uppercase">
          © {new Date().getFullYear()} Mamina Restobar
        </p>
      </div>
    </footer>
  );
}

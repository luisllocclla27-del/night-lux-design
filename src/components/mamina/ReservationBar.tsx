import { useState } from "react";

const zones = ["Mesa VIP", "Barra Principal", "Terraza / Box"];

export function ReservationBar() {
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("2");
  const [zone, setZone] = useState(zones[0]!);

  const message = encodeURIComponent(
    `Hola Mamina Concierge, quisiera reservar para el ${date || "(fecha)"} · ${people} personas · ${zone}.`,
  );

  return (
    <div
      id="reserva"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-3 sm:px-6 sm:pb-6"
    >
      <div className="glass-panel mx-auto flex max-w-5xl flex-wrap items-end gap-4 rounded-sm px-5 py-4 shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.9)] sm:px-7">
        <div className="hidden flex-col lg:flex">
          <span className="eyebrow">Reserva</span>
          <span className="font-display text-2xl text-cream">Concierge</span>
        </div>

        <label className="flex min-w-[9rem] flex-1 flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.26em] text-cream/45 uppercase">Fecha</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-b border-gold/25 bg-transparent pb-1.5 text-sm text-cream outline-none transition-colors focus:border-gold"
          />
        </label>

        <label className="flex w-24 flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.26em] text-cream/45 uppercase">Personas</span>
          <input
            type="number"
            min={1}
            max={30}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full border-b border-gold/25 bg-transparent pb-1.5 text-sm text-cream outline-none transition-colors focus:border-gold"
          />
        </label>

        <label className="flex min-w-[9rem] flex-1 flex-col gap-1.5">
          <span className="text-[10px] tracking-[0.26em] text-cream/45 uppercase">Zona</span>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="w-full border-b border-gold/25 bg-transparent pb-1.5 text-sm text-cream outline-none transition-colors focus:border-gold"
          >
            {zones.map((z) => (
              <option key={z} value={z} className="bg-graphite text-cream">
                {z}
              </option>
            ))}
          </select>
        </label>

        <a
          href={`https://wa.me/51999888777?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="w-full rounded-full border border-gold bg-gold/10 px-8 py-3 text-center text-xs tracking-[0.26em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:shadow-[var(--shadow-glow)] sm:w-auto"
        >
          Confirmar
        </a>
      </div>
    </div>
  );
}

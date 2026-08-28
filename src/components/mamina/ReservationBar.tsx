import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const zones = [
  { id: "vip", label: "Mesa VIP Alabastro" },
  { id: "barra", label: "Barra Central de Filigrana" },
  { id: "terraza", label: "Terraza Sky Box" },
  { id: "cava", label: "Salón Cava Privada" },
];

export function ReservationBar() {
  const navigate = useNavigate();
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  });
  const [people, setPeople] = useState("2");
  const [zone, setZone] = useState(zones[0].id);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    void navigate({
      to: "/reservas",
      search: {
        date,
        guests: people,
        zone,
      },
    });
  };

  return (
    <div id="reserva" className="fixed inset-x-0 bottom-0 z-30 px-3 pb-3 sm:px-6 sm:pb-6">
      <form
        onSubmit={handleReserve}
        className="glass-panel mx-auto flex max-w-5xl flex-wrap items-end gap-3.5 px-5 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.9)] sm:px-7"
      >
        <div className="hidden flex-col lg:flex pr-3 border-r border-[#C9A86A]/15">
          <span className="eyebrow text-[#C9A86A] text-[9px]">Reserva Rápida</span>
          <span className="font-display text-lg text-white tracking-wide">Mamina</span>
        </div>

        <label className="flex min-w-[8.5rem] flex-1 flex-col gap-1">
          <span className="text-[10px] tracking-[0.2em] text-[#7A7A75] uppercase font-medium">
            Fecha
          </span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border-b border-[#C9A86A]/25 bg-transparent pb-1 text-xs text-[#D1D1CB] outline-none transition-colors focus:border-[#C9A86A]"
          />
        </label>

        <label className="flex w-20 flex-col gap-1">
          <span className="text-[10px] tracking-[0.2em] text-[#7A7A75] uppercase font-medium">
            Personas
          </span>
          <input
            type="number"
            min={1}
            max={30}
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="w-full border-b border-[#C9A86A]/25 bg-transparent pb-1 text-xs text-[#D1D1CB] outline-none transition-colors focus:border-[#C9A86A]"
          />
        </label>

        <label className="flex min-w-[10rem] flex-1 flex-col gap-1">
          <span className="text-[10px] tracking-[0.2em] text-[#7A7A75] uppercase font-medium">
            Zona
          </span>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="w-full border-b border-[#C9A86A]/25 bg-transparent pb-1 text-xs text-[#D1D1CB] outline-none transition-colors focus:border-[#C9A86A]"
          >
            {zones.map((z) => (
              <option key={z.id} value={z.id} className="bg-[#121212] text-[#D1D1CB]">
                {z.label}
              </option>
            ))}
          </select>
        </label>

        <div className="w-full sm:w-auto">
          <button type="submit" className="btn-primary w-full sm:w-auto py-2.5 px-6 text-[10px]">
            <span>Reservar</span>
            <ArrowRight className="h-3 w-3 text-[#080808]" strokeWidth={2} />
          </button>
        </div>
      </form>
    </div>
  );
}

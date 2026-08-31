import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/mamina/PageHeader";
import { ReservationWizard } from "@/components/mamina/ReservationWizard";
import { Reveal } from "@/components/mamina/Reveal";
import { ShieldCheck, Clock, Shirt, Phone } from "lucide-react";

type ReservasSearch = {
  date?: string;
  guests?: string;
  zone?: string;
};

export const Route = createFileRoute("/reservas")({
  validateSearch: (search: Record<string, unknown>): ReservasSearch => ({
    date: typeof search.date === "string" ? search.date : undefined,
    guests: typeof search.guests === "string" ? search.guests : undefined,
    zone: typeof search.zone === "string" ? search.zone : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Reservaciones y Experiencias VIP — Mamina Restobar (Ayacucho)" },
      {
        name: "description",
        content:
          "Reserva tu mesa VIP, barra de autor o salón privado en Mamina Restobar, Jr. José Olaya, Ayacucho. Sistema de reserva directo y confirmación inmediata.",
      },
    ],
  }),
  component: ReservasPage,
});

const POLICIES = [
  {
    icon: Shirt,
    title: "Código de Vestimenta",
    desc: "Smart Casual / Elegant. Nos reservamos el derecho de admisión con prendas deportivas, gorras o calzado informal de playa.",
  },
  {
    icon: Clock,
    title: "Tolerancia de Mesa",
    desc: "Mantenemos tu reserva durante 15 minutos de cortesía a partir de la hora fijada. Agradecemos avisar en caso de retraso.",
  },
  {
    icon: ShieldCheck,
    title: "Privacidad y Confort",
    desc: "Ambiente cuidado con acústica y distribución pensadas para la comodidad, discreción y disfrute de cada grupo de invitados.",
  },
];

function ReservasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Sistema de Reservas"
        title="Reservaciones"
        titleItalic="VIP"
        description="Asegura tu lugar en nuestros salones, barra de autor o boxes privados en Ayacucho con confirmación y registro en sistema de sala."
        breadcrumbs={[{ label: "Inicio", to: "/" }, { label: "Reservaciones" }]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        {/* Wizard Form */}
        <Reveal>
          <ReservationWizard />
        </Reveal>

        {/* Policies and Guidelines */}
        <div className="mt-28 border-t border-[#C9A86A]/15 pt-20">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Políticas de la Casa</p>
              <h2 className="mt-3 text-white text-3xl sm:text-4xl">
                Lineamientos para una Noche Perfecta
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {POLICIES.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={idx * 120}>
                  <div className="luxury-card h-full p-8 text-center sm:text-left">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[2px] border border-[#C9A86A]/30 bg-[#C9A86A]/10 text-[#C9A86A] sm:mx-0">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 text-white">{p.title}</h3>
                    <p className="mt-3 text-xs leading-[1.6] text-[#D1D1CB]/70">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-20 rounded-[2px] border border-[#C9A86A]/20 bg-gradient-to-r from-[#080808] via-[#121212] to-[#080808] p-10 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="space-y-2 text-center lg:text-left">
              <span className="eyebrow text-[#C9A86A]">
                ¿Tienes requerimientos especiales o grupos grandes?
              </span>
              <h3 className="text-white text-2xl sm:text-3xl">
                Habla directamente con nuestro Equipo de Atención
              </h3>
              <p className="text-xs text-[#7A7A75]">
                Ubicados en Jr. José Olaya (Local Las Flores), Ayacucho. Atendemos solicitudes de
                descorche, cotizaciones de sala y eventos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/51999888777?text=Hola%20Mamina,%20tengo%20una%20consulta%20para%20un%20evento%20en%20Ayacucho"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Phone className="h-4 w-4 text-[#080808]" strokeWidth={1.5} />
                <span>+51 999 888 777</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

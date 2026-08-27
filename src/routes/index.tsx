import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/mamina/Nav";
import { Hero } from "@/components/mamina/Hero";
import { Menu } from "@/components/mamina/Menu";
import { Zones } from "@/components/mamina/Zones";
import { Agenda } from "@/components/mamina/Agenda";
import { Gallery } from "@/components/mamina/Gallery";
import { ReservationBar } from "@/components/mamina/ReservationBar";
import { Footer } from "@/components/mamina/Footer";
import { CursorGlow } from "@/components/mamina/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamina Restobar — Coctelería de autor y zonas VIP en Lima" },
      {
        name: "description",
        content:
          "Restobar nocturno en Miraflores: mixología de autor, piqueos premium, zonas VIP y line-up de DJs. Reserva tu experiencia.",
      },
      { property: "og:title", content: "Mamina Restobar — Lujo nocturno en Lima" },
      {
        property: "og:description",
        content: "Mixología de autor, cocina de barra, zonas VIP y música en vivo cada noche.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-obsidian">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Menu />
        <Zones />
        <Agenda />
        <Gallery />
      </main>
      <Footer />
      <ReservationBar />
    </div>
  );
}

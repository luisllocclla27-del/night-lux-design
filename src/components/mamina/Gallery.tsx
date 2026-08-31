import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";
import v1 from "@/assets/vibe-1.jpg";
import v2 from "@/assets/vibe-2.jpg";
import v3 from "@/assets/vibe-3.jpg";
import v4 from "@/assets/vibe-4.jpg";
import v5 from "@/assets/vibe-5.jpg";
import v6 from "@/assets/vibe-6.jpg";

const shots = [
  { src: v1, alt: "Techo de listones con luz cálida en el salón" },
  { src: v2, alt: "Manos decorando un cóctel con pinzas" },
  { src: v3, alt: "Mesa montada con velas y cristalería" },
  { src: v4, alt: "Lámparas colgantes doradas sobre la barra" },
  { src: v5, alt: "Brindis con copas de champagne en el lounge" },
  { src: v6, alt: "Humo y luz dorada en la oscuridad" },
];

export function Gallery() {
  return (
    <section id="vibe" className="py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow">V. The Vibe</p>
            <h2 className="mt-4 text-white">
              Detalles que se{" "}
              <span className="text-gold-gradient italic font-editorial font-normal tracking-normal lowercase first-letter:uppercase">
                recuerdan
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <Link
              to="/galeria"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#C9A86A] uppercase font-semibold transition-all duration-300 hover:gap-3 hover:text-[#E5C378]"
            >
              <span>Ver Galería Completa</span>
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={(i % 3) * 120}>
              <Link
                to="/galeria"
                className="luxury-card group block overflow-hidden rounded-[2px] border border-[#C9A86A]/12"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full object-cover brightness-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.05] group-hover:brightness-110"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

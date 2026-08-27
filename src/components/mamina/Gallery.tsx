import { Reveal } from "./Reveal";
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
    <section id="vibe" className="border-t border-gold/10 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">The vibe</p>
          <h2 className="mt-6 font-display text-5xl text-cream sm:text-6xl">
            Detalles que se <span className="text-gold-gradient italic">recuerdan</span>
          </h2>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {shots.map((s, i) => (
            <Reveal key={s.alt} delay={(i % 3) * 120}>
              <figure className="group overflow-hidden rounded-sm border border-gold/12">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full object-cover brightness-90 transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] group-hover:brightness-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

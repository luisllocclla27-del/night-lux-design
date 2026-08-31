import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; category?: string; title?: string }[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 p-4 backdrop-blur-2xl">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-graphite/60 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-primary-foreground"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation buttons */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-graphite/60 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-primary-foreground"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-graphite/60 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-primary-foreground"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-sm border border-gold/20">
        <img src={current.src} alt={current.alt} className="max-h-[80vh] w-auto object-contain" />
        {(current.title || current.category) && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent p-6 text-center">
            {current.category && (
              <span className="eyebrow block text-xs text-gold-soft">{current.category}</span>
            )}
            {current.title && (
              <p className="mt-1 font-display text-2xl text-cream">{current.title}</p>
            )}
            <p className="mt-1 text-xs text-cream/40">{current.alt}</p>
          </div>
        )}
      </div>
    </div>
  );
}

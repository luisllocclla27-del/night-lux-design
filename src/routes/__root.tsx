import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/mamina/Nav";
import { Footer } from "../components/mamina/Footer";
import { CursorGlow } from "../components/mamina/CursorGlow";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-display text-6xl text-cream">Página no encontrada</h1>
        <p className="mt-4 text-sm leading-relaxed text-cream/60">
          La experiencia o sala que buscas no existe o ha cambiado de ubicación.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-gold bg-gold/10 px-8 py-3 text-xs tracking-[0.25em] text-gold uppercase transition-all duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-obsidian px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Aviso</p>
        <h1 className="mt-4 font-display text-4xl text-cream">Interrupción en la experiencia</h1>
        <p className="mt-4 text-sm text-cream/60">Ocurrió un error inesperado al cargar la sala.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full border border-gold bg-gold px-6 py-2.5 text-xs tracking-widest text-primary-foreground uppercase"
          >
            Reintentar
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-gold/30 px-6 py-2.5 text-xs tracking-widest text-cream uppercase hover:border-gold"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mamina Restobar — Lujo nocturno y Coctelería de autor en Ayacucho" },
      {
        name: "description",
        content:
          "Mamina Restobar en Jr. José Olaya (Ayacucho): coctelería de autor, cocina de brasa, zonas VIP exclusivas y noches memorables.",
      },
      { name: "author", content: "Mamina Restobar" },
      { property: "og:title", content: "Mamina Restobar — Lujo nocturno en Ayacucho" },
      {
        property: "og:description",
        content:
          "Coctelería de autor, cocina nocturna y experiencias VIP en Jr. José Olaya, Ayacucho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&family=Montserrat:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-obsidian text-foreground selection:bg-gold/30 selection:text-gold-soft antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col justify-between bg-obsidian">
        <CursorGlow />
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </div>
    </QueryClientProvider>
  );
}

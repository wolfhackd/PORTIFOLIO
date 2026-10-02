import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type Dithered404Props = {
  eyebrow?: string;
  title?: string;
  description?: string;
  to?: string;
  linkLabel?: string;
};

export default function Dithered404({
  eyebrow = "ERRO / 404",
  title = "Página não encontrada",
  description = "O endereço pode estar incorreto ou a página não existe mais.",
  to = "/",
  linkLabel = "Voltar ao início",
}: Dithered404Props) {
  return (
    <main className="relative isolate flex min-h-svh overflow-hidden bg-[#d4d4d4] px-6 py-8 text-black sm:px-10 sm:py-10 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, #171717 1px, transparent 1.2px)",
          backgroundSize: "7px 7px",
          maskImage:
            "linear-gradient(135deg, transparent 8%, black 45%, transparent 88%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-12">
        <p className="w-fit bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
          {eyebrow}
        </p>

        <div className="grid items-center gap-8 pb-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <span
            aria-hidden="true"
            className="select-none font-display text-[11rem] leading-[0.72] text-transparent sm:text-[16rem] md:text-[21rem] lg:text-[26rem]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #111 1.25px, transparent 1.55px)",
              backgroundSize: "5px 5px",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            404
          </span>

          <section className="max-w-md border-t-2 border-black pt-5">
            <h1 className="font-display text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-black/70 sm:text-lg">
              {description}
            </p>
            <Link
              to={to}
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-black uppercase tracking-[0.12em] transition-colors hover:border-[#F5E642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-4 transition-transform group-hover:-translate-x-1"
              />
              {linkLabel}
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
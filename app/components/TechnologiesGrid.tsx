import { list as TechnologyList } from "~/data/technology"; 

export default function TechnologiesGrid() {
  return (
    <section className="w-full bg-transparent text-black">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 border-t-2 border-black pt-6">
          <p className="mb-3 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
            Ferramentas
          </p>
          <h2 className="font-display text-5xl leading-[0.9] sm:text-6xl">
            ARSENAL TÉCNICO
          </h2>
          <p className="mt-3 text-sm font-bold text-black/55">
            Tecnologias que eu uso no meu dia a dia.
          </p>
        </div>

        <div className="grid max-h-96 cursor-all-scroll grid-cols-2 gap-px overflow-y-auto bg-black/20 scrollbar-hidden sm:grid-cols-3 md:grid-cols-4">

          {TechnologyList.map(({ name, icon }) => (
            <div
            key={name}
            className="flex flex-col items-center justify-center gap-3 bg-[#d4d4d4] px-4 py-8 transition-colors hover:bg-[#F5E642]"
            >
              <img
                src={`https://cdn.simpleicons.org/${icon}`}
                alt={name}
                className="mb-2 size-10 transition-all md:size-12"
                title={name}
              />
              <span className="text-xs font-bold text-black/65">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )}
import { list as TechnologyList } from "~/data/technology"; 

export default function TecnologiesGrid() {
  return (
    <section className="flex w-full items-center justify-center bg-background px-6 py-12 text-foreground">
      <div className="w-full max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight">
            Arsenal Técnico
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tecnologias que eu uso no meu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3 md:grid-cols-4 scroll-auto overflow-y-auto max-h-96 scrollbar-hide">
          {TechnologyList.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center gap-3 bg-card px-4 py-8"
            >
              {/* <Icon
                className="size-8 text-muted-foreground"
                aria-hidden="true"
              /> */}
              <img
                src={`https://cdn.simpleicons.org/${icon}`}
                alt={name}
                className="size-10 md:size-12 mb-2 filter hover:brightness-150 transition-all"
                title={name}
              />
              <span className="text-xs font-medium text-muted-foreground">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
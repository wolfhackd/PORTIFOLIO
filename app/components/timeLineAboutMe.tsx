import {motion} from "motion/react";
import { Badge } from "~/components/ui/badge"
import { cn } from "~/lib/utils"

const events: {
  year: string
  title: string
  copy: string
  tag: string
}[] = [
  {
    year: "2023",
    title: "O primeiro contato",
    copy: "Desenvolvi meu primeiro site em HTML e CSS, foi quando decidi seguir carreira como desenvolvedor, comecei a estudar programação por conta própria usando plataformas como Udemy e Youtube.",
    tag: "Origem",
  },
  {
    year: "2023",
    title: "Primeira escolha",
    copy: "Mergulhei profundamente na programação e me apaixonei pelo desenvolvimento de software, especialmente pelo back-end. Iniciei o curso de Análise e Desenvolvimento de Sistemas na UNINASSAU, onde ampliei meus conhecimentos e explorei diferentes áreas da tecnologia.",
    tag: "Estudos",
  },
  {
    year: "2025",
    title: "Um novo começo",
    copy: "Concluí minha formação em Análise e Desenvolvimento de Sistemas. Desde então, venho aprimorando minhas habilidades, aprofundando meus conhecimentos em desenvolvimento back-end e buscando transformar meus projetos e estudos em experiência profissional.",
    tag: "Concretizado",
  },
  {
    year: "2026",
    title: "Construindo o próximo passo",
    copy: "Hoje, continuo evoluindo como desenvolvedor, criando projetos próprios e aprofundando meus conhecimentos em desenvolvimento de software. Meu objetivo é transformar cada projeto em uma oportunidade de aprender, experimentar e construir soluções cada vez melhores.",
    tag: "Atual",
    },
]
export const TimeLineAboutMe = () =>{
    return (
            
            <div className="mx-auto w-full max-w-3xl text-white">
                <div className="mb-14 text-center">
                <Badge variant="outline" className="mb-4 text-white">
                    Minha história
                </Badge>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-cyan-400">
                    Três anos em desenvolvimento
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-muted-foreground font-bold">
                    Um pouco do meu caminho
                </p> 
                </div>

                <ol className="relative flex flex-col gap-12" >
                <span
                    className="absolute top-2 bottom-2 left-3 w-px bg-border md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                />

                {/* Tentar fazer linha principal descer de acordo com scroll acho que fica mais legal */}

                {events.map((event, i) => {
                    const right = i % 2 === 1
                    return (
                    <li
                        className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-12"
                    >
                        {/* Node dot on the spine */}
                        <span
                        className="absolute top-1.5 left-3 z-10 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"
                        aria-hidden="true"
                        />

                        <div
                        className={cn(
                            "pl-10 md:pl-0",
                            right
                            ? "md:col-start-2 md:pl-12 md:text-left"
                            : "md:col-start-1 md:pr-12 md:text-right"
                        )}
                        >
                        <div
                            className={cn(
                            "flex flex-wrap items-center gap-2.5",
                            !right && "md:justify-end"
                            )}
                        >
                            <span className="font-mono text-sm font-semibold tabular-nums">
                            {event.year}
                            </span>
                            <Badge variant="secondary">{event.tag}</Badge>
                        </div>
                        <h3 className="mt-2 font-heading text-base font-semibold">
                            {event.title}
                        </h3>
                        <p className="mt-1.5 text-sm/relaxed text-muted-foreground">
                            {event.copy}
                        </p>
                        </div>
                    </li>
                    )
                })}
                </ol>
            </div>
        )     
}
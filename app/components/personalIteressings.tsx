import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { BookOpen, Dumbbell, Lightbulb, Music2 } from "lucide-react"

const features = [
  {
    icon: Music2,
    title: "Músicas para Programar",
    copy: "Sou fã de música eletrônica, lo-fi, rock e clássicas para manter o foco durante as sessões de desenvolvimento.",
  },
  {
    icon: Dumbbell,
    title: "Esportes & Calistenia",
    copy: "Pratico calistenia e diversos outros esportes para manter a mente e o corpo em equilíbrio.",
  },
  {
    icon: BookOpen,
    title: "Leitura & Desenvolvimento Pessoal",
    copy: "Leio livros de autoajuda e biografias para entender a mentalidade de grandes CEOs e líderes.",
  },
  {
    icon: Lightbulb,
    title: "Inovação & Empreendedorismo",
    copy: "Tenho interesse em criar soluções inovadoras e explorar novas oportunidades no mercado de tecnologia.",
  },
]

export default function FeaturesBlock() {
  return (
    <section className="w-full bg-[#d4d4d4] px-6 py-20 text-black sm:px-12 sm:py-24 md:px-16 lg:px-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 border-t-2 border-black pt-6 sm:mb-12">
          <p className="mb-3 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
            Fora do código
          </p>
          <h2 className="font-display text-5xl leading-[0.9] sm:text-6xl">
            INTERESSES PESSOAIS
          </h2>
          <p className="mt-3 font-bold text-black/55">
            As coisas que me fazem ser quem eu sou.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="h-full rounded-none border-2 border-black bg-white p-6 shadow-[4px_4px_0_#F5E642]">
              <CardHeader className="p-0">
                <span className="flex size-11 items-center justify-center border-2 border-black bg-[#F5E642]">
                  <Icon className="size-5 text-black" aria-hidden="true" />
                </span>
                <CardTitle className="mt-4 text-base font-semibold text-black">
                  {title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-black/65">
                  {copy}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

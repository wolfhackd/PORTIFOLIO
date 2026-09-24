import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Flashlight, ShieldCheck, LayoutGrid, ChartBar, LineChart, Settings } from "lucide-react"

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string }

const features = [
  {
    icon: (p: IconProps) => (
      <Flashlight {...p} />
    ),
    title: "Músicas para Programar",
    copy: "Sou fã de música eletrônica, lo-fi, rock e clássicas para manter o foco durante as sessões de desenvolvimento.",
  },
  {
    icon: (p: IconProps) => (
      <ShieldCheck {...p} />
    ),
    title: "Esportes & Calistenia",
    copy: "Pratico calistenia e diversos outros esportes para manter a mente e o corpo em equilíbrio.",
  },
  {
    icon: (p: IconProps) => (
      <LayoutGrid {...p} />
    ),
    title: "Leitura & Desenvolvimento Pessoal",
    copy: "Leio livros de autoajuda e biografias para entender a mentalidade de grandes CEOs e líderes.",
  },
  {
    icon: (p: IconProps) => (
      <ChartBar {...p} />
    ),
    title: "Inovação & Empreendedorismo",
    copy: "Tenho interesse em criar soluções inovadoras e explorar novas oportunidades no mercado de tecnologia.",
  },
]

export default function FeaturesBlock() {
  return (
    <section className="flex w-full items-center justify-center bg-transparent px-6 py-16 text-foreground">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl text-cyan-400">
            Interesses Pessoais
          </h2>
          <p className="mt-3 text-muted-foreground font-bold">
            As coisas que me fazem ser quem eu sou.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
          {features.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="p-6 bg-[#101828]">
              <CardHeader className="p-0">
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-muted">
                  <Icon className="size-5 text-cyan-400" aria-hidden="true" />
                </span>
                <CardTitle className="mt-4 text-base font-semibold text-white">
                  {title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-white">
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

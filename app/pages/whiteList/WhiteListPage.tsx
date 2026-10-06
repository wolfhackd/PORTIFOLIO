import { Check, Compass, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import FooterSection from '~/components/footerSection';
import MenubarHome from '~/components/menubarHome';

const categories = [
  {
    title: 'Explorar o mundo',
    description: 'Lugares e aventuras para sair da rotina.',
    icon: Compass,
    items: [
      { id: 'canada', title: 'Conhecer o Canadá', completed: false },
      { id: 'japao', title: 'Conhecer o Japão durante a primavera', completed: false },
      { id: 'aurora', title: 'Ver a aurora boreal de perto', completed: false },
      { id: 'road-trip', title: 'Fazer uma road trip sem roteiro fechado', completed: false },
      { id: 'passport', title: 'Tirar o passaporte', completed: false },
    ],
  },
  {
    title: 'Viver novas experiências',
    description: 'Momentos que merecem virar boas histórias.',
    icon: Sparkles,
    items: [
      { id: 'show', title: 'Andar de snowboard', completed: false },
      { id: 'trilha', title: 'Conquistar uma trilha com uma vista incrível', completed: false },
      { id: 'empresa', title: 'Abrir uma empresa', completed: false },
      { id: 'livros', title: 'Ler 12 livros em um ano', completed: false },
      { id: 'hacktoon', title: 'Participar de uma hackathon', completed: false },
    ],
  },
  {
    title: 'Aprender e construir',
    description: 'Desafios para continuar crescendo.',
    icon: GraduationCap,
    items: [
      { id: 'idioma', title: 'Aprender inglês', completed: false },
      { id: 'open-source', title: 'Contribuir com um projeto open source', completed: false },
      { id: 'projeto-pessoal', title: 'Tirar uma ideia pessoal do papel', completed: false },
      { id: 'voluntariado', title: 'Participar de uma ação voluntária', completed: false },
      { id: 'emprego', title: 'Conseguir meu primeiro emprego de desenvolvedor', completed: false },
    ],
  },
];

const allItems = categories.flatMap(({ items }) => items);
const totalItems = allItems.length;
const completedCount = allItems.filter(({ completed }) => completed).length;

const WhiteListPage = () => {
  const progress = Math.round((completedCount / totalItems) * 100);

  return (
    <>
      <MenubarHome adaptive />
      <main className="relative min-h-screen overflow-hidden bg-[#d4d4d4] px-6 pb-24 pt-32 text-black sm:px-12 sm:pb-28 sm:pt-36 md:px-16 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end"
          >
            <div>
              <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
                Planos para a vida
              </p>
              <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.82]">
                BUCKET
                <br />
                LIST
              </h1>
            </div>
            <p className="max-w-xl border-t-2 border-black pt-5 text-base leading-relaxed text-black/70 sm:text-lg">
              Uma lista de experiências, lugares e desafios que quero viver. Cada pequena
              realização também merece ser celebrada.
            </p>
          </motion.header>

          <section
            aria-label="Progresso da Bucket List"
            className="mt-12 border-y-2 border-black py-5 sm:mt-16 sm:flex sm:items-center sm:justify-between sm:gap-8"
          >
            <div className="flex items-baseline justify-between gap-4 sm:justify-start">
              <p className="text-sm font-black uppercase tracking-[0.12em]">Meu progresso</p>
              <p className="font-display text-3xl">
                {completedCount} <span className="text-black/45">/ {totalItems}</span>
              </p>
            </div>
            <div className="mt-4 h-2 w-full bg-black/10 sm:mt-0 sm:max-w-md">
              <div
                className="h-full bg-[#F5E642] transition-[width] duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-right text-xs font-bold text-black/60 sm:mt-0">
              {progress}% realizado
            </p>
          </section>

          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {categories.map(({ title, description, icon: Icon, items }, categoryIndex) => (
              <motion.section
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.15 }}
                aria-labelledby={`bucket-category-${categoryIndex}`}
                className="border-t-2 border-black pt-5"
              >
                <div className="flex items-center gap-3">
                  <Icon className="size-5" aria-hidden="true" />
                  <h2
                    id={`bucket-category-${categoryIndex}`}
                    className="font-display text-3xl leading-none"
                  >
                    {title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{description}</p>

                <ul className="mt-6">
                  {items.map(({ id, title: itemTitle, completed }) => {
                    return (
                      <li key={id} className="border-t border-black/20">
                        <div className="flex items-start gap-3 py-4">
                          <span
                            role="img"
                            aria-label={completed ? 'Concluído' : 'Pendente'}
                            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center border border-black ${
                              completed ? 'bg-[#F5E642]' : ''
                            }`}
                          >
                            {completed && <Check className="size-4" aria-hidden="true" />}
                          </span>
                          <span
                            className={`text-sm leading-relaxed ${
                              completed ? 'text-black/50 line-through' : 'text-black'
                            }`}
                          >
                            {itemTitle}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.section>
            ))}
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default WhiteListPage;

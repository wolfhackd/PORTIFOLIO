import { useEffect, useState } from 'react';
import { Check, Compass, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import FooterSection from '~/components/footerSection';
import MenubarHome from '~/components/menubarHome';

const STORAGE_KEY = 'bucket-list-completed';

const categories = [
  {
    title: 'Explorar o mundo',
    description: 'Lugares e aventuras para sair da rotina.',
    icon: Compass,
    items: [
      { id: 'japao', title: 'Conhecer o Japão durante a primavera' },
      { id: 'aurora', title: 'Ver a aurora boreal de perto' },
      { id: 'road-trip', title: 'Fazer uma road trip sem roteiro fechado' },
      { id: 'mergulho', title: 'Fazer um mergulho em mar aberto' },
    ],
  },
  {
    title: 'Viver novas experiências',
    description: 'Momentos que merecem virar boas histórias.',
    icon: Sparkles,
    items: [
      { id: 'show', title: 'Assistir ao show de uma banda favorita' },
      { id: 'trilha', title: 'Conquistar uma trilha com uma vista incrível' },
      { id: 'cozinhar', title: 'Aprender a preparar um prato de outro país' },
      { id: 'livros', title: 'Ler 12 livros em um ano' },
    ],
  },
  {
    title: 'Aprender e construir',
    description: 'Desafios para continuar crescendo.',
    icon: GraduationCap,
    items: [
      { id: 'idioma', title: 'Aprender o básico de um novo idioma' },
      { id: 'open-source', title: 'Contribuir com um projeto open source' },
      { id: 'projeto-pessoal', title: 'Tirar uma ideia pessoal do papel' },
      { id: 'voluntariado', title: 'Participar de uma ação voluntária' },
    ],
  },
];

const allItemIds = new Set(categories.flatMap(({ items }) => items.map(({ id }) => id)));
const totalItems = allItemIds.size;

const WhiteListPage = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(() => new Set());
  const [storageReady, setStorageReady] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    try {
      const savedItems = window.localStorage.getItem(STORAGE_KEY);
      if (savedItems) {
        const parsedItems: unknown = JSON.parse(savedItems);
        if (!Array.isArray(parsedItems) || !parsedItems.every((item) => typeof item === 'string')) {
          throw new Error('Invalid bucket list data');
        }
        setCompletedItems(new Set(parsedItems.filter((item) => allItemIds.has(item))));
      }
      setStorageReady(true);
    } catch {
      setStorageError(true);
    }
  }, []);

  useEffect(() => {
    if (!storageReady) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedItems]));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }, [completedItems, storageReady]);

  const toggleItem = (id: string) => {
    setCompletedItems((currentItems) => {
      const nextItems = new Set(currentItems);
      if (nextItems.has(id)) {
        nextItems.delete(id);
      } else {
        nextItems.add(id);
      }
      return nextItems;
    });
  };

  const progress = Math.round((completedItems.size / totalItems) * 100);

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
                {completedItems.size} <span className="text-black/45">/ {totalItems}</span>
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

          {storageError && (
            <p role="status" className="mt-4 text-sm text-black/70">
              Não foi possível salvar o progresso neste navegador. Suas marcações podem não
              permanecer após fechar a página.
            </p>
          )}

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
                  {items.map(({ id, title: itemTitle }) => {
                    const isCompleted = completedItems.has(id);

                    return (
                      <li key={id} className="border-t border-black/20">
                        <button
                          type="button"
                          aria-pressed={isCompleted}
                          onClick={() => toggleItem(id)}
                          className="flex w-full items-start gap-3 py-4 text-left transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-0.5 flex size-5 shrink-0 items-center justify-center border border-black ${
                              isCompleted ? 'bg-[#F5E642]' : ''
                            }`}
                          >
                            {isCompleted && <Check className="size-4" />}
                          </span>
                          <span
                            className={`text-sm leading-relaxed ${
                              isCompleted ? 'text-black/50 line-through' : 'text-black'
                            }`}
                          >
                            {itemTitle}
                          </span>
                        </button>
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

import { useEffect, useState } from 'react';
import { cn } from '~/lib/utils';

const sections = [
  { id: 'hero', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const;

export default function SectionDots() {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.4, 0.6],
        rootMargin: '-15% 0px -35% 0px',
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const isLight = activeId === 'hero';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Navegação das seções"
      className="pointer-events-none fixed top-1/2 right-3 z-[4000] flex -translate-y-1/2 sm:right-6 lg:right-8"
    >
      <ul className="pointer-events-auto flex flex-col items-center gap-3">
        {sections.map((section) => {
          const isActive = activeId === section.id;

          return (
            <li key={section.id} className="group relative flex items-center">
              <span
                className={cn(
                  'pointer-events-none absolute right-6 rounded-sm px-2 py-1 text-[10px] font-bold tracking-[0.16em] uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                  isLight ? 'bg-black text-white' : 'bg-[#F5E642] text-black',
                )}
              >
                {section.label}
              </span>
              <button
                type="button"
                aria-label={`Ir para ${section.label}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => scrollTo(section.id)}
                className="flex size-5 cursor-pointer items-center justify-center"
              >
                <span
                  className={cn(
                    'rounded-full transition-all duration-300',
                    isActive
                      ? cn('size-3', isLight ? 'bg-black' : 'bg-[#F5E642]')
                      : cn(
                          'size-2.5 border-2 bg-transparent',
                          isLight ? 'border-black/70' : 'border-white/70',
                        ),
                  )}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

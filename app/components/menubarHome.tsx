import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { MenuModal } from './menuModal';
import { cn } from '~/lib/utils';

type MenubarHomeProps = {
  adaptive?: boolean;
};

const MenubarHome = ({ adaptive = false }: MenubarHomeProps) => {
  const [onLight, setOnLight] = useState(true);

  // useEffect(() => {
  //   if (!adaptive) return;

  //   const sectionIds = ['hero', 'sobre', 'tecnologias', 'projetos', 'contato'];
  //   const sections = sectionIds
  //     .map((id) => document.getElementById(id))
  //     .filter((section): section is HTMLElement => Boolean(section));
  //   if (sections.length === 0) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const activeSection = entries.find((entry) => entry.isIntersecting);
  //       if (activeSection) {
  //         setOnLight(activeSection.target.id !== 'contato');
  //       }
  //     },
  //     { threshold: 0, rootMargin: '-45% 0px -45% 0px' },
  //   );

  //   sections.forEach((section) => observer.observe(section));
  //   return () => observer.disconnect();
  // }, [adaptive]);

  const linkClass = cn(
    'inline-flex min-h-10 items-center px-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E642]',
    onLight ? 'text-black hover:bg-[#F5E642]' : 'text-white hover:bg-[#F5E642] hover:text-black',
  );

  return (
    <div
      className={cn(
        'fixed inset-x-0 top-0 z-5000 px-4 pt-4 transition-colors duration-300 sm:px-6',
      )}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-6xl items-center justify-between border-2 px-2 py-2 shadow-[4px_4px_0_#F5E642] backdrop-blur-md transition-colors duration-300',
          onLight ? 'border-black bg-[#d4d4d4]/95 text-black' : 'border-white/35 bg-black/95 text-white',
        )}
      >
        <nav aria-label="Navegação principal" className="hidden items-center gap-1 sm:flex">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <Link to="/sobre" className={linkClass}>
            Sobre
          </Link>
          <Link to="/projetos" className={linkClass}>
            Projetos
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <Link
            to="/inProgress"
            className="inline-flex min-h-10 items-center bg-[#F5E642] px-3 text-sm font-black text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5E642]"
          >
            Fale comigo
          </Link>
          <MenuModal iconClassName="text-current" />
        </div>
      </div>
    </div>
  );
};

export default MenubarHome;
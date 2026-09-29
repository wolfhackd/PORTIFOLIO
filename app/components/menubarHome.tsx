import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { MenuModal } from './menuModal';
import { cn } from '~/lib/utils';

type MenubarHomeProps = {
  adaptive?: boolean;
};

const MenubarHome = ({ adaptive = false }: MenubarHomeProps) => {
  const [onLight, setOnLight] = useState(adaptive);

  useEffect(() => {
    if (!adaptive) return;

    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOnLight(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: [0.2, 0.35, 0.5] },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [adaptive]);

  const linkClass = cn(
    'font-bold rounded-full cursor-pointer',
    onLight
      ? 'text-black hover:bg-black hover:text-white'
      : 'text-white hover:bg-[#EEF4ED] hover:text-black',
  );

  return (
    <div
      className={cn(
        'fixed z-5000 flex w-full justify-between p-4 transition-colors duration-300',
        onLight ? 'bg-transparent' : 'from-gray-900 via-gray-800 to-transparent backdrop-blur-sm',
      )}
    >
      <nav className="self-center p-0">
        <Link to="/">
          <Button variant="link" className={linkClass}>
            Home
          </Button>
        </Link>
        <Link to="/sobre">
          <Button variant="link" className={linkClass}>
            Sobre
          </Button>
        </Link>
        <Link to="/projetos">
          <Button variant="link" className={linkClass}>
            Projetos
          </Button>
        </Link>
        <Link to="/InProgress">
          <Button
            variant="link"
            className={cn(
              'rounded-full font-bold cursor-pointer',
              onLight
                ? 'bg-[#F5E642] text-black hover:bg-black hover:text-[#F5E642]'
                : 'bg-[#8DA9C4] text-black hover:bg-[#EEF4ED]',
            )}
          >
            Fale Comigo
          </Button>
        </Link>
      </nav>
      <MenuModal iconClassName={onLight ? 'text-black' : 'text-[#EEF4ED]'} />
    </div>
  );
};

export default MenubarHome;
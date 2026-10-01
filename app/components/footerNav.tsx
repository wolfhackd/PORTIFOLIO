import { motion } from 'motion/react';
import { Link } from 'react-router';

interface FooterNavProps {
  title: string;
  links: { name: string; href: string }[];
}

const FooterNav = ({ title, links }: FooterNavProps) => {
  return (
    <div>
      <h3 className="mb-4 border-t border-[#F5E642] pt-3 text-xs font-black uppercase tracking-[0.16em] text-[#F5E642]">
        {title}
      </h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <motion.li
            key={`${link.name}-${link.href}`}
            whileHover="hover"
            initial="initial"
            className="w-fit"
          >
            <Link
              to={link.href}
              className="group relative inline-flex py-0.5 text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.name}
              <motion.span
                aria-hidden="true"
                className="absolute bottom-0 left-0 block h-px bg-[#F5E642]"
                variants={{
                  initial: { width: 0 },
                  hover: { width: '100%' },
                }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
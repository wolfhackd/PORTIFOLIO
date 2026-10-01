import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleLink } from './../../utils/handleLink';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';

export const AboutMe = () => {
  return (
    <section id="sobre" className="relative w-full overflow-hidden bg-[#d4d4d4] py-24 text-black sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
      />
      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 sm:px-12 md:grid-cols-[0.8fr_1.2fr] md:items-start md:px-16 lg:px-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div>
          <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.2em]">
            Sobre mim
          </p>
          <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.82] tracking-tight">
            CURIOSO
            <br />
            POR NATUREZA
          </h2>
        </div>

        <div className="max-w-2xl border-t-2 border-black pt-5 text-base leading-relaxed sm:text-lg">
          <p>
            Eu sou <span className="font-bold">Mauro Leal</span>, desenvolvedor full-stack apaixonado
            por criar soluções digitais. Do front-end ao back-end, meu foco é resolver problemas
            complexos com código limpo e eficiente.
          </p>
          <p className="mt-5 text-black/60">
            Quando não estou trabalhando, estou explorando novas ideias e saciando minha curiosidade.
          </p>

          <blockquote className="mt-8 border-l-4 border-black bg-[#F5E642] px-4 py-3 text-sm font-semibold italic">
            “O presente é deles, mas o futuro é nosso.” — Nikola Tesla
          </blockquote>

          <div className="mt-8 flex gap-5 border-t border-black/30 pt-5 text-xl">
          <HoverCard>
            <HoverCardTrigger
              className="cursor-pointer transition-transform hover:-translate-y-1"
              onClick={() => handleLink('https://www.linkedin.com/in/mauro-leal-b1134425a/')}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </HoverCardTrigger>
            <HoverCardContent side="top" className="z-4000 w-fit text-center">
              LinkedIn
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              className="cursor-pointer transition-transform hover:-translate-y-1"
              onClick={() => handleLink('https://github.com/wolfhackd')}
            >
              <FontAwesomeIcon icon={faGithub} />
            </HoverCardTrigger>
            <HoverCardContent side="top" className="z-4000 w-fit text-center">
              Github
            </HoverCardContent>
          </HoverCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
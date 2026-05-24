import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleLink } from './../../utils/handleLink';
import { StarsBackground } from './components/stars-background';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '~/components/ui/hover-card';

export const AboutMe = () => {
  return (
    <section className="w-full flex justify-center py-20 bg-transparent relative poppins-regular">
      <motion.div
        className="max-w-3xl text-center px-auto space-y-6 z-4000"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <p className="text-sm uppercase tracking-[3px] text-[#8DA9C4]">Sobre Mim</p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
          Desenvolvedor Full-Stack e um curioso
        </h2>

        <p className="text-[#8DA9C4] leading-relaxed">
          Eu sou <span className="font-semibold text-white">Mauro Leal</span>, apaixonado por criar
          soluções digitais. Do front-end ao back-end, meu foco é resolver problemas complexos com
          código limpo e eficiente. Sempre buscando a evolução para ser um profissional melhor.
        </p>

        <p className="text-gray-400 italic">
          Quando não estou trabalhando, estou explorando novas ideias e saciando minha curiosidade.
        </p>

        <blockquote className="text-[#0B2545] text-sm italic border-l-4 border-[#134074] pl-4 bg-[#8DA9C4]">
          "O presente é deles, mas o futuro é nosso." — Nikola Tesla
        </blockquote>

        <div className="flex justify-center gap-6 z-4000 text-white">
          <HoverCard>
            <HoverCardTrigger
              className="cursor-pointer"
              onClick={() => handleLink('https://www.linkedin.com/in/mauro-leal-b1134425a/')}
            >
              {/* <Linkedin /> */}
              <FontAwesomeIcon icon={faLinkedin} />
            </HoverCardTrigger>
            <HoverCardContent side="top" className="text-center w-fit z-4000">
              LinkedIn
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger
              className="cursor-pointer"
              onClick={() => handleLink('https://github.com/wolfhackd')}
            >
              {/* <Github /> */}
              <FontAwesomeIcon icon={faGithub} />
            </HoverCardTrigger>
            <HoverCardContent side="top" className="text-center w-fit  z-4000">
              Github
            </HoverCardContent>
          </HoverCard>
        </div>
      </motion.div>
      <StarsBackground className="absolute" />
      <StarsBackground className="absolute" />
      <StarsBackground className="absolute" />
    </section>
  );
};
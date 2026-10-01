import FooterNav from "./footerNav";
import { motion } from 'motion/react';

const FooterSection = () => {
  const geralLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Projetos', href: '/projetos' },
  ];
  const aboutMe = [
    { name: 'Tecnologias', href: '/#tecnologias' },
    { name: 'Experiência', href: '/' },
  ];
  const letMeTalk = [
    { name: 'Contato', href: '/#contato' },
    { name: 'Redes Sociais', href: '/#sobre' },
  ];

  return (
    <footer id="contato" className="relative w-full overflow-hidden bg-black text-[#d4d4d4]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 sm:px-12 sm:py-20 md:px-16 lg:px-24">
        <div className="grid gap-12 border-b border-white/20 pb-12 md:grid-cols-[1fr_1.5fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start"
            >
              <p className="mb-5 inline-block w-fit bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.2em] text-black">
                Fim da página
              </p>
              <h2 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.82] text-white">
                MAURO LEAL
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
                Desenvolvedor full stack, criando experiências digitais do conceito à entrega.
              </p>
            </motion.div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FooterNav title="Geral" links={geralLinks} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FooterNav title="Sobre mim" links={aboutMe} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FooterNav title="Navegue" links={letMeTalk} />
            </motion.div>
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-5 pt-6 text-xs sm:flex-row sm:items-center"
        >
            <p className="text-white/50">
              © {new Date().getFullYear()} Mauro Leal
            </p>
            <div className="flex flex-wrap items-center gap-1 text-white/50">
              <span>Desenvolvido por</span>
              <a
                href="https://www.instagram.com/mauroo_leal/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#F5E642] transition-colors hover:text-white"
              >
                @Mauroo_Leal
              </a>
            </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;
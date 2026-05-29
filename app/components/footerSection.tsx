import FooterNav from "./footerNav";
import { motion } from 'motion/react';

const FooterSection = () => {
  const geralLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Projetos', href: '/projetos' },
  ];
  const aboutMe = [
    { name: 'Tecnologias', href: '/' },
    { name: 'Experiência', href: '/' },
  ];
  const letMeTalk = [
    { name: 'Contato', href: '/contato' },
    { name: 'Redes Sociais', href: '/' },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#0f1b2e] via-[#13315C] to-[#0a1428] text-[#EEF4ED] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2B7FFF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2B7FFF] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-[#2B7FFF]/20">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col justify-start"
            >
              <p className="text-2xl font-bold bg-gradient-to-r from-[#2B7FFF] to-[#EEF4ED] bg-clip-text text-transparent mb-2">
                Mauro Leal
              </p>
              <p className="text-sm text-[#EEF4ED]/60">
                Desenvolvedor Full Stack | Criativo & Inovador
              </p>
            </motion.div>

            {/* Navigation sections */}
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
              <FooterNav title="Sobre Mim" links={aboutMe} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FooterNav title="Vamos Conversar" links={letMeTalk} />
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#EEF4ED]/60">Feito com</span>
              <span className="text-lg">❤️</span>
              <span className="text-[#EEF4ED]/60">por</span>
              <a
                href="https://www.instagram.com/mauroo_leal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2B7FFF] font-semibold hover:text-[#EEF4ED] transition-colors duration-300"
              >
                @Mauroo_Leal
              </a>
            </div>
            <p className="text-xs text-[#EEF4ED]/40">
              © 2025 • Desenvolvido com React, TypeScript & Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
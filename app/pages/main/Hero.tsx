import { motion } from 'motion/react';
import ContactMe from '~/components/contactMe';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh w-full overflow-hidden bg-[#d4d4d4] text-black"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
      />  

      <div className="relative z-10 flex w-full flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-[92vw]">
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.82] tracking-tight"
          >
            EU
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.4rem,7vw,5.5rem)] leading-[0.82] tracking-tight"
          >
            SOU
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-1 text-[clamp(3.2rem,13vw,11rem)] leading-[0.82] tracking-tight"
          >
            MAURO LEAL
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="mt-5 flex flex-wrap items-stretch"
          >
            <span className="bg-black px-2.5 py-1 text-[0.7rem] font-black tracking-[0.18em] text-white sm:text-sm">
              SOFTWARE
            </span>
             
            <span className="bg-[#F5E642] px-2.5 py-1 text-[0.7rem] font-black tracking-[0.18em] text-black sm:text-sm">
              DEVELOPMENT
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.55, ease: 'easeOut' }}
            className="mt-10"
          >
            <ContactMe variant="editorial" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

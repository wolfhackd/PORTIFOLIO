import { motion } from 'motion/react';
import { list as TechnologyList } from '../../data/technology';

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative overflow-hidden bg-[#d4d4d4] py-24 text-black sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-12 md:px-16 lg:px-24"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.2em]">
              Stack / 01
            </p>
            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.82]">
              TECNOLOGIAS
            </h2>
          </div>
          <p className="max-w-xl border-t-2 border-black pt-5 text-base leading-relaxed text-black/70 sm:text-lg">
            Ferramentas e linguagens que fazem parte do meu dia a dia como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4">
          {TechnologyList.map((tech) => (
            <div
              key={tech.id}
              className="group flex min-h-16 items-center gap-3 border-t border-black/25 py-4 transition-colors hover:bg-[#F5E642] sm:gap-4"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech.icon}`}
                alt=""
                loading="lazy"
                className="size-6 shrink-0 sm:size-7"
              />
              <span className="text-sm font-semibold sm:text-base">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
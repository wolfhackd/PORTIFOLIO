import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

import { list as ProjectList } from '~/data/projects';
import { ImageCloud } from '~/service/ImageCloud';

export function ProjectsSection() {
  const TopProjects = ProjectList.slice(0, 3);

  return (
    <motion.section
      id="projetos"
      className="relative overflow-hidden bg-[#d4d4d4] py-24 text-black sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[72px_72px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-12 md:px-16 lg:px-24">
        <motion.div
          className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.2em]">
              Projects / 02
            </p>
            <h2 className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.82]">
              PROJETOS
            </h2>
          </div>
          <p className="max-w-xl border-t-2 border-black pt-5 text-base leading-relaxed text-black/70 sm:text-lg">
            Trabalhos recentes que transformam ideias em experiências digitais.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TopProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.15 }}
              className="border-t-2 border-black"
            >
              <div className="aspect-16/10 overflow-hidden border-b border-black/20">
                {project.images[0] ? (
                  <ImageCloud image={project.images[0]} />
                ) : (
                  <div className="flex h-full items-end bg-[#F5E642] p-5">
                    <span className="font-display text-4xl leading-none sm:text-5xl">
                      {project.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col pt-5">
                <h3 className="font-display text-3xl leading-none sm:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/65">
                  {project.fastDescription}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/25 pt-4">
                  <Link
                    to={`/projeto/${project.id}`}
                    className="group inline-flex items-center gap-1 text-sm font-bold transition-colors hover:text-black/60"
                  >
                    Ver projeto
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-black/60 transition-colors hover:text-black"
                    >
                      GitHub
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-14 border-t-2 border-black pt-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Link
            to="/projetos"
            className="group inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-black uppercase tracking-[0.16em] transition-colors hover:border-[#F5E642]"
          >
            Ver todos os projetos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
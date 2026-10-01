import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageCloud } from '~/service/ImageCloud';
import MenubarHome from '~/components/menubarHome';
import { list as ProjectsList } from '~/data/projects';
import FooterSection from '~/components/footerSection';

const ProjectsPage = () => {
  return (
    <>
      <MenubarHome adaptive />
      <main className="relative min-h-screen overflow-hidden bg-[#d4d4d4] px-6 pb-24 pt-32 text-black sm:px-12 sm:pb-28 sm:pt-36 md:px-16 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end"
          >
            <div>
              <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
                Projects
              </p>
              <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.82]">
                PROJETOS
              </h1>
            </div>
            <p className="max-w-xl border-t-2 border-black pt-5 text-base leading-relaxed text-black/70 sm:text-lg">
              Trabalhos que transformam ideias em experiências digitais, com foco em usabilidade,
              performance e soluções bem construídas.
            </p>
          </motion.header>

          <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {ProjectsList.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.15 }}
                className="border-t-2 border-black"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-black/20">
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
                  <h2 className="font-display text-3xl leading-none sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">
                    {project.fastDescription || project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-black/25 pt-4">
                    <Link
                      to={`/projeto/${project.id}`}
                      className="group inline-flex items-center gap-1 text-sm font-bold transition-colors hover:text-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Ver projeto
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-black/60 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        GitHub
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
        <FooterSection />
    </>
  );
};

export default ProjectsPage;
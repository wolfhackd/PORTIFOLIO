
import { useParams } from "react-router";
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import Dithered404 from "~/components/Dithered404";
import FooterSection from "~/components/footerSection";
import { ImageCloud } from "~/service/ImageCloud";
import MenubarHome from "~/components/menubarHome";
import { dateFormatter } from "~/utils/dateFormatter";

import { list as ProjectList }  from "~/data/projects";
import type { Project } from "~/types/project";
import { list as TechnologyList } from "~/data/technology";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const rawProject = ProjectList.find((p) => p.id === id);

  const project: Project | undefined = rawProject ? {
    ...rawProject,
    technologies: TechnologyList.filter((technology) =>
      rawProject.technologyIds.includes(technology.id)
    ),
  } : undefined;
  
  if (!project) {
    return (
      <Dithered404
        eyebrow="PROJETO / 404"
        title="Projeto não encontrado"
        description="Esse projeto não está disponível ou o endereço informado está incorreto."
        to="/projetos"
        linkLabel="Voltar aos projetos"
      />
    );
  }

  return (
    <>
      <MenubarHome adaptive />
      <main className="relative overflow-hidden bg-[#d4d4d4] px-6 pb-24 pt-32 text-black sm:px-12 sm:pb-28 sm:pt-36 md:px-16 lg:px-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:72px_72px]"
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="border-b-2 border-black pb-8"
          >
            <p className="mb-5 inline-block bg-[#F5E642] px-2.5 py-1 text-xs font-black uppercase tracking-[0.18em]">
              Projeto / {dateFormatter(project.created)}
            </p>
            <h1 className="font-display text-[clamp(4rem,11vw,9rem)] leading-[0.82]">
              {project.title}
            </h1>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: 'easeOut' }}
            className="mt-8 aspect-[16/8] overflow-hidden border-y-2 border-black bg-[#F5E642]"
          >
            {project.images[0] ? (
              <ImageCloud image={project.images[0]} />
            ) : (
              <div className="flex h-full items-end p-6 sm:p-10">
                <span className="font-display text-5xl leading-none sm:text-7xl">
                  {project.title}
                </span>
              </div>
            )}
          </motion.div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.38fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <section className="border-t-2 border-black pt-5">
                <h2 className="font-display text-3xl leading-none sm:text-4xl">RESUMO</h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 sm:text-lg">
                  {project.fastDescription}
                </p>
              </section>

              <section className="border-t-2 border-black pt-5">
                <h2 className="font-display text-3xl leading-none sm:text-4xl">
                  SOBRE O PROJETO
                </h2>
                <p className="mt-4 max-w-3xl whitespace-pre-line text-base leading-relaxed text-black/70 sm:text-lg">
                  {project.description}
                </p>
              </section>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="self-start border-t-2 border-black pt-5"
            >
              <h2 className="font-display text-3xl leading-none sm:text-4xl">TECNOLOGIAS</h2>
              <ul className="mt-5 divide-y divide-black/20 border-y border-black/25">
                {(project.technologies ?? []).map((technology) => (
                  <li
                    key={technology.id}
                    className="flex items-center gap-3 py-3 text-sm font-bold text-black/75"
                  >
                    {technology.icon && (
                      <img
                        src={`https://cdn.simpleicons.org/${technology.icon}`}
                        alt=""
                        className="size-5"
                      />
                    )}
                    {technology.name}
                  </li>
                ))}
              </ul>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-black uppercase tracking-[0.12em] transition-colors hover:border-[#F5E642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Ver repositório
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </motion.aside>
          </div>

          <div className="mt-16 border-t-2 border-black pt-6">
            <Link
              to="/projetos"
              className="group inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-black uppercase tracking-[0.12em] transition-colors hover:border-[#F5E642] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              Todos os projetos
            </Link>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
};

export default ProjectPage;
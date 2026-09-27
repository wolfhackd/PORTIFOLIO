import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageCloud } from '~/service/ImageCloud';
import MenubarHome from '~/components/menubarHome';

import { list as ProjectsList } from '~/data/projects';
import type { Project } from '~/types/project';
import SectionStepper from '~/components/SectionStepper';

const ProjectsPage = () => {
  const projects: Project[] = ProjectsList;

  // primeira seção: título/intro, no mesmo formato das demais
  const introSection = (
    <motion.div
      key="intro"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center min-h-[60vh] flex flex-col justify-center max-w-2xl mx-auto"
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
        Meus <span className="text-cyan-400">Projetos</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Aqui estão alguns dos projetos que desenvolvi com foco em usabilidade, performance e
        design moderno. 🚀
      </p>
    </motion.div>
  );

  // cada projeto vira uma seção do stepper
  const projectSections = projects.map((project, index) => (
    <motion.div
      key={project.title + index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden max-w-2xl mx-auto"
    >
      <div className="relative w-full h-72 overflow-hidden">
        {project.images?.length ? (
          <ImageCloud image={project.images[0]} />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
            Sem imagem
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
        <p className="text-gray-400 text-md leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {(project.technologies ?? []).map((tech, i) => {
            const icon = tech?.icon;
            return icon ? (
              <img
                key={i}
                src={`https://cdn.simpleicons.org/${icon}`}
                alt={tech.name}
                className="size-6"
              />
            ) : (
              <span
                key={i}
                className="size-6 bg-gray-700 rounded flex items-center justify-center text-[10px] text-gray-300"
              >
                ?
              </span>
            );
          })}
        </div>

        {project.id && (
          <Link
            to={`/projeto/${project.id}`}
            rel="noopener noreferrer"
            className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
          >
            Ver projeto →
          </Link>
        )}
      </div>
    </motion.div>
  ));

  const sections = [introSection, ...projectSections];

  return (
    <>
      <MenubarHome />
      <section className="h-screen text-white flex flex-col justify-center align-center">
        <SectionStepper sections={sections} />
      </section>
    </>
  );
};

export default ProjectsPage;
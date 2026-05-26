
import { useParams } from "react-router";
import { motion } from 'motion/react';
import FooterSection from "~/components/footerSection";
import { ImageCloud } from "~/service/ImageCloud";
import MenubarHome from "~/components/menubarHome";
import { dateFormatter } from "~/utils/dateFormatter";

import { list as ProjectList }  from "~/data/projects";
import type { Project } from "~/types/project";
import { list as TechnologyList } from "~/data/technology";
import { projectTechnologiesRelation } from "~/data/projectTechnologiesRelation";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const rawProject = ProjectList.find((p) => p.id === id);

  const project: Project | undefined = rawProject ? {
    ...rawProject,
    technologies: (projectTechnologiesRelation.find(r => r.projectId === rawProject.id)?.techIds || [])
      .map(techId => TechnologyList.find(tech => tech.id === techId))
      .filter((tech): tech is any => !!tech) 
  } : undefined;
  
  if (!project) {
    return (
      <>
        <MenubarHome />
        <section className="min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-950 text-white py-40 px-8 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-400">Projeto não encontrado</h1>
        </section>
        <FooterSection />
      </>
    );
  }

  return (
    <>
      <MenubarHome />
      <section className="min-h-screen bg-linear-to-b from-black via-gray-900 to-gray-950 text-white py-20 px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            {project?.title}
          </h1>

          <p className="text-gray-400 text-sm mb-6">
            Postado em: {dateFormatter(project?.created ?? "")}
          </p>

          <div className="rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-lg mb-12">
            <ImageCloud image={project?.images?.[0] ?? "cld-sample"} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Resumo</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {project?.fastDescription}
                </p>

                <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Descrição Completa</h2>
                <p className="text-gray-300 leading-relaxed">
                  {project?.description}
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-6">Tecnologias</h3>
                <div className="flex flex-wrap gap-4">
                  {(project.technologies ?? []).map((tech, i) => {
                    const icon = tech?.icon;
                    return icon ? (
                      <div key={i} className="flex flex-col items-center">
                        <img
                          src={`https://cdn.simpleicons.org/${icon}`}
                          alt={tech.name}
                          className="size-8 mb-2"
                          title={tech.name}
                        />
                        <span className="text-xs text-gray-400 text-center">{tech.name}</span>
                      </div>
                    ) : (
                      <div
                        key={i}
                        className="flex flex-col items-center"
                        title={tech.name}
                      >
                        <div className="size-8 bg-gray-700 rounded flex items-center justify-center text-[10px] text-gray-300 mb-2">
                          ?
                        </div>
                        <span className="text-xs text-gray-400 text-center">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <FooterSection />
    </>
  );
};

export default ProjectPage;
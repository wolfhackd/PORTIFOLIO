
import { useParams } from "react-router";
import { Badge } from "~/components/ui/badge";
import FooterSection from "~/components/footerSection";
import { ImageCloud } from "~/service/ImageCloud";
import MenubarHome from "~/components/menubarHome";
import { dateFormatter } from "~/utils/dateFormatter";

import { list as ProjectList }  from "~/data/projects";
import type { Project } from "~/types/project";
import type { Technology } from "~/types/technology";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();

  const project = ProjectList.find((p: Project) => p.id === id) as Project | undefined;

  if (!project) {
    return <h1>Projeto não encontrado</h1>;
  }
//   const handleClick = () => {
//     window.open(project?.link, "_blank");
//   };

  return (
    <>
      <MenubarHome />
      <div className="relative pt-32 px-6 lg:px-24 pb-16 text-[#EEF4ED] bg-gradient-to-b from-[#31487a] to-[#1e2b4f] poppins-medium flex flex-col items-center w-auto">
        <h2 className="text-5xl font-bold">{project?.title}</h2>

        <div className="w-1/2 h-1/2 mx-auto rounded-2xl overflow-hidden bg-black/20 mt-8">
          <ImageCloud image={project?.images?.[0] ?? "cld-sample"} />
        </div>

        <p className="text-muted-foreground">
          Postado em: {dateFormatter(project?.created ?? "")}
        </p>

        <p className="mt-4">{project?.fastDescription}</p>

        <h2>Detalhes</h2>
        <div className="flex">
          <p>{project?.description}</p>
          <div>
            <h3>Tecnologias utilizadas</h3>
            <div>
              {project.technologies?.map((tech: Technology) => (
                <Badge key={tech.id}>{tech.name}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </>
  );
};

export default ProjectPage;
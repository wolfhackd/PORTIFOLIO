import ProjectsPage from "~/pages/projects/ProjectsPage";

export function meta() {
  return [
    {  title: 'Projetos' },
    { name: "description", content: "Confira meus projetos mais recentes, desde aplicações web até projetos de código aberto." },
  ];
}

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
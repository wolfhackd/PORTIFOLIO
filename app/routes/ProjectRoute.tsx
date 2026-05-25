import ProjectPage from "~/pages/project/ProjectPage";

export function meta() {
  return [
    { title: "Mauro Leal" },
    { name: "description", content: "Welcome to My Page!" },
  ];
}

export default function ProjectRoute() {
  return <ProjectPage />;
}

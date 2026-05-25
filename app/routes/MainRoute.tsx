import { MainPage } from "~/pages/main/MainPage";



export function meta() {
  return [
    { title: "Mauro Leal" },
    { name: "description", content: "Welcome to My Page!" },
  ];
}

export default function MainRoute() {
  return <MainPage />;
}

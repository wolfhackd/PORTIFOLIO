import { MainPage } from "../pages/main/mainPage";

export function meta() {
  return [
    { title: "Mauro Leal" },
    { name: "description", content: "Welcome to My Page!" },
  ];
}

export default function Home() {
  return <MainPage />;
}

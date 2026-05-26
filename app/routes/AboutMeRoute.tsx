import AboutMePage from "~/pages/aboutMe/AboutMePage";

export function meta() {
    return [
      { title: "Mauro Leal" },
      { name: "description", content: "Sobre Mim" },
    ];
  }


export default function AboutMeRoute() {
    return <AboutMePage />;
}
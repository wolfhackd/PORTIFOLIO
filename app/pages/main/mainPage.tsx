import MenubarHome from "~/components/menubarHome";
import { HeroSection } from "./Hero";
import { Toaster } from 'sonner';
import { AboutMe } from "./aboutMe";
import Technologies from "./technologies";
import { ProjectsSection } from "./projectSection";
import FooterSection from "~/components/footerSection";

export const MainPage = () => {
    return (
        <>
         <MenubarHome />
            <Toaster />
            <main className="bg-black">
                <HeroSection />
                <AboutMe />
                <Technologies />
                <ProjectsSection />
                <FooterSection />
            </main>
        </>
    );
}
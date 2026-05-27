import MenubarHome from "~/components/menubarHome";
import { Toaster } from 'sonner';
import { AboutMe } from "./aboutMe";
import Technologies from "./technologies";
import { ProjectsSection } from "./projectSection";
import FooterSection from "~/components/footerSection";
import { HeroSection } from "./Hero";

export default function MainPage() {
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
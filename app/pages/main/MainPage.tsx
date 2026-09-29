import MenubarHome from '~/components/menubarHome';
import { Toaster } from 'sonner';
import { AboutMe } from './aboutMe';
import Technologies from './technologies';
import { ProjectsSection } from './projectSection';
import FooterSection from '~/components/footerSection';
import { HeroSection } from './Hero';
import SectionDots from '~/components/SectionDots';

export default function MainPage() {
  return (
    <>
      <MenubarHome adaptive />
      <Toaster />
      <SectionDots />
      <div>
        <HeroSection />
        <AboutMe />
        <Technologies />
        <ProjectsSection />
        <FooterSection />
      </div>
    </>
  );
}

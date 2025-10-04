import AboutSection from "@/components/modules/Public/Hero/About";
import HeroSection from "@/components/modules/Public/Hero/Hero";
import SkillSection from "@/components/modules/Public/Skill/Skill";
import Navbar from "@/components/shared/Navbar";
import ProjectsSection from "../dashboard/project/page";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
    </div>
  );
}

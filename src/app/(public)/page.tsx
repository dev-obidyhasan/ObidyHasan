import AboutSection from "@/components/modules/Public/About/About";
import HeroSection from "@/components/modules/Public/Hero/Hero";
import SkillSection from "@/components/modules/Public/Skill/Skill";
import Navbar from "@/components/shared/Navbar";
import ContactSection from "@/components/modules/Public/Contact/Contact";
import ProjectSection from "@/components/modules/Public/Project/Project";
import BlogSection from "@/components/modules/Public/Blog/Blog";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

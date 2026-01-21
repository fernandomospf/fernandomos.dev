import Navbar from '@/components/organisms/Navbar';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import ExperienceSection from '@/components/organisms/ExperienceSection';
import BlogSection from '@/components/organisms/blog/BlogSection';
import ContactSection from '@/components/organisms/ContactSection';
import Footer from '@/components/organisms/Footer';
import ScrollProgress from '@/components/organisms/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

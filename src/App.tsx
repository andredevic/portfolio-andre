import AboutSection from './components/about';
import { ContactSection } from './components/contact-section';
import HeroSection from './components/Hero';
import Navbar from './components/navbar';
import { ProjectsSection } from './components/projects-section';
import Technologies from './components/Technologies';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="container relative z-0 mx-auto px-0">
        {' '}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Technologies />
        <ProjectsSection />
        <ContactSection />
        <Toaster />
      </div>
    </div>
  );
}

export default App;

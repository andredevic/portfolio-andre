import AboutSection from './components/about.js';
import { ContactSection } from './components/contact-section.js';
import HeroSection from './components/Hero.js';
import Navbar from './components/navbar.js';

import { ProjectsSection } from './components/projects-section.js';
import Technologies from './components/Technologies.js';
import { Toaster } from './components/ui/toaster.js';
function App() {
  return (
    <section id="home">
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-0">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Technologies />
          <ProjectsSection />
          <ContactSection />
          <Toaster />
        </div>
      </div>
    </section>
  );
}

export default App;

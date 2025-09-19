import profilePic from '../assets/photo-personal.jpeg';

import { ArrowDown, Mail, MousePointerClick } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-50 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="pt-24 text-center sm:pt-0 lg:text-left">
            <h1 className="pb-6 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              André Ferreira
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/80">
              Desenvolvedor Full Stack, com experiência em React e Node.js,
              desenvolvendo aplicações completas, seguras e escaláveis.
              Habilidade em construção de interfaces, design de APIs e
              integração com bancos de dados, entregando soluções que unem
              performance, confiabilidade e crescimento sustentável.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-purple-300 bg-transparent hover:bg-purple-400/80"
              >
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              <Button
                size="lg"
                className="bg-purple-300 text-accent-foreground hover:bg-purple-400/70"
                onClick={() =>
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <MousePointerClick />
                Ver Projetos
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="h-80 w-80 rounded-full p-2 backdrop-blur-sm">
                <img
                  className="w-full rounded-l-full rounded-r-full brightness-75"
                  src={profilePic}
                  alt="minha foto"
                />
              </div>
              {/* Floating elements */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ArrowDown className="h-6 w-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

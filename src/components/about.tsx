import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import DownloadCVButton from './cvdownloadbutton';
import { BriefcaseBusiness, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="aboutme" className="bg-transparent py-20 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            About
            <span className="text-4xl font-thin text-neutral-500"> Me </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Learn more about my career and professional services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Perfil Profissional */}
          <Card className="group border-transparent bg-white/5 transition-all duration-300 hover:border-purple-200/60 hover:shadow-sm hover:shadow-purple-200/60">
            <CardHeader>
              <CardTitle className="gradient-text flex items-center gap-3">
                <User className="h-6 w-6 text-white/80" />
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                  Quem sou eu?
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="leading-relaxed text-white/80">
                Sou André Ferreira, estudante de Engenharia de Software e
                Desenvolvedor Full Stack apaixonado por criar aplicações
                escaláveis e resolver problemas reais com tecnologia.
              </p>
              <p className="leading-relaxed text-white/80">
                Tenho especialização em Node.js, React, TypeScript e
                arquiteturas modernas para web, transformando desafios complexos
                em soluções limpas, bem estruturadas e de fácil manutenção.
                Atualmente, busco uma oportunidade para crescer ao lado de
                profissionais experientes, aprimorar minhas habilidades e
                contribuir em projetos de impacto.
              </p>
              <DownloadCVButton />
            </CardContent>
          </Card>

          {/* Qualificações */}
          <Card className="group border-transparent bg-white/5 text-accent transition-all duration-300 hover:border-purple-200/60 hover:shadow-sm hover:shadow-purple-200/60">
            <CardHeader>
              <CardTitle className="gradient-text flex items-center gap-3">
                <BriefcaseBusiness className="h-6 w-6 text-white/80" />
                <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                  O que eu faço?
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h3>Backend Services:</h3>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Criação e manutenção de APIs RESTful escaláveis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Autenticação, autorização e segurança no tratamento de dados
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Modelagem, otimização e integração de bancos de dados (SQL &
                    NoSQL)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Arquitetura de microsserviços e integrações entre sistemas
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Desenvolvimento de interfaces modernas com React e
                    TypeScript
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <p className="text-white/80">
                    Deploy e automação com Docker, CI/CD e aplicações preparadas
                    para a nuvem
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

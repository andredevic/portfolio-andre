// O erro "Could not resolve 'react-i18next'" acontece porque a biblioteca não está instalada.
// Para corrigir, por favor, rode este comando no seu terminal:
// npm install react-i18next

import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import currencyImage from '../assets/crypto.png';
import taskImage from '../assets/manager.png';
import Gym from '../assets/gym.png';
import DietImage from '../assets/diet.png';
import PetImage from '../assets/pet.png';
import NodejsImage from '../assets/nodejscrud.png';
import { motion } from 'framer-motion';

export function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      titleKey: 'project_1_title',
      descKey: 'project_1_desc',
      techKey: 'project_1_tech',
      image: Gym,
      githubLink: 'https://github.com/andredevic/API_solid_GymPass.git',
    },
    {
      titleKey: 'project_2_title',
      descKey: 'project_2_desc',
      techKey: 'project_2_tech',
      image: currencyImage,
      githubLink: 'https://github.com/andredevic/currency-cripto.git',
      demoLink: 'https://currency-cripto.vercel.app/',
    },
    {
      titleKey: 'project_3_title',
      descKey: 'project_3_desc',
      techKey: 'project_3_tech',
      image: PetImage,
      githubLink: 'https://github.com/andredevic/API_solid_FindAPet.git',
    },
    {
      titleKey: 'project_4_title',
      descKey: 'project_4_desc',
      techKey: 'project_4_tech',
      image: taskImage,
      githubLink: 'https://github.com/andredevic/task_manager_react.git',
      demoLink: 'https://task-manager-react-chi.vercel.app/',
    },
    {
      titleKey: 'project_5_title',
      descKey: 'project_5_desc',
      techKey: 'project_5_tech',
      image: DietImage,
      githubLink: 'https://github.com/andredevic/API_diet_nodejs.git',
    },
    {
      titleKey: 'project_6_title',
      descKey: 'project_6_desc',
      techKey: 'project_6_tech',
      image: NodejsImage,
      githubLink: 'https://github.com/andredevic/node_raw_crud_API.git',
    },
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            {t('projects_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('projects_subtitle')}
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden rounded-md border border-white/10 bg-white/5 transition-all duration-300 hover:border-purple-300/30 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  width={400}
                  height={200}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                {/* Gradiente sutil para o título, sem rosa */}
                <CardTitle className="bg-gradient-to-r from-slate-300 to-purple-400 bg-clip-text tracking-tight text-transparent">
                  {t(project.titleKey)}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col justify-between space-y-4">
                <p className="text-sm leading-relaxed text-white/80">
                  {t(project.descKey)}
                </p>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {t(project.techKey)
                      .split(', ')
                      .map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="border border-purple-400/30 bg-purple-400/10 text-xs font-medium text-purple-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => handleLinkClick(project.githubLink)}
                      size="sm"
                      variant="outline"
                      className="flex-1 border-purple-300/50 bg-transparent text-purple-200 transition-colors hover:border-purple-300 hover:bg-purple-400/10 hover:text-white"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {t('project_button_code')}
                    </Button>
                    {project.demoLink && (
                      <Button
                        onClick={() => handleLinkClick(project.demoLink)}
                        size="sm"
                        // Gradiente de roxo para índigo, sem rosa
                        className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-700 text-white transition-opacity hover:opacity-90"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('project_button_demo')}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

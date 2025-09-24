import { useTranslation } from 'react-i18next';
import {
  Code,
  Container,
  Database,
  Layers,
  Repeat2,
  Server,
} from 'lucide-react';
// Lembre-se de verificar se este caminho está correto para sua estrutura de pastas
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { motion } from 'framer-motion';

const Technologies = () => {
  const { t } = useTranslation();

  // Array de tecnologias com o novo conteúdo e chaves de tradução
  const technologies = [
    {
      icon: <Code className="h-8 w-8 text-purple-300" />,
      title: t('skills_card1_title'),
      description: t('skills_card1_desc'),
    },
    {
      icon: <Server className="h-8 w-8 text-purple-300" />,
      title: t('skills_card2_title'),
      description: t('skills_card2_desc'),
    },
    {
      icon: <Database className="h-8 w-8 text-purple-300" />,
      title: t('skills_card3_title'),
      description: t('skills_card3_desc'),
    },
    {
      icon: <Layers className="h-8 w-8 text-purple-300" />,
      title: t('skills_card4_title'),
      description: t('skills_card4_desc'),
    },
    {
      icon: <Container className="h-8 w-8 text-purple-300" />,
      title: t('skills_card5_title'),
      description: t('skills_card5_desc'),
    },
    {
      icon: <Repeat2 className="h-8 w-8 text-purple-300" />,
      title: t('skills_card6_title'),
      description: t('skills_card6_desc'),
    },
  ];

  return (
    <section id="tecnologias" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-work-sans mb-4 text-3xl text-white/85 md:text-4xl">
            {t('skills_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('skills_subtitle')}
          </p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group border-transparent bg-white/5 transition-all duration-300 hover:border-purple-200/60 hover:shadow-sm hover:shadow-purple-200/60"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="text-accent transition-transform duration-300 group-hover:scale-110">
                    {tech.icon}
                  </div>
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-slate-300 bg-clip-text text-base tracking-tight text-transparent">
                    {tech.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-card-foreground text-white">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

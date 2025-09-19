import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Restaurant from '../assets/restaurant-reservation-dashboard.png';
import Ecommerce from '../assets/modern-ecommerce-platform.png';
import Task from '../assets/task-management-app.png';
import Analytics from '../assets/analytics-dashboard.png';
import SocialMedia from '../assets/social-media-api-docs.png';
import Iot from '../assets/iot-monitoring-dashboard.png';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Sistema de Reservas',
      description:
        'API REST completa para reservas de restaurantes com autenticação JWT, notificações em tempo real e painel administrativo.',
      image: Restaurant,
      tags: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
      github: '#',
      demo: '#',
    },
    {
      title: 'E-commerce Platform',
      description:
        'Plataforma de e-commerce com carrinho de compras, pagamentos integrados, gestão de estoque e analytics em tempo real.',
      image: Ecommerce,
      tags: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description:
        'Aplicativo de gerenciamento de tarefas com colaboração em equipe, notificações push e sincronização offline.',
      image: Task,
      tags: ['React Native', 'Express', 'Socket.io', 'Redis', 'PWA'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Analytics Dashboard',
      description:
        'Dashboard de analytics com visualizações interativas, relatórios personalizados e integração com múltiplas fontes de dados.',
      image: Analytics,
      tags: ['Vue.js', 'D3.js', 'FastAPI', 'ClickHouse', 'Docker'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media API',
      description:
        'API robusta para rede social com feed personalizado, sistema de likes/comentários e moderação de conteúdo.',
      image: SocialMedia,
      tags: ['NestJS', 'GraphQL', 'MySQL', 'ElasticSearch', 'AWS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'IoT Monitoring System',
      description:
        'Sistema de monitoramento IoT com coleta de dados em tempo real, alertas automáticos e visualização de métricas.',
      image: Iot,
      tags: ['React', 'MQTT', 'InfluxDB', 'Grafana', 'Kubernetes'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text mb-4 text-5xl text-white/85 md:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Some projects i have developed applying best practices and modern
            technologies
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-transparent bg-white/5 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || '../assets/placeholder.svg'}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="h-44 w-full rounded-t-md object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <CardHeader>
                <CardTitle className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-white/80">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="border-purple-200/60 bg-purple-300/30 text-xs text-purple-200/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-purple-300 bg-transparent hover:bg-purple-400/70"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-300 text-accent-foreground hover:bg-purple-400/70"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

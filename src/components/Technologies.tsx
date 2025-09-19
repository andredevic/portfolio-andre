import {
  Code,
  Container,
  Database,
  Layers,
  Repeat2,
  Server,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Technologies = () => {
  const technologies = [
    {
      icon: <Server className="h-8 w-8 text-white/80" />,
      title: 'Node.js',
      description:
        'Scalable and secure APIs with Express, Fastify, and NestJS. Microservices development, JWT authentication, RBAC, TypeScript, and robust architectures.',
    },
    {
      icon: <Layers className="h-8 w-8 text-white/80" />,
      title: 'architecture',
      description:
        'Design patterns (MVC, SOLID, DDD). Focus on clean, maintainable code and scalable software architecture.',
    },
    {
      icon: <Database className="h-8 w-8 text-white/80" />,
      title: 'Database',
      description:
        'Experience with Prisma ORM, PostgreSQL, MySQL, MongoDB, and other NoSQL databases. Data modeling, query optimization, and database design.',
    },
    {
      icon: <Code className="h-8 w-8 text-white/80" />,
      title: 'Automatizated Tests',
      description:
        'Jest, Supertest, unit and e2e tests for reliable and maintainable code.',
    },
    {
      icon: <Container className="h-8 w-8 text-white/80" />,
      title: 'DevOps',
      description:
        'Docker, GitHub Actions, CI/CD pipelines. Infrastructure as code and automated deployments.',
    },
    {
      icon: <Repeat2 className="h-8 w-8 text-white/80" />,
      title: 'Messaging & Scalability',
      description: 'Kafka, RabbitMQ, Redis, asynchronous queues.',
    },
  ];
  return (
    <section id="tecnologias" className="bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="gradient-text font-work-sans mb-4 text-3xl text-white/85 md:text-4xl">
            Technical Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Technologies and tools that I master to create complete and
            innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
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
        </div>
      </div>
    </section>
  );
};

export default Technologies;

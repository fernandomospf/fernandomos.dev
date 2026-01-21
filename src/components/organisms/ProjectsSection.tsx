'use client';

import { useParallax } from '@/hooks/useParallax';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e integrações.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'API de Autenticação',
    description: 'API robusta de autenticação com JWT, OAuth2 e refresh tokens.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados e métricas de negócio.',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'CLI Tool',
    description: 'Ferramenta de linha de comando para automação de tarefas de desenvolvimento.',
    technologies: ['Python', 'Click', 'Docker'],
    github: 'https://github.com',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'Plataforma de blog com editor rich-text, SEO otimizado e sistema de comentários.',
    technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    featured: false,
  },
];

const ProjectsSection = () => {
  const parallaxOffset = useParallax(0.1);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="floating-shape w-96 h-96 bg-accent -right-48 top-1/4"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma seleção de projetos que demonstram  e experiência
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Folder size={64} className="text-primary/30" />
                  </div>
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card rounded-full hover:scale-110 transition-transform"
                        aria-label="Ver código no GitHub"
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-card rounded-full hover:scale-110 transition-transform"
                        aria-label="Ver demo"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className="glass-card rounded-xl p-6 hover-lift group"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder size={32} className="text-primary" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver código no GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Ver demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client';

import { useParallax } from '@/hooks/useParallax';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Desenvolvedor Full Stack Senior',
    company: 'Empresa Atual',
    period: '2022 - Presente',
    description:
      'Liderança técnica de projetos, arquitetura de sistemas e mentoria de desenvolvedores juniores. Foco em React, Node.js e cloud computing.',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Desenvolvedor Full Stack',
    company: 'Empresa Anterior',
    period: '2020 - 2022',
    description:
      'Desenvolvimento de aplicações web complexas, APIs RESTful e integrações com sistemas terceiros.',
    technologies: ['Vue.js', 'Python', 'Django', 'Docker'],
  },
  {
    title: 'Desenvolvedor Frontend',
    company: 'Startup Tech',
    period: '2019 - 2020',
    description:
      'Criação de interfaces responsivas e acessíveis, otimização de performance e implementação de testes.',
    technologies: ['React', 'TypeScript', 'Jest', 'Styled Components'],
  },
  {
    title: 'Desenvolvedor Júnior',
    company: 'Primeira Empresa',
    period: '2018 - 2019',
    description:
      'Início da carreira com desenvolvimento web, aprendizado de boas práticas e trabalho em equipe.',
    technologies: ['JavaScript', 'PHP', 'MySQL', 'jQuery'],
  },
];

const ExperienceSection = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="floating-shape w-72 h-72 bg-primary -left-36 top-1/3"
        style={{ transform: `translateY(${parallaxOffset * -1}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minha <span className="text-gradient">Experiência</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma linha do tempo da minha jornada profissional
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 timeline-dot md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card rounded-2xl p-6 hover-lift">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
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

                {/* Spacer for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

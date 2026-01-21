'use client';

import { useParallax } from '@/hooks/useParallax';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Especialista Técnico Sênior em Software',
    company: 'NTT DATA',
    period: 'ago/2025 - Presente',
    description:
      'Atuação na Getnet, no time de Reinforcement da NTT DATA, apoiando múltiplos times internos com foco no Merchant Portal. Trabalho voltado à melhoria de performance, correção de bugs em diversos microsserviços e desenvolvimento de novas funcionalidades. Forte colaboração entre equipes, comunicação constante e aplicação de boas práticas de engenharia.',
    technologies: [
      'Node.js',
      'React',
      'Microservices',
      'Micro Frontends',
      'MongoDB',
      'RabbitMQ',
      'Azure Pipelines',
      'Git Flow',
    ],
  },
  {
    title: 'Desenvolvedor de Software III',
    company: 'Radix',
    period: 'dez/2022 - ago/2025',
    description:
      'Desenvolvimento de novas funcionalidades e correção de bugs em sistemas internos. Atuação ativa na sugestão e implementação de melhorias para otimização e eficiência. Responsável pela criação de uma solução para compartilhamento de scripts e arquiteturas, facilitando o onboarding de novos projetos. Desenvolvimento de microserviço para gerenciamento e otimização de chamadas, reduzindo significativamente o tempo de carregamento. Participação na implementação de gerenciamento de acesso com Keycloak.',
    technologies: [
      'Node.js',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Docker',
      'Keycloak',
      'Microservices',
    ],
  },
  {
    title: 'Desenvolvedor de Software II',
    company: 'Radix',
    period: 'dez/2022 - ago/2024',
    description:
      'Atuação no desenvolvimento e evolução de sistemas internos, com foco em novas funcionalidades, correção de bugs e melhorias contínuas. Participação no desenvolvimento de microserviços, soluções internas reutilizáveis e integração de controle de acesso com Keycloak.',
    technologies: [
      'Node.js',
      'React',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Docker',
      'Keycloak',
    ],
  },
  {
    title: 'Full Stack Developer I',
    company: 'NextAge',
    period: 'ago/2020 - dez/2022',
    description:
      'Desenvolvimento e manutenção de aplicações web e mobile utilizando Next.js com TypeScript e React Native. Atuação em todo o ciclo de desenvolvimento, desde levantamento de requisitos com o cliente até implementação, testes e correção de bugs. Forte criação de novas funcionalidades e melhorias técnicas.',
    technologies: [
      'Next.js',
      'TypeScript',
      'React',
      'React Native',
      'Node.js',
      'AdonisJS',
      'Express',
      'MySQL',
      'ScrumBan',
    ],
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
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
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

'use client';

import { useParallax } from '@/hooks/useParallax';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Material UI', 'HTML/CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'C#', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Git', 'Docker', 'Azure', 'CI/CD', 'Linux'],
  },
  {
    title: 'Soft Skills',
    skills: ['Comunicação', 'Trabalho em Equipe', 'Resolução de Problemas', 'Aprendizado Contínuo', 'Adaptabilidade', 'Proatividade', 'Gestão de Tempo'],
  },
];

const SkillsSection = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="floating-shape w-80 h-80 bg-primary -left-40 bottom-0"
        style={{ transform: `translateY(${parallaxOffset * -1}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Minhas <span className="text-gradient">Habilidades</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para construir soluções completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass-card rounded-2xl p-8 hover-lift"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
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

export default SkillsSection;

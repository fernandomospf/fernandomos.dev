'use client';

import { useParallax } from '@/hooks/useParallax';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Escrevo código legível, manutenível e bem documentado seguindo as melhores práticas.',
  },
  {
    icon: Lightbulb,
    title: 'Soluções Criativas',
    description: 'Transformo problemas complexos em soluções elegantes e eficientes.',
  },
  {
    icon: Rocket,
    title: 'Entrega de Valor',
    description: 'Foco em entregar resultados que realmente fazem diferença para o negócio.',
  },
];

const AboutSection = () => {
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="floating-shape w-72 h-72 bg-accent -right-36 top-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Conheça um pouco da minha trajetória e paixão por tecnologia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções tecnológicas que impactam positivamente a vida das pessoas. 
                Com experiência em desenvolvimento full-stack, busco constantemente aprender novas tecnologias e aprimorar minhas habilidades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha jornada na programação começou há alguns anos, e desde então venho construindo uma sólida experiência 
                em diferentes tecnologias e frameworks, sempre focando em entregar código de qualidade e experiências excepcionais.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open source 
                e compartilhar conhecimento com a comunidade de desenvolvedores.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Code2 size={48} className="text-primary-foreground" />
                    </div>
                    <p className="text-2xl font-bold mb-2">5+ Anos</p>
                    <p className="text-muted-foreground">de Experiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

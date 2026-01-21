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
              <p className="text-md text-muted-foreground leading-relaxed">
                Sou desenvolvedor de software com foco em backend e arquitetura, atuando profissionalmente com <strong>TypeScript</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, <strong>Python</strong> e <strong>C#</strong>. Trabalho diariamente com sistemas reais, código legado, refatoração, performance e evolução de produtos em produção.</p>

              <p className="text-md text-muted-foreground leading-relaxed">Tenho experiência em <strong>desenvolvimento fullstack</strong>, mas meu interesse principal está em back-end bem feito: código limpo, arquitetura clara, segurança, testes e decisões técnicas que façam sentido no longo prazo. Gosto de entender o problema antes de escrever a primeira linha de código.</p>

              <p className="text-md text-muted-foreground leading-relaxed">Já atuei em projetos que exigem escala, manutenção e responsabilidade técnica, lidando com integrações, APIs, bancos de dados relacionais e boas práticas de engenharia. Valorizo commits bem documentados, organização de projeto e código fácil de manter por qualquer pessoa do time.</p>

              <p className="text-md text-muted-foreground leading-relaxed">Estou em constante evolução técnica, estudando arquitetura de software, testes automatizados e boas práticas de mercado. Este portfólio reúne projetos criados com esse foco: qualidade, clareza e aprendizado real, não apenas código que <strong>“funciona”</strong>.</p>
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

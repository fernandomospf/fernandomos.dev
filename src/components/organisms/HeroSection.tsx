'use client';

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useParallax } from '@/hooks/useParallax';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/atoms/avatar';
import github from '@/api/github';
import { useGithubStore } from '@/store/store';
import { useEffect } from 'react';
import MosPhoto from '@/assets/images/mos.jpg';
import Image from 'next/image';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);
  const { repos, setRepos } = useGithubStore();

  useEffect(() => {
    const func = async () => {
      if (repos.length === 0) {
        const response = await github.getRepos();
        console.log(response);
        setRepos(response);
      }
    }
    func();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      <div
        className="floating-shape w-96 h-96 bg-primary top-20 -left-48"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      />
      <div
        className="floating-shape w-80 h-80 bg-accent bottom-20 -right-40"
        style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
      />
      <div
        className="floating-shape w-64 h-64 bg-primary/50 top-1/2 left-1/3"
        style={{ transform: `translateY(${parallaxOffset * 0.4}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p
              className="text-muted-foreground text-lg mb-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Olá, eu sou
            </p>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <span className="text-gradient">Fernando Mós</span>
              <br />
              <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Desenvolvedor de Software</span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              Construindo experiências digitais elegantes e funcionais com código limpo e design moderno.
            </p>

            <div
              className="flex items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium 
                           hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Entre em contato
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 border border-border rounded-full font-medium 
                           hover:bg-secondary transition-all duration-300"
              >
                Ver projetos
              </a>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: '500ms' }}
            >
              <a
                href="https://github.com/fernandomospf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/fernando-mos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground 
                           transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div
            className="flex justify-center lg:justify-end order-1 lg:order-2 opacity-0 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl" />
              <div className="absolute -inset-2 rounded-full border-2 border-primary/20" />

              <Avatar className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-background shadow-2xl">
                <Image src={MosPhoto} alt="Fernando Mós" className="object-cover" />
                {/* <AvatarFallback className="text-6xl md:text-7xl lg:text-8xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  FM
                </AvatarFallback> */}
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;

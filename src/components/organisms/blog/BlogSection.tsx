'use client';

import Link from 'next/link';
import { useParallax } from '@/hooks/useParallax';
import BlogCard from './BlogCard';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const BlogSection = () => {
  const parallaxOffset = useParallax(0.1);
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const recentPosts = posts?.slice(0, 3) || [];

  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div
        className="floating-shape w-80 h-80 bg-accent -right-40 top-1/4"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Blog</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Artigos sobre desenvolvimento, tecnologia e aprendizados
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-video bg-secondary" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-secondary rounded w-1/3" />
                    <div className="h-6 bg-secondary rounded w-full" />
                    <div className="h-4 bg-secondary rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : recentPosts.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {posts && posts.length > 3 && (
                <div className="text-center mt-12">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                  >
                    Ver todos os artigos
                    <ArrowRight size={18} />
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum artigo publicado ainda. Volte em breve!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  cover_image_url?: string;
  published_at?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
    >
      {post.cover_image_url && (
        <div className="aspect-video overflow-hidden">
          <img
            src={post.cover_image_url}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {formattedDate && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <Calendar size={14} />
            <span>{formattedDate}</span>
          </div>
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;

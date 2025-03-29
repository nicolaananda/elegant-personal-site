
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  slug,
  description,
  imageUrl,
  tags,
  featured = false
}) => {
  return (
    <Link 
      to={`/work/${slug}`}
      className="group block"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
        <div className="md:col-span-4 overflow-hidden rounded-md">
          <div className="aspect-[4/3] bg-muted overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="md:col-span-8">
          <h3 className="text-base font-medium mb-1 group-hover:text-primary/70 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-0.5 bg-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

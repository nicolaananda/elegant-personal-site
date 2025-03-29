
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
      className={cn(
        "group block overflow-hidden transition-all duration-300",
        featured ? "md:col-span-2" : ""
      )}
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <div 
          className="aspect-video bg-secondary relative w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        >
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-medium group-hover:text-primary/80 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-secondary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

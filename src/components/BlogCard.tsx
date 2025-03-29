
import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: Date;
  tags: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  excerpt,
  date,
  tags
}) => {
  const formattedDate = formatDistance(date, new Date(), { addSuffix: true });
  
  return (
    <Link 
      to={`/blog/${slug}`}
      className="group block py-6 border-t border-border first:border-t-0"
    >
      <div className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <time dateTime={date.toISOString()}>{formattedDate}</time>
          <span className="mx-2">·</span>
          <span>{tags[0]}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-medium group-hover:text-primary/80 transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
        
        <div className="pt-2 flex items-center text-sm">
          <span className="text-sm group-hover:underline">
            Read article
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

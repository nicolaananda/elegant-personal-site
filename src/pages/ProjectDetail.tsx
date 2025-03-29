
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { getProjectBySlug } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');
  
  useEffect(() => {
    if (!project) {
      navigate('/work', { replace: true });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [project, navigate]);
  
  if (!project) {
    return null;
  }
  
  return (
    <Layout>
      <article className="container-custom max-w-4xl">
        <Link 
          to="/work"
          className="inline-flex items-center text-sm mb-8 hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
        
        <div>
          <h1 className="text-3xl font-normal mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 bg-secondary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-8">
            {project.description}
          </p>
        </div>
        
        <div className="rounded-md overflow-hidden mb-10">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="text-sm font-medium mb-2">Role</h3>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-2">Technologies</h3>
            <div className="text-sm text-muted-foreground">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="block">{tech}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="prose prose-sm text-muted-foreground max-w-none mb-10">
          <p>{project.content}</p>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border flex justify-between items-center">
          <Button asChild variant="outline" size="sm">
            <Link to="/work">
              All projects
            </Link>
          </Button>
          
          {project.externalUrl && (
            <Button asChild size="sm">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                View project
                <ArrowUpRight className="ml-2 h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;

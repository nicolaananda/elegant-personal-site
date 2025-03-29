
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
      <article className="pt-12 pb-20">
        <div className="container-custom">
          <Link 
            to="/work"
            className="inline-flex items-center text-sm mb-12 hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="font-medium mb-6">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm px-3 py-1 bg-secondary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden mb-12">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-medium mb-2">Role</h3>
              <p className="text-muted-foreground">{project.role}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Technologies</h3>
              <ul className="text-muted-foreground">
                {project.technologies?.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Links</h3>
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View Project
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          
          <div className="max-w-3xl prose prose-neutral">
            <p>{project.content}</p>
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
            <Button asChild variant="outline">
              <Link to="/work">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Projects
              </Link>
            </Button>
            
            {project.externalUrl && (
              <Button asChild>
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  View Live Project
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ProjectDetail;

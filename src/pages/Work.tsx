
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

const Work: React.FC = () => {
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <div className="container-custom max-w-4xl">
          <div className="mb-16">
            <h1 className="text-3xl font-normal mb-4 tracking-tight">Work</h1>
            <p className="text-muted-foreground">
              A selection of projects I've worked on in design and development.
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="block group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  <div className="md:col-span-4 overflow-hidden rounded-md">
                    <div className="aspect-[4/3] bg-muted overflow-hidden">
                      <img 
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h2 className="text-xl font-normal mb-2 group-hover:text-primary/70 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground mb-3 text-sm">
                      {project.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;

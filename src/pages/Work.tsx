
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Work: React.FC = () => {
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="font-medium mb-6">My Work</h1>
            <p className="text-xl text-muted-foreground">
              A collection of my recent projects in design and development, showcasing my expertise and creative approach to solving problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                slug={project.slug}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;

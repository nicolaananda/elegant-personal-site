
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import { getRecentPosts } from '@/data/blog';

const Index: React.FC = () => {
  const featuredProjects = getFeaturedProjects();
  const recentPosts = getRecentPosts(3);
  
  return (
    <Layout>
      <Hero />
      
      <section id="featured-projects" className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-medium mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl">
                Selected projects showcasing my design and development experience.
              </p>
            </div>
            
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/work" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                slug={project.slug}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                featured
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-medium mb-4">Latest Articles</h2>
              <p className="text-muted-foreground max-w-2xl">
                Thoughts, insights, and perspectives on design, development, and technology.
              </p>
            </div>
            
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link to="/blog" className="flex items-center">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-background rounded-xl p-6 md:p-8">
            {recentPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-medium mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

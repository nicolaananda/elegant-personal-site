
import React from 'react';
import Layout from '@/components/Layout';
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
      <section className="container-custom max-w-4xl mx-auto">
        <div className="mb-20">
          <h1 className="text-3xl md:text-4xl font-normal mb-4 tracking-tight">
            John Doe
          </h1>
          <p className="text-xl text-muted-foreground">
            Software Engineer & Designer crafting thoughtful digital experiences.
          </p>
          <div className="flex gap-4 mt-6">
            <Button asChild variant="outline" size="sm">
              <Link to="/work">Work</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/blog">Blog</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-20">
          <section>
            <h2 className="text-xl font-normal mb-6 tracking-tight">Selected work</h2>
            <div className="space-y-10">
              {featuredProjects.map((project) => (
                <Link key={project.id} to={`/work/${project.slug}`} className="block group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
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
                      <h3 className="text-base font-medium mb-1 group-hover:text-primary/70 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-xl font-normal mb-6 tracking-tight">Recent writing</h2>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs text-muted-foreground">
                      {post.date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <h3 className="text-base group-hover:text-primary/70 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

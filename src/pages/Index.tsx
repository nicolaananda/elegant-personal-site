
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
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
      
      <div className="container-custom max-w-4xl mx-auto space-y-16 mt-10">
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium tracking-tight">
              Selected Work
            </h2>
            <Link to="/work" className="text-sm text-primary flex items-center gap-1 hover:underline">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.slice(0, 4).map((project) => (
              <Link key={project.id} to={`/work/${project.slug}`} className="block group">
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-medium tracking-tight">
              Recent Writing
            </h2>
            <Link to="/blog" className="text-sm text-primary flex items-center gap-1 hover:underline">
              Read all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                <div className="flex flex-col space-y-1 p-4 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {post.date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;

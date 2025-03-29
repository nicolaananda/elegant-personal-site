
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
      <section className="min-h-[80vh] flex flex-col justify-center py-20">
        <div className="container-custom max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8 tracking-tighter">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Software Engineer & Designer crafting thoughtful digital experiences with purpose and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/work">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Link to="/contact" className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="featured-projects" className="py-24 border-t border-border">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-3xl font-normal mb-12 tracking-tight">Selected Work</h2>
          
          <div className="grid grid-cols-1 gap-12">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/work/${project.slug}`} className="group">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-normal mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/work" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-24 border-t border-border">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-3xl font-normal mb-12 tracking-tight">Recent Writing</h2>
          
          <div className="space-y-12">
            {recentPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">
                    {post.date.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-2 group-hover:underline decoration-1 underline-offset-4">
                  {post.title}
                </h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/blog" className="flex items-center">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-24 border-t border-border">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-normal mb-6 tracking-tight">Get in Touch</h2>
          <p className="text-xl text-muted-foreground mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

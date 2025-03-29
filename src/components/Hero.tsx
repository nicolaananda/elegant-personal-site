
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium">
              Software Engineer & Designer
            </div>
            
            <h1 className="font-medium">
              Creating thoughtful digital experiences with purpose and precision.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              I'm John Doe, a software engineer and designer specializing in creating beautiful, 
              functional digital products that prioritize user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link to="/work">View My Work</Link>
              </Button>
              
              <Button variant="outline" size="lg" onClick={scrollToProjects}>
                <ArrowDown className="mr-2 h-4 w-4" />
                See Featured Projects
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="rounded-2xl overflow-hidden aspect-square bg-secondary relative">
              {/* Replace with your actual image */}
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800"
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

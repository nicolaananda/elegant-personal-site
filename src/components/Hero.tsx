
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">
              John Doe
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Software Engineer & Designer crafting thoughtful digital experiences.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild variant="default" size="sm">
                <Link to="/work">My Work</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/blog">Blog</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/contact" className="flex items-center gap-1">
                  Contact <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

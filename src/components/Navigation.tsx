
import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm py-4 shadow-sm" : "py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <RouterLink 
          to="/" 
          className="font-medium text-xl tracking-tight hover:opacity-70 transition-opacity"
        >
          John Doe
        </RouterLink>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <RouterLink 
                  to={link.path}
                  className={cn(
                    "link-hover text-sm",
                    location.pathname === link.path ? "after:w-full" : ""
                  )}
                >
                  {link.name}
                </RouterLink>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center gap-1.5 p-2"
        aria-label="Menu"
      >
        <span 
          className={cn(
            "h-0.5 w-6 bg-current transition-transform", 
            isOpen && "translate-y-2 rotate-45"
          )}
        />
        <span 
          className={cn(
            "h-0.5 w-6 bg-current transition-opacity", 
            isOpen && "opacity-0"
          )}
        />
        <span 
          className={cn(
            "h-0.5 w-6 bg-current transition-transform", 
            isOpen && "-translate-y-2 -rotate-45"
          )}
        />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background z-40 animate-fade-in">
          <nav className="container-custom py-12">
            <ul className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <RouterLink 
                    to={link.path}
                    className={cn(
                      "text-2xl font-medium",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;

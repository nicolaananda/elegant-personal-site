
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  tags: string[];
  content?: string;
  technologies?: string[];
  role?: string;
  externalUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Design System",
    slug: "e-commerce-design-system",
    description: "A comprehensive design system for an e-commerce platform, ensuring consistency across all customer touchpoints.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    tags: ["UI/UX", "Design System", "Frontend"],
    technologies: ["React", "TypeScript", "Storybook", "Figma"],
    role: "Lead Designer & Frontend Developer",
    content: "This design system provides a unified language for the e-commerce platform, ensuring consistent user experiences across devices. I created a comprehensive component library, documentation, and implementation guides.",
    externalUrl: "https://github.com",
    featured: true
  },
  {
    id: "2",
    title: "Financial Analytics Dashboard",
    slug: "financial-analytics-dashboard",
    description: "Real-time financial analytics dashboard with interactive data visualization for investment tracking.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    tags: ["Dashboard", "Analytics", "Visualization"],
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    content: "A financial analytics platform providing real-time insights with interactive charts and filtering capabilities. The dashboard includes advanced reporting features, export functionality, and subscription alerts.",
    externalUrl: "https://dribbble.com",
    featured: true
  },
  {
    id: "3",
    title: "Health & Fitness Mobile App",
    slug: "health-fitness-app",
    description: "Mobile app designed for health tracking, workout planning, and nutritional guidance with personalized recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=800",
    tags: ["Mobile", "UI/UX", "Health"],
    technologies: ["React Native", "TypeScript", "Firebase", "HealthKit/Google Fit API"],
    role: "UI/UX Designer & Mobile Developer",
    content: "A comprehensive health and fitness mobile application that helps users track fitness goals, plan workouts, monitor nutrition, and receive AI-powered recommendations based on their progress.",
    externalUrl: "https://behance.net",
    featured: false
  },
  {
    id: "4",
    title: "Content Management System",
    slug: "content-management-system",
    description: "A modern headless CMS built for enterprise content management with multilingual support and advanced workflows.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800",
    tags: ["CMS", "Enterprise", "Backend"],
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    role: "Backend Developer & System Architect",
    content: "A headless CMS designed for large organizations with complex content management needs. The system supports multilingual content, role-based access controls, publishing workflows, and API-based content delivery.",
    externalUrl: "https://github.com",
    featured: false
  },
  {
    id: "5",
    title: "Smart Home IoT Platform",
    slug: "smart-home-platform",
    description: "IoT platform connecting and controlling smart home devices with an intuitive mobile and web interface.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    tags: ["IoT", "Mobile", "Smart Home"],
    technologies: ["React", "Node.js", "MQTT", "MongoDB", "React Native"],
    role: "Full Stack Developer",
    content: "An integrated smart home platform that connects various IoT devices and provides users with centralized control via mobile and web applications. Features include automation rules, voice control integration, and energy consumption analytics.",
    externalUrl: "https://dribbble.com",
    featured: false
  },
  {
    id: "6",
    title: "AI-Powered Learning Platform",
    slug: "ai-learning-platform",
    description: "Educational platform utilizing artificial intelligence to personalize learning paths for students of all ages.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800",
    tags: ["Education", "AI/ML", "Web App"],
    technologies: ["Python", "TensorFlow", "React", "Django", "PostgreSQL"],
    role: "ML Engineer & Frontend Developer",
    content: "An adaptive learning platform that uses AI algorithms to analyze student performance and customize educational content for individual learning styles and progress. The system includes interactive lessons, progress tracking, and educator dashboards.",
    externalUrl: "https://github.com",
    featured: false
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};

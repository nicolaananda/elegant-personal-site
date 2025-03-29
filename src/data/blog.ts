
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: Date;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Designing for Accessibility: Best Practices for Inclusive UIs",
    slug: "designing-for-accessibility",
    excerpt: "Learn how to create interfaces that work for everyone, including users with disabilities, and why accessibility should be a core design principle rather than an afterthought.",
    content: `
# Designing for Accessibility: Best Practices for Inclusive UIs

Creating interfaces that work for everyone, including users with disabilities, is not just a legal requirement but a moral obligation. This article explores key principles and best practices for designing accessible user interfaces.

## Why Accessibility Matters

Accessibility in design ensures that people with disabilities can perceive, understand, navigate, and interact with your websites and applications. By designing with accessibility in mind, you're not only complying with legal standards like WCAG but also creating a better user experience for everyone.

## Key Principles of Accessible Design

### 1. Perceivable Information

- Provide text alternatives for non-text content
- Create content that can be presented in different ways without losing meaning
- Make it easier for users to see and hear content

### 2. Operable Interface

- Make all functionality available from a keyboard
- Give users enough time to read and use content
- Provide ways to help users navigate and find content

### 3. Understandable Information

- Make text readable and understandable
- Make content appear and operate in predictable ways
- Help users avoid and correct mistakes

### 4. Robust Content

- Maximize compatibility with current and future user tools

## Practical Tips for Implementation

1. Use sufficient color contrast ratios between text and backgrounds
2. Provide clear focus indicators for keyboard navigation
3. Include proper semantic HTML elements
4. Add descriptive alt text for images
5. Create a logical tab order for keyboard users
6. Implement ARIA attributes when necessary
7. Test your interfaces with actual assistive technologies

## Conclusion

Accessible design is good design. By following these principles, you'll create interfaces that work better for everyone, not just users with disabilities. Remember that accessibility is a journey, not a destination, and continuous improvement is key.
    `,
    date: new Date("2023-11-15"),
    tags: ["Design", "Accessibility", "UI/UX"],
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200"
    },
    featured: true
  },
  {
    id: "2",
    title: "The Future of Frontend Development: Trends to Watch in 2024",
    slug: "frontend-trends-2024",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of frontend development, from AI-assisted coding to new framework innovations.",
    content: `
# The Future of Frontend Development: Trends to Watch in 2024

The frontend development landscape is constantly evolving. Here are the key trends that will shape how we build user interfaces in 2024 and beyond.

## AI-Assisted Development

AI tools are revolutionizing how we write code. From GitHub Copilot to AI-powered debugging tools, machine learning is making developers more efficient and helping to eliminate repetitive tasks.

## Component-Driven Architecture

The component-based approach continues to dominate frontend development. We're seeing more sophisticated component systems with better composition patterns, state management, and visual testing tools.

## Web Performance Optimization

Core Web Vitals and user-centric performance metrics remain critical. Look for more advanced bundling strategies, improved image formats, and better tools for measuring and optimizing real-world performance.

## WebAssembly Goes Mainstream

WebAssembly is extending what's possible in the browser, enabling high-performance applications that were previously impossible in web environments.

## Micro-Frontends Architecture

Large organizations are increasingly adopting micro-frontends to manage complex applications and enable teams to work independently.

## Server Components and Hybrid Rendering

Next.js, Remix, and other frameworks are blurring the line between client and server, creating more flexible rendering strategies that optimize both performance and developer experience.

## Type Safety Across the Stack

TypeScript's dominance continues to grow, with more tools enabling type safety throughout the entire application stack, from database to UI.

## Conclusion

The frontend development field continues to evolve rapidly. The most successful developers will be those who can balance adopting new technologies with creating maintainable, accessible, and performant user experiences.
    `,
    date: new Date("2023-12-03"),
    tags: ["Development", "Frontend", "Web Tech"],
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200"
    },
    featured: true
  },
  {
    id: "3",
    title: "Creating Performant CSS Animations and Transitions",
    slug: "performant-css-animations",
    excerpt: "Learn how to build smooth, 60fps animations using modern CSS techniques while avoiding common performance pitfalls.",
    content: `
# Creating Performant CSS Animations and Transitions

Well-executed animations can significantly enhance user experience, but poorly implemented ones can cause performance issues. This article explores best practices for creating smooth, efficient CSS animations.

## Understanding the Browser Rendering Pipeline

Before diving into optimization techniques, it's important to understand how browsers render content. The rendering pipeline includes:

1. JavaScript execution
2. Style calculations
3. Layout
4. Paint
5. Composite

Different CSS properties trigger different parts of this pipeline, which affects performance.

## Properties to Animate for Best Performance

For optimal performance, focus on animating these properties:

- transform
- opacity
- filter

These properties only affect compositing, avoiding the expensive layout and paint operations.

## Techniques for Smooth Animations

### Use transform instead of position properties

```css
/* Instead of this */
.element {
  animation: move 1s linear infinite;
}
@keyframes move {
  0% { top: 0; left: 0; }
  100% { top: 100px; left: 100px; }
}

/* Do this */
.element {
  animation: move 1s linear infinite;
}
@keyframes move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(100px, 100px); }
}
```

### Promote elements to their own layer

```css
.element {
  transform: translateZ(0);
  /* or */
  will-change: transform;
}
```

## Measuring Animation Performance

Use Chrome DevTools Performance panel to identify jank and optimization opportunities:

1. Open DevTools (F12)
2. Go to the Performance tab
3. Record while interacting with your animation
4. Look for long frames and rendering bottlenecks

## Conclusion

Creating performant animations requires understanding browser rendering mechanics and choosing the right properties to animate. With these best practices, you can create smooth experiences that delight users without sacrificing performance.
    `,
    date: new Date("2023-10-22"),
    tags: ["CSS", "Animation", "Performance"],
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200"
    },
    featured: false
  },
  {
    id: "4",
    title: "Building a Design System from Scratch",
    slug: "building-design-system",
    excerpt: "A comprehensive guide to creating, documenting, and implementing a design system that scales with your organization's needs.",
    content: `
# Building a Design System from Scratch

A well-implemented design system can transform how teams create digital products. This guide walks through the process of building a design system from initial concept to organization-wide adoption.

## What Is a Design System?

A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It includes:

- UI components
- Design tokens (colors, typography, spacing, etc.)
- Interaction patterns
- Design principles
- Documentation

## Step 1: Audit Your Current Interface

Before building anything new:

1. Document existing UI elements across products
2. Identify inconsistencies and redundancies
3. Determine which components appear most frequently
4. Analyze which patterns are working well and which aren't

## Step 2: Establish Design Foundations

Start by defining your design tokens:

- Color palette
- Typography scale
- Spacing system
- Grid system
- Icon library
- Motion principles

## Step 3: Design Core Components

Begin with the most fundamental, frequently used components:

- Buttons
- Form elements
- Cards
- Navigation elements
- Typography components

## Step 4: Document Everything

For each component, document:

- Usage guidelines
- Props and variants
- Accessibility considerations
- Code examples
- Design assets

## Step 5: Create a Technical Implementation

Choose a technical approach:

- Component library (React, Vue, etc.)
- CSS framework
- Design token system
- Build and distribution system

## Step 6: Plan for Adoption and Governance

Establishing governance includes:

- Creating a contribution process
- Setting up versioning and release processes
- Building a feedback loop
- Planning for maintenance
- Training teams

## Conclusion

Building a design system is a significant investment that pays dividends in consistency, speed, and quality. Start small, focus on high-impact components, and gradually expand your system as you learn what works for your organization.
    `,
    date: new Date("2023-09-18"),
    tags: ["Design Systems", "UI/UX", "Frontend"],
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200"
    },
    featured: false
  },
  {
    id: "5",
    title: "The Role of Typography in Digital Product Design",
    slug: "typography-in-digital-design",
    excerpt: "Explore how typography influences user experience, readability, and brand perception in digital products.",
    content: `
# The Role of Typography in Digital Product Design

Typography is more than just selecting attractive fonts. It's a foundational element that shapes how users read, understand, and feel about digital products. This article explores the critical role typography plays in effective digital design.

## Typography as User Experience

Good typography enhances readability, establishes hierarchy, and communicates brand personality. It affects:

- How quickly users can scan content
- How long they can read without fatigue
- How they perceive the tone and credibility of your content

## Key Typography Principles for Digital Products

### Hierarchy

Establishing a clear typographic hierarchy helps users understand the relationship between different pieces of content:

- Use size, weight, and spacing to differentiate headings, subheadings, and body text
- Maintain consistent heading levels throughout your product
- Use hierarchy to guide users through complex information

### Readability

Optimize for comfortable reading on screens:

- Set appropriate line height (1.5-1.6 for body text)
- Limit line length (45-75 characters per line)
- Ensure sufficient contrast with backgrounds
- Use appropriate font sizes (16px minimum for body text)

### Responsive Typography

Design typography that works across devices:

- Use relative units (rem, em) instead of fixed units (px)
- Consider how font sizes scale across breakpoints
- Test readability on various screen sizes

## Selecting the Right Typefaces

When choosing fonts for digital products, consider:

### Technical Considerations
- Web performance (file size, loading time)
- Cross-browser and cross-device compatibility
- Available weights and styles

### Functional Considerations
- Readability at different sizes
- Distinctiveness of letterforms
- Support for multiple languages

### Brand Alignment
- Does it match your brand personality?
- Does it complement your visual identity?
- Will it age well over time?

## Conclusion

Typography is not merely decorative—it's functional, experiential, and foundational to good digital design. By treating typography as a core design element rather than an afterthought, you can significantly enhance the usability and impact of your digital products.
    `,
    date: new Date("2023-08-05"),
    tags: ["Typography", "Design", "UI/UX"],
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=200"
    },
    featured: false
  }
];

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured).sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getRecentPosts = (limit: number = 3) => {
  return blogPosts.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, limit);
};

export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

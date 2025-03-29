
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = blogPosts
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  
  return (
    <Layout>
      <section className="pt-12 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h1 className="font-medium mb-6">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Thoughts, insights, and perspectives on design, development, and technology.
            </p>
          </div>
          
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          
          <div className="bg-background rounded-xl p-6 md:p-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.excerpt}
                  date={post.date}
                  tags={post.tags}
                />
              ))
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

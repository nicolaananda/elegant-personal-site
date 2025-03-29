
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Share2 } from 'lucide-react';
import { getBlogPostBySlug } from '@/data/blog';
import { format } from 'date-fns';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }
  
  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };
  
  return (
    <Layout>
      <article className="pt-12 pb-20">
        <div className="container-custom max-w-4xl">
          <Link 
            to="/blog"
            className="inline-flex items-center text-sm mb-12 hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date.toISOString()}>
                {format(post.date, 'MMM d, yyyy')}
              </time>
              <span>·</span>
              <div className="flex gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
            
            <h1 className="font-medium mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img 
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={sharePost}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="prose prose-neutral max-w-none">
            {post.content.split('\n').map((paragraph, idx) => {
              // Handle Markdown headings
              if (paragraph.startsWith('# ')) {
                return <h1 key={idx} className="mt-8 mb-4 text-3xl font-medium">{paragraph.substring(2)}</h1>;
              } else if (paragraph.startsWith('## ')) {
                return <h2 key={idx} className="mt-6 mb-4 text-2xl font-medium">{paragraph.substring(3)}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={idx} className="mt-5 mb-3 text-xl font-medium">{paragraph.substring(4)}</h3>;
              }
              
              // Handle lists (very basic implementation)
              if (paragraph.startsWith('- ')) {
                return <li key={idx} className="ml-6">{paragraph.substring(2)}</li>;
              }
              
              // Handle code blocks (very basic implementation)
              if (paragraph.startsWith('```')) {
                return <pre key={idx} className="bg-secondary p-4 rounded-md my-4"><code>{paragraph.substring(3)}</code></pre>;
              }
              
              // Regular paragraphs
              if (paragraph.trim() !== '') {
                return <p key={idx} className="my-4">{paragraph}</p>;
              }
              
              return null;
            })}
          </div>
          
          <div className="mt-16 pt-8 border-t border-border">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogDetail;

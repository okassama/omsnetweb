import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight, Shield, Eye, Zap, Cloud } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Rise of AI-Powered Cyber Threats in 2025',
      excerpt: 'How artificial intelligence is being weaponized by cybercriminals and what organizations can do to protect themselves.',
      author: 'Sarah Chen',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Threat Intelligence',
      icon: Shield,
    },
    {
      id: 2,
      title: 'Zero Trust Architecture: Beyond the Hype',
      excerpt: 'Implementing true zero trust principles in modern enterprise environments and overcoming common challenges.',
      author: 'Marcus Rodriguez',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Network Security',
      icon: Eye,
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for Multi-Cloud Environments',
      excerpt: 'Essential security measures for organizations operating across multiple cloud platforms and maintaining compliance.',
      author: 'Dr. Emily Watson',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Cloud Security',
      icon: Cloud,
    },
    {
      id: 4,
      title: 'Incident Response: Preparing for the Inevitable',
      excerpt: 'Building effective incident response plans that minimize damage and ensure business continuity during cyber attacks.',
      author: 'Alex Thompson',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Incident Response',
      icon: Zap,
    },
    {
      id: 5,
      title: 'The Human Factor: Social Engineering Defense Strategies',
      excerpt: 'Training employees to recognize and prevent social engineering attacks that bypass technical security controls.',
      author: 'Lisa Park',
      date: '2025-01-02',
      readTime: '4 min read',
      category: 'Security Awareness',
      icon: Shield,
    },
    {
      id: 6,
      title: 'Compliance in 2025: Navigating New Regulations',
      excerpt: 'Understanding the latest cybersecurity regulations and maintaining compliance across different industries.',
      author: 'David Wilson',
      date: '2024-12-28',
      readTime: '9 min read',
      category: 'Compliance',
      icon: Eye,
    },
  ];

  const categories = [
    'All Posts',
    'Threat Intelligence',
    'Network Security',
    'Cloud Security',
    'Incident Response',
    'Security Awareness',
    'Compliance',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Cybersecurity
              <span className="text-primary block gradient-text animate-float">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Expert analysis, threat intelligence, and security best practices from our team of cybersecurity professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                onClick={() => document.getElementById('latest-posts')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Read Latest
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift"
                onClick={() => window.location.href = '/contact'}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="latest-posts" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Latest Cybersecurity Insights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Stay informed with the latest threat intelligence, security trends, and expert analysis.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === 'All Posts' ? 'default' : 'outline'}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow hover-lift animate-slide-up group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.location.href = `/blog/${post.id}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <post.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{post.category}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-primary/10 rounded-lg p-8 border border-primary/20 animate-float">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest cybersecurity insights and threat intelligence delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="glow hover-lift hover-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

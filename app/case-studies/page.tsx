import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingUp, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Global Bank Security Transformation',
      client: 'Major International Bank',
      industry: 'Financial Services',
      challenge: 'Facing sophisticated cyber threats and regulatory compliance requirements',
      solution: 'Implemented comprehensive security framework with 24/7 monitoring',
      results: [
        '99.9% threat detection accuracy',
        '50% reduction in security incidents',
        'Full regulatory compliance achieved',
        '15-minute incident response time'
      ],
      metrics: [
        { label: 'Security Incidents', value: '50%', change: 'reduction' },
        { label: 'Response Time', value: '15min', change: 'improvement' },
        { label: 'Compliance Score', value: '100%', change: 'achieved' }
      ]
    },
    {
      id: 2,
      title: 'Healthcare Data Protection',
      client: 'Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Protecting sensitive patient data and meeting HIPAA requirements',
      solution: 'Advanced encryption and access control systems',
      results: [
        'Zero data breaches since implementation',
        'HIPAA certification achieved',
        '98% staff security awareness',
        'Automated compliance reporting'
      ],
      metrics: [
        { label: 'Data Breaches', value: '0', change: 'prevented' },
        { label: 'HIPAA Compliance', value: '100%', change: 'achieved' },
        { label: 'Staff Training', value: '98%', change: 'completion' }
      ]
    },
    {
      id: 3,
      title: 'E-commerce Fraud Prevention',
      client: 'Online Retail Platform',
      industry: 'E-commerce',
      challenge: 'High-volume fraud attempts and payment security concerns',
      solution: 'AI-powered fraud detection and real-time monitoring',
      results: [
        '95% fraud detection rate',
        '30% reduction in false positives',
        'Real-time transaction monitoring',
        'Customer trust significantly improved'
      ],
      metrics: [
        { label: 'Fraud Detection', value: '95%', change: 'accuracy' },
        { label: 'False Positives', value: '30%', change: 'reduction' },
        { label: 'Response Time', value: 'Real-time', change: 'monitoring' }
      ]
    }
  ];

  const industries = [
    'All Industries',
    'Financial Services',
    'Healthcare',
    'E-commerce',
    'Manufacturing',
    'Technology'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Client
              <span className="text-primary block gradient-text animate-float">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Real-world cybersecurity success stories showcasing how we protect businesses and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Case Studies
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift"
                onClick={() => window.location.href = '/contact'}
              >
                Get Similar Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Proven Cybersecurity Results</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              See how our cybersecurity solutions have transformed security postures across various industries.
            </p>
          </div>

          {/* Industry Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {industries.map((industry, index) => (
              <Button
                key={industry}
                variant={industry === 'All Industries' ? 'default' : 'outline'}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {industry}
              </Button>
            ))}
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.id} 
                className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl lg:text-3xl mb-2">{study.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{study.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Shield className="h-4 w-4" />
                          <span>{study.industry}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="glow hover-lift hover-glow">
                      View Full Study
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">The Challenge</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">Our Solution</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-primary">Measurable Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {study.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="bg-primary/10 rounded-lg p-6 text-center border border-primary/20 animate-float"
                        style={{ animationDelay: `${metricIndex * 0.1}s` }}
                      >
                        <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                        <div className="text-xs text-primary mt-1">{metric.change}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-primary/10 rounded-lg p-8 border border-primary/20 animate-float">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Success Story?</h3>
              <p className="text-muted-foreground mb-6">
                Let us help you achieve similar cybersecurity results and protect your business from evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="glow hover-lift hover-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Security Transformation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Our Services
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

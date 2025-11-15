import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Eye, Zap } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Advanced network protection with real-time threat detection and prevention systems.',
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with comprehensive security controls and monitoring.',
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive threat identification and analysis to stay ahead of emerging risks.',
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: '24/7 incident response teams ready to mitigate and contain security breaches.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Inc',
      content: 'Omsnet transformed our security posture. Their threat intelligence is unmatched.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Security Director, Global Bank',
      content: 'The incident response team prevented a major breach that could have cost millions.',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'CIO, HealthFirst',
      content: 'Compliance and governance services helped us achieve HIPAA certification seamlessly.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Digital Security
              <span className="text-primary block">Fortified</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade cybersecurity solutions protecting your most valuable digital assets with cutting-edge technology and expert threat intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glow text-lg px-8 py-4">
                Get Protected
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end cybersecurity solutions tailored to protect your enterprise from evolving threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">15min</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about our cybersecurity expertise and service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/40">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-lg italic">&ldquo;{testimonial.content}&rdquo;</p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Secure Your Digital Assets?</h2>
            <p className="text-xl text-muted-foreground">
              Schedule a consultation with our cybersecurity experts and get a comprehensive security assessment.
            </p>
            <Button size="lg" className="glow text-lg px-8 py-4">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

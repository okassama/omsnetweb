'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { VisitorInfo } from '@/components/visitor-info';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Cloud, Eye, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
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


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Side-by-Side Layout */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
                  Digital Security
                  <span className="text-primary block gradient-text animate-float">Fortified</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-slide-up">
                  Enterprise-grade cybersecurity solutions protecting your most valuable digital assets with cutting-edge technology and expert threat intelligence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
                <Button 
                  size="lg" 
                  className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                  onClick={() => router.push('/contact')}
                >
                  Get Protected
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 hover-lift"
                  onClick={() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Visitor Information */}
            <div className="space-y-6">
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold animate-fade-in">Real-Time Security Monitoring</h2>
                <p className="text-lg text-muted-foreground animate-slide-up">
                  See your connection details and security status in real-time
                </p>
              </div>
              <VisitorInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Comprehensive Security Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              End-to-end cybersecurity solutions tailored to protect your enterprise from evolving threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4 animate-float" />
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
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary animate-pulse-slow">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary animate-pulse-slow">24/7</div>
              <div className="text-muted-foreground">Security Monitoring</div>
            </div>
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary animate-pulse-slow">15min</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact CTA Section */}
      <section id="contact-cta" className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Ready to Secure Your Digital Assets?</h2>
            <p className="text-xl text-muted-foreground animate-slide-up">
              Contact us today for a comprehensive security assessment and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                onClick={() => router.push('/contact')}
              >
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift"
                onClick={() => window.location.href = 'tel:01135347445'}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

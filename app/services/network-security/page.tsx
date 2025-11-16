'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Zap, Users, CheckCircle } from 'lucide-react';

export default function NetworkSecurity() {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Firewall Protection',
      description: 'Next-generation firewall systems with deep packet inspection and intrusion prevention.',
    },
    {
      icon: Eye,
      title: 'Real-time Threat Detection',
      description: 'AI-powered threat detection that identifies and blocks malicious activity in real-time.',
    },
    {
      icon: Zap,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust principles to verify every access request regardless of source.',
    },
    {
      icon: Users,
      title: 'Access Control Management',
      description: 'Granular access controls and identity management for secure user authentication.',
    },
  ];

  const benefits = [
    '99.9% network uptime guarantee',
    '24/7 security monitoring',
    'Real-time threat intelligence',
    'Compliance with industry standards',
    'Regular security assessments',
    'Incident response planning',
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Network
              <span className="text-primary block gradient-text animate-float">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Advanced network protection with real-time threat detection and prevention systems to secure your digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                onClick={() => window.location.href = '/contact'}
              >
                Get Protected
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Comprehensive Network Protection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Our network security solutions provide multi-layered protection for your entire infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4 animate-float" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Why Choose Our Network Security?</h2>
              <p className="text-lg text-muted-foreground animate-slide-up">
                Protect your network infrastructure with enterprise-grade security solutions designed to prevent, detect, and respond to cyber threats.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-primary/10 rounded-lg p-8 border border-primary/20 animate-float">
                <h3 className="text-2xl font-bold mb-4">Security Assessment</h3>
                <p className="text-muted-foreground mb-6">
                  Get a comprehensive network security assessment to identify vulnerabilities and strengthen your defenses.
                </p>
                <Button 
                  className="w-full glow hover-lift hover-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Assessment
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

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Cloud, Eye, Zap, FileCheck, Users, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network protection with advanced threat detection.',
      features: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation'],
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure across all major platforms.',
      features: ['AWS Security', 'Azure Protection', 'GCP Security', 'Cloud Compliance'],
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Proactive threat identification and risk assessment.',
      features: ['Threat Monitoring', 'Risk Analysis', 'Vulnerability Assessment', 'Security Analytics'],
    },
    {
      icon: Zap,
      title: 'Incident Response',
      description: '24/7 incident response and breach containment.',
      features: ['Emergency Response', 'Forensic Analysis', 'Breach Containment', 'Recovery Planning'],
    },
    {
      icon: FileCheck,
      title: 'Compliance & Governance',
      description: 'Meet regulatory requirements and industry standards.',
      features: ['SOC 2 Compliance', 'HIPAA Certification', 'GDPR Compliance', 'ISO 27001'],
    },
    {
      icon: Users,
      title: 'Security Consulting',
      description: 'Expert guidance for your security strategy and architecture.',
      features: ['Security Audits', 'Architecture Review', 'Policy Development', 'Training Programs'],
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
              Security
              <span className="text-primary block">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity services designed to protect your enterprise from evolving threats and ensure regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
                <CardHeader className="pb-4">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
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
            <h2 className="text-3xl md:text-4xl font-bold">Need Custom Security Solutions?</h2>
            <p className="text-xl text-muted-foreground">
              Our experts can design tailored security solutions to meet your specific business requirements.
            </p>
            <Button size="lg" className="glow text-lg px-8 py-4">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Shield, Target, Award, Users } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Security Officer',
      bio: 'Former cybersecurity lead at Fortune 500 companies with 15+ years experience.',
      avatar: '/api/placeholder/100/100',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Threat Intelligence',
      bio: 'Expert in advanced threat detection and cybercrime investigation.',
      avatar: '/api/placeholder/100/100',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Compliance Director',
      bio: 'Specialized in regulatory compliance and security governance frameworks.',
      avatar: '/api/placeholder/100/100',
    },
    {
      name: 'Alex Thompson',
      role: 'Cloud Security Architect',
      bio: 'Cloud security specialist with certifications across AWS, Azure, and GCP.',
      avatar: '/api/placeholder/100/100',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every decision is made with security as the top priority.',
    },
    {
      icon: Target,
      title: 'Proactive Defense',
      description: 'We anticipate threats before they become incidents.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your security team.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver enterprise-grade solutions with precision.',
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
              About
              <span className="text-primary block">Omsnet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the cybersecurity industry with innovative solutions and unparalleled expertise since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To provide enterprise-grade cybersecurity solutions that empower organizations to operate securely in an increasingly digital world. We believe that security should be an enabler, not a barrier to innovation.
              </p>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, Omsnet Digital Fortress has grown from a small team of security experts to a global leader in cybersecurity services, protecting over 500 enterprise clients across multiple industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border/40 text-center">
                  <CardHeader>
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the experts behind our cutting-edge cybersecurity solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border/40 text-center">
                <CardContent className="pt-6">
                  <Avatar className="h-20 w-20 mx-auto mb-4">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium mb-2">
                    {member.role}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-muted-foreground">
            <div className="text-lg font-semibold">ISO 27001</div>
            <div className="text-lg font-semibold">SOC 2 Type II</div>
            <div className="text-lg font-semibold">CISSP</div>
            <div className="text-lg font-semibold">AWS Partner</div>
            <div className="text-lg font-semibold">Azure Security</div>
            <div className="text-lg font-semibold">GCP Security</div>
            <div className="text-lg font-semibold">PCI DSS</div>
            <div className="text-lg font-semibold">HIPAA Compliant</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

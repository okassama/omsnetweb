'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Shield, Lock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Resources() {
  const router = useRouter();
  const resources = [
    {
      id: 1,
      title: 'Cybersecurity Best Practices Guide',
      description: 'Comprehensive guide to implementing essential cybersecurity measures for businesses of all sizes.',
      type: 'PDF Guide',
      pages: '24 pages',
      downloadCount: '1,234 downloads',
      icon: Shield,
      category: 'Security Guides'
    },
    {
      id: 2,
      title: 'Incident Response Plan Template',
      description: 'Ready-to-use incident response plan template with step-by-step procedures for security incidents.',
      type: 'Template',
      pages: '18 pages',
      downloadCount: '892 downloads',
      icon: FileText,
      category: 'Templates'
    },
    {
      id: 3,
      title: 'Employee Security Awareness Checklist',
      description: 'Checklist for implementing and maintaining effective security awareness training programs.',
      type: 'Checklist',
      pages: '8 pages',
      downloadCount: '2,156 downloads',
      icon: Users,
      category: 'Checklists'
    },
    {
      id: 4,
      title: 'Data Encryption Implementation Guide',
      description: 'Step-by-step guide to implementing data encryption across your organization.',
      type: 'Technical Guide',
      pages: '32 pages',
      downloadCount: '567 downloads',
      icon: Lock,
      category: 'Technical Guides'
    },
    {
      id: 5,
      title: 'Compliance Requirements Matrix',
      description: 'Comparison matrix of major compliance frameworks (GDPR, HIPAA, PCI DSS, ISO 27001).',
      type: 'Reference',
      pages: '12 pages',
      downloadCount: '1,789 downloads',
      icon: CheckCircle,
      category: 'Compliance'
    },
    {
      id: 6,
      title: 'Security Policy Templates Bundle',
      description: 'Complete set of security policy templates including acceptable use, data protection, and more.',
      type: 'Template Bundle',
      pages: '45 pages',
      downloadCount: '987 downloads',
      icon: FileText,
      category: 'Templates'
    }
  ];

  const categories = [
    'All Resources',
    'Security Guides',
    'Templates',
    'Checklists',
    'Technical Guides',
    'Compliance'
  ];

  const generateTemplateContent = (resource: any) => {
    const templates = {
      1: `Omsnet Digital Fortress - Cybersecurity Best Practices Guide

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

TABLE OF CONTENTS:
1. Executive Summary
2. Network Security Best Practices
3. Data Protection Guidelines
4. Access Control Policies
5. Incident Response Procedures
6. Employee Training Requirements
7. Compliance Framework
8. Implementation Checklist

This comprehensive guide provides step-by-step instructions for implementing essential cybersecurity measures across your organization.

© 2025 Omsnet Digital Fortress - All Rights Reserved`,

      2: `Omsnet Digital Fortress - Incident Response Plan Template

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

INCIDENT RESPONSE PLAN TEMPLATE:

1. PREPARATION PHASE
   - Incident Response Team Roles & Responsibilities
   - Communication Plan
   - Resource Inventory
   - Training Schedule

2. DETECTION & ANALYSIS
   - Monitoring Procedures
   - Alert Thresholds
   - Analysis Methodology
   - Escalation Criteria

3. CONTAINMENT & ERADICATION
   - Immediate Actions
   - System Isolation
   - Threat Removal
   - Evidence Preservation

4. RECOVERY
   - System Restoration
   - Service Validation
   - Monitoring Post-Recovery

5. POST-INCIDENT ACTIVITY
   - Lessons Learned
   - Documentation Updates
   - Process Improvements

© 2025 Omsnet Digital Fortress - All Rights Reserved`,

      3: `Omsnet Digital Fortress - Employee Security Awareness Checklist

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

SECURITY AWARENESS CHECKLIST:

[ ] 1. BASIC SECURITY PRACTICES
    [ ] Password complexity requirements
    [ ] Multi-factor authentication
    [ ] Secure file sharing
    [ ] Device security

[ ] 2. PHISHING AWARENESS
    [ ] Recognize phishing attempts
    [ ] Report suspicious emails
    [ ] Verify sender authenticity
    [ ] Avoid clicking unknown links

[ ] 3. DATA PROTECTION
    [ ] Classify sensitive data
    [ ] Secure data storage
    [ ] Proper data disposal
    [ ] Encryption requirements

[ ] 4. PHYSICAL SECURITY
    [ ] Secure workstation
    [ ] Visitor procedures
    [ ] Document handling
    [ ] Access control

[ ] 5. INCIDENT REPORTING
    [ ] Report security incidents
    [ ] Contact information
    [ ] Emergency procedures
    [ ] Documentation requirements

© 2025 Omsnet Digital Fortress - All Rights Reserved`,

      4: `Omsnet Digital Fortress - Data Encryption Implementation Guide

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

DATA ENCRYPTION IMPLEMENTATION GUIDE:

1. ASSESSMENT PHASE
   - Data Classification
   - Risk Assessment
   - Compliance Requirements
   - Technical Requirements

2. PLANNING PHASE
   - Encryption Strategy
   - Key Management Plan
   - Implementation Timeline
   - Resource Allocation

3. IMPLEMENTATION PHASE
   - Data-at-Rest Encryption
   - Data-in-Transit Encryption
   - Key Management System
   - Access Controls

4. TESTING & VALIDATION
   - Encryption Verification
   - Performance Testing
   - Security Testing
   - Compliance Validation

5. MAINTENANCE & MONITORING
   - Regular Audits
   - Key Rotation
   - Performance Monitoring
   - Incident Response

© 2025 Omsnet Digital Fortress - All Rights Reserved`,

      5: `Omsnet Digital Fortress - Compliance Requirements Matrix

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

COMPLIANCE FRAMEWORKS MATRIX:

FRAMEWORK | DATA PROTECTION | ACCESS CONTROL | INCIDENT RESPONSE | AUDITING
----------|----------------|----------------|-------------------|----------
GDPR      | Encryption     | Role-based     | 72-hour reporting | Annual
HIPAA     | PHI Protection | Minimum Necessary| Risk Analysis    | Regular
PCI DSS   | Card Data      | Multi-factor    | Incident Response | Quarterly
ISO 27001 | Risk-based     | Access Reviews  | Continuous Improvement| Annual
SOC 2     | Confidentiality| Logical Access  | Security Monitoring| Annual

IMPLEMENTATION GUIDANCE:
- Conduct gap analysis for each framework
- Prioritize based on business requirements
- Implement controls systematically
- Maintain documentation
- Regular compliance assessments

© 2025 Omsnet Digital Fortress - All Rights Reserved`,

      6: `Omsnet Digital Fortress - Security Policy Templates Bundle

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${new Date().toLocaleDateString()}

${resource.title}
${'='.repeat(resource.title.length)}

${resource.description}

SECURITY POLICY TEMPLATES INCLUDED:

1. ACCEPTABLE USE POLICY
   - System Usage Guidelines
   - Prohibited Activities
   - Monitoring & Enforcement
   - Consequences for Violations

2. DATA PROTECTION POLICY
   - Data Classification
   - Handling Procedures
   - Storage Requirements
   - Disposal Methods

3. ACCESS CONTROL POLICY
   - User Account Management
   - Authentication Requirements
   - Privilege Management
   - Access Reviews

4. INCIDENT RESPONSE POLICY
   - Response Team Structure
   - Communication Procedures
   - Investigation Process
   - Recovery Procedures

5. PHYSICAL SECURITY POLICY
   - Facility Access
   - Equipment Security
   - Visitor Management
   - Environmental Controls

6. REMOTE WORK POLICY
   - Device Requirements
   - Network Security
   - Data Handling
   - Compliance Requirements

© 2025 Omsnet Digital Fortress - All Rights Reserved`
    };

    return templates[resource.id as keyof typeof templates] || `Omsnet Digital Fortress - ${resource.title}\n\n${resource.description}\n\nContact: contact@omsnet.co.uk | Phone: 0113 534 7445\nDate: ${new Date().toLocaleDateString()}`;
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in">
              Cybersecurity
              <span className="text-primary block gradient-text animate-float">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Free cybersecurity resources, templates, and guides to help strengthen your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button 
                size="lg" 
                className="glow text-lg px-8 py-4 hover-lift hover-glow animate-pulse-slow"
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Browse Resources
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 hover-lift"
                onClick={() => window.location.href = '/security-assessment'}
              >
                Take Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Free Cybersecurity Resources</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Download our comprehensive cybersecurity resources to enhance your security strategy.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === 'All Resources' ? 'default' : 'outline'}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card 
                key={resource.id} 
                className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow hover-lift animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <resource.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{resource.category}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{resource.type}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{resource.pages}</span>
                    <span>{resource.downloadCount}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 glow hover-lift hover-glow flex items-center space-x-2"
                      onClick={() => {
                        // Create and download the template
                        const templateContent = generateTemplateContent(resource);
                        const element = document.createElement('a');
                        const file = new Blob([templateContent], { type: 'text/plain' });
                        element.href = URL.createObjectURL(file);
                        element.download = `${resource.title.replace(/\s+/g, '-').toLowerCase()}-template.txt`;
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                      }}
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                    <Button variant="outline" size="icon" className="group-hover:border-primary/50">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-primary/10 rounded-lg p-8 border border-primary/20 animate-float">
              <h3 className="text-2xl font-bold mb-4">Get New Resources First</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to receive new cybersecurity resources, guides, and updates directly to your inbox.
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

      {/* Benefits Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">Why Use Our Resources?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Our cybersecurity resources are designed by experts to help you implement effective security measures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Shield className="h-12 w-12 text-primary mx-auto animate-float" />
              <h3 className="text-xl font-semibold">Expert-Created</h3>
              <p className="text-muted-foreground">
                All resources are created by certified cybersecurity professionals with real-world experience.
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CheckCircle className="h-12 w-12 text-primary mx-auto animate-float" />
              <h3 className="text-xl font-semibold">Ready to Use</h3>
              <p className="text-muted-foreground">
                Templates and guides are immediately actionable and can be customized for your organization.
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Users className="h-12 w-12 text-primary mx-auto animate-float" />
              <h3 className="text-xl font-semibold">Community Trusted</h3>
              <p className="text-muted-foreground">
                Thousands of security professionals trust and use our resources worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

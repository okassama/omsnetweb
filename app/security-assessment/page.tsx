'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, TrendingUp, Download, Send } from 'lucide-react';

export default function SecurityAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const assessmentQuestions = [
    {
      id: 'network_security',
      question: 'How would you rate your current network security measures?',
      options: [
        { value: 1, label: 'Basic - Limited firewall and basic monitoring' },
        { value: 2, label: 'Standard - Firewall, some monitoring, basic policies' },
        { value: 3, label: 'Advanced - Multi-layer security, regular assessments' },
        { value: 4, label: 'Enterprise - Advanced threat detection, 24/7 monitoring' }
      ]
    },
    {
      id: 'data_protection',
      question: 'How is your sensitive data currently protected?',
      options: [
        { value: 1, label: 'Limited - Basic file permissions, no encryption' },
        { value: 2, label: 'Standard - Some encryption, basic access controls' },
        { value: 3, label: 'Advanced - Full encryption, role-based access' },
        { value: 4, label: 'Enterprise - Advanced DLP, encryption everywhere' }
      ]
    },
    {
      id: 'incident_response',
      question: 'What is your incident response capability?',
      options: [
        { value: 1, label: 'None - No formal incident response plan' },
        { value: 2, label: 'Basic - Some documentation, limited testing' },
        { value: 3, label: 'Advanced - Documented plan, regular testing' },
        { value: 4, label: 'Enterprise - Automated response, 24/7 SOC' }
      ]
    },
    {
      id: 'compliance',
      question: 'How would you describe your compliance posture?',
      options: [
        { value: 1, label: 'Non-compliant - Not meeting basic requirements' },
        { value: 2, label: 'Partial - Meeting some but not all requirements' },
        { value: 3, label: 'Compliant - Meeting all current requirements' },
        { value: 4, label: 'Advanced - Exceeding requirements, proactive compliance' }
      ]
    },
    {
      id: 'employee_training',
      question: 'How comprehensive is your security awareness training?',
      options: [
        { value: 1, label: 'None - No formal security training program' },
        { value: 2, label: 'Basic - Annual training, limited coverage' },
        { value: 3, label: 'Advanced - Regular training, phishing simulations' },
        { value: 4, label: 'Enterprise - Continuous training, advanced simulations' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < assessmentQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = assessmentQuestions.length * 4;
    return Math.round((totalScore / maxScore) * 100);
  };

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { level: 'Low Risk', color: 'text-green-500', description: 'Strong security posture' };
    if (score >= 60) return { level: 'Moderate Risk', color: 'text-yellow-500', description: 'Some areas need improvement' };
    if (score >= 40) return { level: 'High Risk', color: 'text-orange-500', description: 'Significant security gaps' };
    return { level: 'Critical Risk', color: 'text-red-500', description: 'Immediate action required' };
  };

  const getRecommendations = (score: number) => {
    const recommendations = [];
    
    if (score < 60) {
      recommendations.push('Implement comprehensive security framework');
      recommendations.push('Establish 24/7 security monitoring');
      recommendations.push('Develop incident response plan');
    }
    
    if (score < 70) {
      recommendations.push('Enhance employee security training');
      recommendations.push('Implement advanced threat detection');
      recommendations.push('Regular security assessments');
    }
    
    if (score < 80) {
      recommendations.push('Advanced encryption implementation');
      recommendations.push('Multi-factor authentication');
      recommendations.push('Regular penetration testing');
    }

    recommendations.push('Continuous security improvement program');
    
    return recommendations;
  };

  const generateAssessmentReport = (score: number, riskLevel: any, recommendations: string[], questions: any[], answers: Record<string, number>) => {
    const currentDate = new Date().toLocaleDateString();
    
    return `Omsnet Digital Fortress - Security Assessment Report

COMPANY: Omsnet Digital Fortress
CONTACT: contact@omsnet.co.uk | 0113 534 7445
DATE: ${currentDate}
REPORT ID: SA-${Date.now()}

EXECUTIVE SUMMARY

Overall Security Score: ${score}%
Risk Level: ${riskLevel.level}
Assessment Date: ${currentDate}

${riskLevel.description}

This report provides a comprehensive analysis of your organization's cybersecurity posture based on the assessment completed on ${currentDate}. The assessment evaluates key security domains including network security, data protection, incident response, compliance, and employee training.

DETAILED SCORING BREAKDOWN

${questions.map((q, index) => {
  const answerScore = answers[q.id] || 0;
  const percentage = (answerScore / 4) * 100;
  const rating = answerScore >= 3 ? 'Strong' : answerScore >= 2 ? 'Moderate' : 'Weak';
  return `${index + 1}. ${q.question}
   Score: ${answerScore}/4 (${percentage}%) - ${rating}`;
}).join('\n\n')}

RECOMMENDED ACTIONS

Based on your assessment results, we recommend the following actions to improve your security posture:

${recommendations.map((rec, index) => `${index + 1}. ${rec}`).join('\n')}

PRIORITY IMPLEMENTATION PLAN

HIGH PRIORITY (Immediate - 30 days):
- Implement comprehensive security framework
- Establish 24/7 security monitoring
- Develop incident response plan

MEDIUM PRIORITY (30-90 days):
- Enhance employee security training
- Implement advanced threat detection
- Regular security assessments

LONG-TERM (90+ days):
- Advanced encryption implementation
- Multi-factor authentication
- Regular penetration testing
- Continuous security improvement program

NEXT STEPS

1. Schedule a consultation with our security experts
2. Review and implement the recommended actions
3. Conduct follow-up assessments every 6 months
4. Consider our managed security services for ongoing protection

CONTACT INFORMATION

Omsnet Digital Fortress
Email: contact@omsnet.co.uk
Phone: 0113 534 7445
Location: Leeds, West Yorkshire

We specialize in helping organizations like yours build robust cybersecurity defenses and maintain compliance with industry standards.

© 2025 Omsnet Digital Fortress - All Rights Reserved
This report is confidential and intended for the recipient only.`;
  };

  const currentQuestion = assessmentQuestions[currentStep];
  const score = calculateScore();
  const riskLevel = getRiskLevel(score);
  const recommendations = getRecommendations(score);

  if (showResults) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        {/* Results Section */}
        <section className="relative overflow-hidden cyber-grid">
          <div className="container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-8 mb-12">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                  Security Assessment
                  <span className="text-primary block gradient-text animate-float">Results</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-slide-up">
                  Your cybersecurity posture analysis and recommendations
                </p>
              </div>

              {/* Score Card */}
              <Card className="border-border/40 hover:glow hover-lift transition-all duration-300 mb-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl mb-4">Your Security Score</CardTitle>
                  <div className="flex items-center justify-center space-x-4">
                    <div className={`text-6xl font-bold ${riskLevel.color}`}>
                      {score}%
                    </div>
                    <div className="text-left">
                      <div className={`text-xl font-semibold ${riskLevel.color}`}>
                        {riskLevel.level}
                      </div>
                      <div className="text-muted-foreground">
                        {riskLevel.description}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Progress value={score} className="h-3" />
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="border-border/40 hover:glow hover-lift transition-all duration-300 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6 text-primary" />
                    <span>Recommended Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recommendations.map((rec, index) => (
                      <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{rec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Analysis */}
              <Card className="border-border/40 hover:glow hover-lift transition-all duration-300 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Detailed Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {assessmentQuestions.map((question, index) => (
                      <div key={question.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{question.question}</span>
                          <span className={`text-sm font-semibold ${
                            answers[question.id] >= 3 ? 'text-green-500' : 
                            answers[question.id] >= 2 ? 'text-yellow-500' : 'text-red-500'
                          }`}>
                            {answers[question.id] || 0}/4
                          </span>
                        </div>
                        <Progress 
                          value={((answers[question.id] || 0) / 4) * 100} 
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Email Capture */}
              <Card className="border-border/40 hover:glow hover-lift transition-all duration-300">
                <CardHeader>
                  <CardTitle>Get Your Detailed Report</CardTitle>
                  <CardDescription>
                    Enter your email to receive a comprehensive security assessment report with detailed recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <div className="flex gap-2">
                      <Button 
                        className="glow hover-lift hover-glow flex items-center space-x-2"
                        onClick={() => {
                          if (email) {
                            alert(`Thank you! Your security assessment report has been sent to ${email}`);
                          } else {
                            alert('Please enter your email address to receive the report.');
                          }
                        }}
                      >
                        <Send className="h-4 w-4" />
                        <span>Get Report</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex items-center space-x-2"
                        onClick={() => {
                          // Create a professional PDF-like report
                          const reportContent = generateAssessmentReport(score, riskLevel, recommendations, assessmentQuestions, answers);
                          const element = document.createElement('a');
                          const file = new Blob([reportContent], { type: 'text/plain' });
                          element.href = URL.createObjectURL(file);
                          element.download = `omsnet-security-assessment-report-${score}-${Date.now()}.txt`;
                          document.body.appendChild(element);
                          element.click();
                          document.body.removeChild(element);
                        }}
                      >
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="glow text-lg px-8 py-4 hover-lift hover-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Security Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Assessment Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
                Security
                <span className="text-primary block gradient-text animate-float">Assessment</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up">
                Evaluate your cybersecurity posture and receive personalized recommendations in just 5 minutes.
              </p>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Question {currentStep + 1} of {assessmentQuestions.length}</span>
                <span>{Math.round(((currentStep + 1) / assessmentQuestions.length) * 100)}% Complete</span>
              </div>
              <Progress value={((currentStep + 1) / assessmentQuestions.length) * 100} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="border-border/40 hover:glow hover-lift transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option.value)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 hover:glow hover-lift ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-primary bg-primary'
                          : 'border-border'
                      }`}>
                        {answers[currentQuestion.id] === option.value && (
                          <div className="h-2 w-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span>{option.label}</span>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                className="glow hover-lift hover-glow"
                onClick={nextStep}
                disabled={!answers[currentQuestion.id]}
              >
                {currentStep === assessmentQuestions.length - 1 ? 'See Results' : 'Next Question'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

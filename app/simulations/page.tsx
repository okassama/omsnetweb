'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState, useEffect } from 'react';

export default function Simulations() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-grid">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Interactive
              <span className="text-primary block">Cybersecurity Simulations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience real-world cybersecurity scenarios through our interactive simulations. Learn how to protect your digital assets with hands-on demonstrations.
            </p>
          </div>
        </div>
      </section>

      {/* Simulations Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Network Security Simulation */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Network Security Visualization</CardTitle>
                <CardDescription>
                  Real-time network traffic simulation showing normal vs. malicious traffic patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <NetworkSecuritySimulation />
              </CardContent>
            </Card>

            {/* Phishing Attack Simulator */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Phishing Attack Simulator</CardTitle>
                <CardDescription>
                  Interactive email analysis tool that teaches users to spot phishing attempts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PhishingSimulation />
              </CardContent>
            </Card>

            {/* Password Strength Assessment */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Password Security Assessment</CardTitle>
                <CardDescription>
                  Live password strength meter with cracking time estimates and security recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PasswordStrengthSimulation />
              </CardContent>
            </Card>

            {/* Threat Detection Simulator */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Threat Detection Simulator</CardTitle>
                <CardDescription>
                  Simulated security incident with step-by-step response workflow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ThreatDetectionSimulation />
              </CardContent>
            </Card>

            {/* Data Breach Impact Calculator */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Data Breach Impact Calculator</CardTitle>
                <CardDescription>
                  Interactive tool showing potential financial impact of security breaches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DataBreachCalculator />
              </CardContent>
            </Card>

            {/* Security Compliance Checker */}
            <Card className="border-border/40 hover:border-primary/50 transition-all duration-300 hover:glow">
              <CardHeader>
                <CardTitle className="text-2xl">Security Compliance Checker</CardTitle>
                <CardDescription>
                  Interactive compliance assessment for regulations (GDPR, HIPAA, PCI-DSS)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComplianceChecker />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Network Security Simulation Component
function NetworkSecuritySimulation() {
  const [trafficType, setTrafficType] = useState<'normal' | 'malicious'>('normal');
  const [packets, setPackets] = useState<Array<{id: number, type: string, color: string}>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPacket = {
        id: Date.now(),
        type: trafficType === 'normal' ? 'HTTP' : 'Malware',
        color: trafficType === 'normal' ? 'bg-green-500' : 'bg-red-500'
      };
      setPackets(prev => [...prev.slice(-4), newPacket]);
    }, 1000);

    return () => clearInterval(interval);
  }, [trafficType]);

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => setTrafficType('normal')}
          className={`px-4 py-2 rounded ${
            trafficType === 'normal' ? 'bg-green-600 text-white' : 'bg-gray-200'
          }`}
        >
          Normal Traffic
        </button>
        <button
          onClick={() => setTrafficType('malicious')}
          className={`px-4 py-2 rounded ${
            trafficType === 'malicious' ? 'bg-red-600 text-white' : 'bg-gray-200'
          }`}
        >
          Malicious Traffic
        </button>
      </div>
      
      <div className="h-32 border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
        <div className="flex flex-col gap-2">
          {packets.map(packet => (
            <div
              key={packet.id}
              className={`${packet.color} text-white px-3 py-1 rounded text-sm transition-all duration-500`}
            >
              {packet.type} Packet
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground">
        {trafficType === 'normal' 
          ? 'Normal network traffic patterns detected'
          : 'Malicious activity detected! Immediate action required'}
      </div>
    </div>
  );
}

// Phishing Simulation Component
function PhishingSimulation() {
  const [emailContent, setEmailContent] = useState('');
  const [analysis, setAnalysis] = useState<{score: number, warnings: string[]} | null>(null);

  const analyzeEmail = () => {
    const warnings = [];
    let score = 100;

    // Check for common phishing indicators
    if (emailContent.toLowerCase().includes('urgent')) {
      warnings.push('⚠️ Urgent language detected');
      score -= 20;
    }
    if (emailContent.toLowerCase().includes('click here')) {
      warnings.push('⚠️ Suspicious link text detected');
      score -= 25;
    }
    if (emailContent.toLowerCase().includes('password')) {
      warnings.push('⚠️ Request for password detected');
      score -= 30;
    }
    if (emailContent.toLowerCase().includes('bank') || emailContent.toLowerCase().includes('paypal')) {
      warnings.push('⚠️ Financial institution mentioned');
      score -= 15;
    }

    setAnalysis({ score, warnings });
  };

  return (
    <div className="space-y-4">
      <textarea
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
        placeholder="Paste suspicious email content here..."
        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none"
      />
      
      <button
        onClick={analyzeEmail}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
      >
        Analyze Email
      </button>

      {analysis && (
        <div className="p-4 border rounded-lg bg-background/50">
          <div className="text-lg font-semibold mb-2">
            Security Score: {analysis.score}/100
          </div>
          {analysis.warnings.length > 0 ? (
            <div className="space-y-1">
              {analysis.warnings.map((warning, index) => (
                <div key={index} className="text-red-600 text-sm">{warning}</div>
              ))}
            </div>
          ) : (
            <div className="text-green-600 text-sm">✅ Email appears safe</div>
          )}
        </div>
      )}
    </div>
  );
}

// Password Strength Simulation Component
function PasswordStrengthSimulation() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState({score: 0, label: '', color: '', timeToCrack: ''});

  useEffect(() => {
    let score = 0;
    let label = 'Very Weak';
    let color = 'bg-red-500';
    let timeToCrack = 'Instantly';

    if (password.length >= 8) score += 25;
    if (password.length >= 12) score += 25;
    if (/[A-Z]/.test(password)) score += 15;
    if (/[a-z]/.test(password)) score += 15;
    if (/[0-9]/.test(password)) score += 10;
    if (/[^A-Za-z0-9]/.test(password)) score += 10;

    if (score >= 80) {
      label = 'Very Strong';
      color = 'bg-green-500';
      timeToCrack = 'Centuries';
    } else if (score >= 60) {
      label = 'Strong';
      color = 'bg-green-400';
      timeToCrack = 'Years';
    } else if (score >= 40) {
      label = 'Good';
      color = 'bg-yellow-500';
      timeToCrack = 'Months';
    } else if (score >= 20) {
      label = 'Weak';
      color = 'bg-orange-500';
      timeToCrack = 'Days';
    }

    setStrength({score, label, color, timeToCrack});
  }, [password]);

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password to test..."
        className="w-full p-3 border border-gray-300 rounded-lg"
      />
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Strength: {strength.label}</span>
          <span>Time to crack: {strength.timeToCrack}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
            style={{width: `${strength.score}%`}}
          ></div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground space-y-1">
        <div>✅ Use at least 12 characters</div>
        <div>✅ Include uppercase and lowercase letters</div>
        <div>✅ Add numbers and special characters</div>
        <div>✅ Avoid common words and patterns</div>
      </div>
    </div>
  );
}

// Threat Detection Simulation Component
function ThreatDetectionSimulation() {
  const [step, setStep] = useState(0);
  const [incidentDetected, setIncidentDetected] = useState(false);

  const steps = [
    'Monitoring network traffic...',
    'Analyzing system logs...',
    'Checking for anomalies...',
    'Verifying threat intelligence...',
    incidentDetected ? '🚨 SECURITY INCIDENT DETECTED!' : '✅ All systems secure'
  ];

  const startDetection = () => {
    setStep(0);
    setIncidentDetected(Math.random() > 0.5);
    
    const interval = setInterval(() => {
      setStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <button
        onClick={startDetection}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
      >
        Start Threat Detection Scan
      </button>

      <div className="space-y-2">
        {steps.slice(0, step + 1).map((stepText, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg border ${
              index === steps.length - 1 && incidentDetected
                ? 'bg-red-100 border-red-300 text-red-800'
                : index === steps.length - 1
                ? 'bg-green-100 border-green-300 text-green-800'
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            {stepText}
          </div>
        ))}
      </div>

      {step >= steps.length - 1 && incidentDetected && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="font-semibold text-red-800">Recommended Actions:</div>
          <div className="text-sm text-red-700 space-y-1 mt-2">
            <div>• Isolate affected systems</div>
            <div>• Preserve evidence for analysis</div>
            <div>• Contact security team immediately</div>
            <div>• Begin incident response protocol</div>
          </div>
        </div>
      )}
    </div>
  );
}

// Data Breach Calculator Component
function DataBreachCalculator() {
  const [companySize, setCompanySize] = useState('small');
  const [recordsLost, setRecordsLost] = useState(1000);
  const [sector, setSector] = useState('technology');

  const calculateCost = () => {
    let baseCost = 0;
    
    // Base cost per record
    if (sector === 'healthcare') baseCost = 429;
    else if (sector === 'finance') baseCost = 386;
    else if (sector === 'retail') baseCost = 245;
    else baseCost = 197; // technology
    
    // Company size multiplier
    if (companySize === 'medium') baseCost *= 1.5;
    else if (companySize === 'large') baseCost *= 2.5;
    
    return Math.round(recordsLost * baseCost);
  };

  const totalCost = calculateCost();

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Company Size</label>
          <select
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="small">Small (1-50 employees)</option>
            <option value="medium">Medium (51-500 employees)</option>
            <option value="large">Large (500+ employees)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Industry Sector</label>
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="retail">Retail</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Records Lost: {recordsLost.toLocaleString()}
          </label>
          <input
            type="range"
            min="100"
            max="100000"
            step="100"
            value={recordsLost}
            onChange={(e) => setRecordsLost(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <div className="text-2xl font-bold text-red-800">
          ${totalCost.toLocaleString()}
        </div>
        <div className="text-sm text-red-700">
          Estimated average cost of data breach
        </div>
        <div className="text-xs text-red-600 mt-2">
          Includes notification costs, regulatory fines, legal fees, and reputational damage
        </div>
      </div>
    </div>
  );
}

// Compliance Checker Component
function ComplianceChecker() {
  const [selectedRegulations, setSelectedRegulations] = useState<string[]>([]);
  const [complianceScore, setComplianceScore] = useState(0);

  const regulations = [
    { id: 'gdpr', name: 'GDPR', region: 'EU' },
    { id: 'hipaa', name: 'HIPAA', region: 'US' },
    { id: 'pci-dss', name: 'PCI-DSS', region: 'Global' },
    { id: 'ccpa', name: 'CCPA', region: 'California' },
    { id: 'sox', name: 'SOX', region: 'US' },
  ];

  const checkCompliance = () => {
    // Simulate compliance check
    const baseScore = 40;
    const regulationBonus = selectedRegulations.length * 12;
    const randomFactor = Math.floor(Math.random() * 20);
    setComplianceScore(Math.min(baseScore + regulationBonus + randomFactor, 100));
  };

  const toggleRegulation = (regulationId: string) => {
    setSelectedRegulations(prev =>
      prev.includes(regulationId)
        ? prev.filter(id => id !== regulationId)
        : [...prev, regulationId]
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="text-sm font-medium">Select Applicable Regulations:</div>
        {regulations.map(regulation => (
          <label key={regulation.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedRegulations.includes(regulation.id)}
              onChange={() => toggleRegulation(regulation.id)}
              className="rounded"
            />
            <span className="text-sm">
              {regulation.name} ({regulation.region})
            </span>
          </label>
        ))}
      </div>

      <button
        onClick={checkCompliance}
        className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
      >
        Check Compliance
      </button>

      {complianceScore > 0 && (
        <div className="p-4 border rounded-lg bg-background/50">
          <div className="text-lg font-semibold mb-2">
            Compliance Score: {complianceScore}/100
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                complianceScore >= 80 ? 'bg-green-500' :
                complianceScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'
              }`}
              style={{width: `${complianceScore}%`}}
            ></div>
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {complianceScore >= 80 ? '✅ Strong compliance posture' :
             complianceScore >= 60 ? '⚠️ Moderate compliance - review needed' :
             '❌ Significant compliance gaps identified'}
          </div>
        </div>
      )}
    </div>
  );
}

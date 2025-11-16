'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Monitor, Wifi, MapPin } from 'lucide-react';

interface VisitorInfo {
  ip: string;
  isp: string;
  country: string;
  city: string;
  device: string;
  browser: string;
  os: string;
}

export function VisitorInfo() {
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorInfo = async () => {
      try {
        // Get IP address and location info
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        // Get detailed location and ISP info
        const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const locationData = await locationResponse.json();

        // Detect browser and device info
        const userAgent = navigator.userAgent;
        const browser = detectBrowser(userAgent);
        const os = detectOS(userAgent);
        const device = detectDevice(userAgent);

        setVisitorInfo({
          ip: ip,
          isp: locationData.org || locationData.asn || 'Unknown ISP',
          country: locationData.country_name || 'Unknown',
          city: locationData.city || 'Unknown',
          device: device,
          browser: browser,
          os: os
        });
      } catch (error) {
        console.error('Error fetching visitor info:', error);
        // Fallback to basic info if API fails
        const userAgent = navigator.userAgent;
        setVisitorInfo({
          ip: 'Unable to fetch',
          isp: 'Unknown',
          country: 'Unknown',
          city: 'Unknown',
          device: detectDevice(userAgent),
          browser: detectBrowser(userAgent),
          os: detectOS(userAgent)
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorInfo();
  }, []);

  const detectBrowser = (userAgent: string): string => {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Unknown Browser';
  };

  const detectOS = (userAgent: string): string => {
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iOS')) return 'iOS';
    return 'Unknown OS';
  };

  const detectDevice = (userAgent: string): string => {
    if (userAgent.includes('Mobile')) return 'Mobile';
    if (userAgent.includes('Tablet')) return 'Tablet';
    return 'Desktop';
  };

  if (loading) {
    return (
      <Card className="border-border/40 hover:glow hover-lift transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Visitor Information</span>
          </CardTitle>
          <CardDescription>Loading your connection details...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="animate-pulse bg-muted h-4 rounded"></div>
            <div className="animate-pulse bg-muted h-4 rounded w-3/4"></div>
            <div className="animate-pulse bg-muted h-4 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!visitorInfo) {
    return (
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>Visitor Information</span>
          </CardTitle>
          <CardDescription>Unable to fetch visitor information</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="border-border/40 hover:glow hover-lift transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-primary" />
          <span>Your Connection Details</span>
        </CardTitle>
        <CardDescription>
          Real-time security monitoring active
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* IP Address & ISP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Wifi className="h-4 w-4 text-primary" />
              <span className="font-medium">IP Address:</span>
            </div>
            <div className="text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
              {visitorInfo.ip}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Wifi className="h-4 w-4 text-primary" />
              <span className="font-medium">ISP:</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {visitorInfo.isp}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">Location:</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {visitorInfo.city}, {visitorInfo.country}
          </div>
        </div>

        {/* Device & Browser */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Monitor className="h-4 w-4 text-primary" />
              <span className="font-medium">Device:</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {visitorInfo.device} ({visitorInfo.os})
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Monitor className="h-4 w-4 text-primary" />
              <span className="font-medium">Browser:</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {visitorInfo.browser}
            </div>
          </div>
        </div>

        {/* Security Status */}
        <div className="pt-4 border-t border-border/40">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Connection Status:</span>
            <span className="text-green-500 font-medium">Secure</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Your connection is encrypted and protected
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RealTimeUsage = () => {
  const [currentUsage, setCurrentUsage] = useState(2.4);
  const [usagePercentage, setUsagePercentage] = useState(0);
  const maxUsage = 5.0; // kWh

  // Simulate fluctuating energy usage
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.random();
      // Generate a value between 0.8 and 4.5 kWh
      const newUsage = 0.8 + random * 3.7;
      setCurrentUsage(parseFloat(newUsage.toFixed(1)));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Update percentage when usage changes
  useEffect(() => {
    setUsagePercentage((currentUsage / maxUsage) * 100);
  }, [currentUsage]);

  // Determine energy level
  const getEnergyLevel = () => {
    if (currentUsage < 1.5) return "energy-low";
    if (currentUsage < 2.5) return "energy-moderate";
    if (currentUsage < 3.5) return "energy-high";
    return "energy-excessive";
  };

  // Calculate stroke dash offset for gauge
  const arcLength = 264; // Circumference * (240/360) for 240 degree arc
  const strokeDashoffset = arcLength - (arcLength * usagePercentage) / 100;

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <Activity size={18} className="text-primary" />
            Current Usage
          </CardTitle>
          <span className="text-xs bg-muted px-2 py-1 rounded-full">Live</span>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex justify-center">
          <div className="relative w-48 h-28">
            {/* Gauge Background */}
            <svg className="absolute" width="100%" height="100%" viewBox="0 0 120 70">
              <path
                d="M10,60 A50,50 0 0,1 110,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                className="text-muted"
              />
            </svg>

            {/* Gauge Value */}
            <svg className="absolute" width="100%" height="100%" viewBox="0 0 120 70">
              <path
                d="M10,60 A50,50 0 0,1 110,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray={arcLength}
                strokeDashoffset={strokeDashoffset}
                className={cn("gauge-arc", getEnergyLevel())}
                strokeLinecap="round"
              />
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
              <span className={cn("text-3xl font-bold", getEnergyLevel())}>{currentUsage}</span>
              <span className="text-xs text-muted-foreground">kWh</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4">
          <div className="text-center">
            <div className="text-sm font-medium">Today</div>
            <div className="text-xl font-bold">21.4 kWh</div>
          </div>
          <div className="text-center border-x">
            <div className="text-sm font-medium">Weekly Avg</div>
            <div className="text-xl font-bold">159 kWh</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Monthly</div>
            <div className="text-xl font-bold">682 kWh</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeUsage;

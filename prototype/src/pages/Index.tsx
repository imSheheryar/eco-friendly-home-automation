
import React, { useState, useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import RealTimeUsage from '@/components/RealTimeUsage';
import UsageTrends from '@/components/UsageTrends';
import NeighborComparison from '@/components/NeighborComparison';
import Suggestions from '@/components/Suggestions';
import Challenges from '@/components/Challenges';
import Incentives from '@/components/Incentives';

const Index = () => {
  const [showAlert, setShowAlert] = useState(false);
  
  // Simulate a spike alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout showAlert={showAlert}>
      <div className="space-y-6 py-2">
        <div>
          <h2 className="text-xl font-bold mb-2">Welcome Back, Alex</h2>
          <p className="text-muted-foreground">Your home is performing well today</p>
        </div>
        
        <RealTimeUsage />
        <UsageTrends />
        <NeighborComparison />
        <Suggestions />
        <Challenges />
        <Incentives />
      </div>
    </MainLayout>
  );
};

export default Index;

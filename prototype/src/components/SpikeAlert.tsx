
import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export const SpikeAlert = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <Alert className="bg-eco-red/10 border-eco-red text-eco-red mb-4 animate-slide-in">
      <AlertTriangle className="h-4 w-4" />
      <div className="flex-1">
        <AlertTitle className="text-eco-red font-semibold">Energy Spike Detected!</AlertTitle>
        <AlertDescription className="text-eco-red/90">
          Unusual energy consumption detected in Kitchen (3.8kWh). This is 45% above your average.
        </AlertDescription>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-eco-red/70 hover:text-eco-red hover:bg-eco-red/10"
        onClick={() => setDismissed(true)}
      >
        <X className="h-4 w-4" />
      </Button>
    </Alert>
  );
};

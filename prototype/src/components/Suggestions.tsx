
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const suggestions = [
  {
    id: 1,
    title: 'Reduce standby power',
    description: 'Your devices use 22% more standby power than average. Consider using smart power strips.',
    potentialSavings: '64 kWh/month',
    icon: '🔌'
  },
  {
    id: 2,
    title: 'Optimize heating schedule',
    description: 'We noticed your heating runs during empty home hours. Adjust your smart thermostat schedule.',
    potentialSavings: '86 kWh/month',
    icon: '🌡️'
  },
  {
    id: 3,
    title: 'Update refrigerator',
    description: 'Your refrigerator uses 30% more energy than modern models. Consider upgrading for efficiency.',
    potentialSavings: '45 kWh/month',
    icon: '❄️'
  }
];

const Suggestions = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <Lightbulb size={18} className="text-primary" />
            Personalized Tips
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="p-4 flex">
              <div className="mr-3 text-2xl">{suggestion.icon}</div>
              <div className="flex-1">
                <h3 className="font-medium">{suggestion.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{suggestion.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-eco-green/10 text-eco-green px-2 py-1 rounded-full">
                    Save {suggestion.potentialSavings}
                  </span>
                  <Button variant="ghost" size="sm" className="px-2">
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Suggestions;

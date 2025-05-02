
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const challenges = [
  {
    id: 1,
    title: 'Reduce 15% This Week',
    description: 'Decrease your energy consumption by 15% compared to last week',
    progress: 80,
    endDate: 'May 22',
    joined: true
  },
  {
    id: 2,
    title: 'Neighborhood Challenge',
    description: 'Join your neighborhood to collectively save 1000 kWh this month',
    progress: 56,
    endDate: 'May 31',
    joined: true
  },
  {
    id: 3,
    title: 'Zero Energy Weekends',
    description: 'Minimize energy usage during weekend peak hours',
    progress: 0,
    endDate: 'Ongoing',
    joined: false
  }
];

const Challenges = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <Trophy size={18} className="text-primary" />
            Energy Saving Challenges
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{challenge.title}</h3>
                <span className="text-xs bg-muted px-2 py-1 rounded-full">
                  Ends {challenge.endDate}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{challenge.description}</p>
              {challenge.joined ? (
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{challenge.progress}%</span>
                  </div>
                  <Progress value={challenge.progress} className="h-2" />
                </div>
              ) : (
                <Button size="sm" className="w-full mt-2">
                  Join Challenge
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Challenges;

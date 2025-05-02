
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeDollarSign, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const incentives = [
  {
    id: 1,
    title: 'Home Energy Rebate Program',
    provider: 'Federal Energy Department',
    amount: 'Up to $1,500',
    deadline: 'Dec 31, 2025',
    eligibility: 'Any homeowner',
    color: 'bg-eco-blue-light/10 border-eco-blue-light'
  },
  {
    id: 2,
    title: 'Solar Panel Tax Credit',
    provider: 'IRS',
    amount: '26% of installation cost',
    deadline: 'Dec 31, 2024',
    eligibility: 'Homeowners installing solar',
    color: 'bg-eco-yellow/10 border-eco-yellow'
  },
  {
    id: 3,
    title: 'Energy Efficient Appliance Rebate',
    provider: 'State Energy Office',
    amount: '$50-$500',
    deadline: 'Ongoing',
    eligibility: 'State residents',
    color: 'bg-eco-green/10 border-eco-green'
  }
];

const Incentives = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <BadgeDollarSign size={18} className="text-primary" />
            Government Incentives
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {incentives.map((incentive) => (
            <div key={incentive.id} className="p-4">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{incentive.title}</h3>
                <a href="#" className="text-primary hover:underline">
                  <ExternalLink size={14} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{incentive.provider}</p>
              <div className={cn("mt-2 rounded-md border p-2 text-sm", incentive.color)}>
                <div className="flex justify-between">
                  <span>Amount:</span>
                  <span className="font-medium">{incentive.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Deadline:</span>
                  <span>{incentive.deadline}</span>
                </div>
                <div className="flex justify-between">
                  <span>Eligibility:</span>
                  <span>{incentive.eligibility}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Incentives;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const comparisonData = [
  { name: 'Efficient Neighbors', usage: 490, color: '#8BC34A' },
  { name: 'Average Neighbors', usage: 630, color: '#FFC107' },
  { name: 'Your Home', usage: 540, color: '#2196F3' },
];

const NeighborComparison = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <Users size={18} className="text-primary" />
            Neighborhood Comparison
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" unit=" kWh" />
              <YAxis
                type="category"
                dataKey="name"
                tickLine={false}
                axisLine={false}
                width={120}
              />
              <Tooltip
                formatter={(value) => [`${value} kWh`, 'Monthly Usage']}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Bar dataKey="usage" radius={[0, 4, 4, 0]}>
                {comparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Data is anonymized and based on 42 similar households in your area.
        </p>
      </CardContent>
    </Card>
  );
};

export default NeighborComparison;

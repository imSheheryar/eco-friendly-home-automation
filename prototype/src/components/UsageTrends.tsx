
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BarChart3 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data
const dailyData = [
  { time: '12AM', usage: 0.5 },
  { time: '3AM', usage: 0.3 },
  { time: '6AM', usage: 0.7 },
  { time: '9AM', usage: 1.8 },
  { time: '12PM', usage: 2.4 },
  { time: '3PM', usage: 2.1 },
  { time: '6PM', usage: 2.9 },
  { time: '9PM', usage: 3.2 },
];

const weeklyData = [
  { time: 'Mon', usage: 18.2 },
  { time: 'Tue', usage: 17.9 },
  { time: 'Wed', usage: 23.4 },
  { time: 'Thu', usage: 21.8 },
  { time: 'Fri', usage: 25.3 },
  { time: 'Sat', usage: 31.5 },
  { time: 'Sun', usage: 20.9 },
];

const monthlyData = [
  { time: 'Jan', usage: 580 },
  { time: 'Feb', usage: 520 },
  { time: 'Mar', usage: 490 },
  { time: 'Apr', usage: 450 },
  { time: 'May', usage: 610 },
  { time: 'Jun', usage: 720 },
  { time: 'Jul', usage: 690 },
  { time: 'Aug', usage: 730 },
  { time: 'Sep', usage: 650 },
  { time: 'Oct', usage: 610 },
  { time: 'Nov', usage: 570 },
  { time: 'Dec', usage: 680 },
];

const UsageTrends = () => {
  const [timeRange, setTimeRange] = useState('daily');
  
  const getChartData = () => {
    switch (timeRange) {
      case 'daily': return dailyData;
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
      default: return dailyData;
    }
  };
  
  const getYAxisLabel = () => {
    switch (timeRange) {
      case 'daily': return 'kWh';
      case 'weekly': return 'kWh';
      case 'monthly': return 'kWh';
      default: return 'kWh';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 size={18} className="text-primary" />
            Usage Trends
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily" onValueChange={setTimeRange}>
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          <TabsContent value="daily" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#4CAF50" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" fontSize={12} tickMargin={10} />
                  <YAxis fontSize={12} tickMargin={10} unit={getYAxisLabel()} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="#4CAF50"
                    fillOpacity={1}
                    fill="url(#colorUsage)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="weekly" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorWeekly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2196F3" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#2196F3" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" fontSize={12} tickMargin={10} />
                  <YAxis fontSize={12} tickMargin={10} unit={getYAxisLabel()} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="#2196F3"
                    fillOpacity={1}
                    fill="url(#colorWeekly)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="mt-0">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={getChartData()} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMonthly" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9C27B0" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#9C27B0" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" fontSize={12} tickMargin={10} />
                  <YAxis fontSize={12} tickMargin={10} unit={getYAxisLabel()} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="usage"
                    stroke="#9C27B0"
                    fillOpacity={1}
                    fill="url(#colorMonthly)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UsageTrends;


import React from 'react';
import { Home, BarChart3, Lightbulb, Trophy, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: BarChart3, label: 'Usage', active: false },
  { icon: Lightbulb, label: 'Tips', active: false },
  { icon: Trophy, label: 'Challenges', active: false },
  { icon: Info, label: 'Incentives', active: false },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-background/90 backdrop-blur-sm border-t">
      <div className="container max-w-md mx-auto">
        <div className="flex justify-between">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={cn(
                "flex flex-1 flex-col items-center justify-center py-2",
                item.active ? "text-primary" : "text-muted-foreground hover:text-primary transition-colors"
              )}
            >
              <item.icon className={cn("h-5 w-5", item.active && "stroke-[2.5px]")} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;

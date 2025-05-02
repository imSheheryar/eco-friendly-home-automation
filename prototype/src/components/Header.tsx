
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-14 max-w-md mx-auto px-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-eco-green to-eco-blue-light flex items-center justify-center">
            <span className="text-white text-sm font-bold">E</span>
          </div>
          <h1 className="font-bold text-lg text-foreground">EcoHome</h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-eco-red rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

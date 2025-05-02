
import React from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import { SpikeAlert } from '@/components/SpikeAlert';

interface MainLayoutProps {
  children: React.ReactNode;
  showAlert?: boolean;
}

const MainLayout = ({ children, showAlert = false }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container px-4 py-2 max-w-md mx-auto overflow-y-auto pb-16">
        {showAlert && <SpikeAlert />}
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default MainLayout;

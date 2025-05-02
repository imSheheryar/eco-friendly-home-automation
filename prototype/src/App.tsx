import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Watermark from "./components/Watermark";
import { ThemeProvider } from "./components/ThemeProvider";
import SRSPresentationPage from "./pages/SRSPresentationPage";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const NavigationButtons = () => {
  const location = useLocation();
  const isInSRSPage = location.pathname === '/srs';
  const isInMainApp = location.pathname === '/app';

  if (location.pathname === '/') return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-4">
      {isInMainApp && (
        <Link 
          to="/srs" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          View SRS Presentation
        </Link>
      )}
      {isInSRSPage && (
        <Link 
          to="/app" 
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Back to App
        </Link>
      )}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<Index />} />
            <Route path="/srs" element={<SRSPresentationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <NavigationButtons />
          <Watermark />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

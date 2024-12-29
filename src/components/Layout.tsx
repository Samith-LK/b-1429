import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>
    <Navigation />
    <Toaster />
    <Sonner />
    {children}
  </TooltipProvider>
);

export default Layout;
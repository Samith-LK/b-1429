import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Placeholder component for new routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-[#121212] text-white p-8">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-gray-400">This page is under construction.</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<PlaceholderPage title="Research" />} />
          <Route path="/publications" element={<PlaceholderPage title="Publications" />} />
          <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
          <Route path="/awards" element={<PlaceholderPage title="Awards" />} />
          <Route path="/grants" element={<PlaceholderPage title="Grants" />} />
          <Route path="/entrepreneur" element={<PlaceholderPage title="Entrepreneur" />} />
          <Route path="/patents" element={<PlaceholderPage title="Patents" />} />
          <Route path="/volunteer" element={<PlaceholderPage title="Volunteer" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/social" element={<PlaceholderPage title="Social Media" />} />
          <Route path="/about" element={<PlaceholderPage title="About" />} />
          <Route path="/resume" element={<PlaceholderPage title="Resume" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
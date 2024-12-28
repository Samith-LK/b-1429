import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkillsPage from "./pages/SkillsPage";
import PlaceholderPage from "./components/PlaceholderPage";

const queryClient = new QueryClient();

const AboutPage = () => (
  <div className="min-h-screen bg-[#121212] text-white p-8">
    <h1 className="text-4xl font-bold mb-8">About Me</h1>
    <div className="max-w-4xl mx-auto">
      <p className="text-gray-300 leading-relaxed mb-6">
        As a dedicated researcher and innovator in the field of artificial intelligence and machine learning, 
        I've spent years exploring the fascinating intersection of theoretical advancement and practical applications. 
        My journey began with a deep curiosity about how technology can enhance human capabilities and solve complex 
        real-world problems. This passion has driven me to pursue cutting-edge research while maintaining a strong 
        focus on practical implementations that can make a meaningful impact.
      </p>
      <p className="text-gray-300 leading-relaxed mb-12">
        Beyond my technical expertise, I believe in the power of collaboration and knowledge sharing. Throughout my 
        career, I've had the privilege of working with talented teams across various domains, from academic research 
        to industry applications. This diverse experience has shaped my holistic approach to problem-solving and 
        reinforced my commitment to creating solutions that are not only technically sophisticated but also 
        accessible and beneficial to end-users.
      </p>
    </div>
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={
            <PlaceholderPage 
              title="Projects" 
              content="Explore our diverse portfolio of innovative projects spanning various domains of technology. From mobile applications to enterprise solutions, each project demonstrates our commitment to excellence and cutting-edge development practices."
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            />
          } />
          <Route path="/blog" element={
            <PlaceholderPage 
              title="Blog" 
              content="Stay updated with our latest insights, technology trends, and industry analysis. Our blog features in-depth articles, tutorials, and thought leadership pieces from our team of experts."
              image="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            />
          } />
          <Route path="/contact" element={
            <PlaceholderPage 
              title="Contact" 
              content="Get in touch with us for collaborations, inquiries, or opportunities. We're always excited to connect with like-minded individuals and organizations."
              image="https://images.unsplash.com/photo-1460574283810-2aab119d8511"
            />
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
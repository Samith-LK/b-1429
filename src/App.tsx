import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Academic from "./pages/Academic";
import Sports from "./pages/Sports";
import Volunteering from "./pages/Volunteering";
import Competitions from "./pages/Competitions";
import Experiences from "./pages/Experiences";
import SkillsPage from "./pages/SkillsPage";

const queryClient = new QueryClient();

const PlaceholderPage = ({ title, content, image }: { title: string; content?: string; image?: string }) => (
  <div className="min-h-screen bg-[#121212] text-white p-8">
    <h1 className="text-4xl font-bold mb-8">{title}</h1>
    {image && (
      <img src={image} alt={title} className="w-full max-w-4xl mx-auto h-64 object-cover rounded-2xl mb-8" />
    )}
    <div className="max-w-4xl mx-auto">
      <p className="text-gray-300 leading-relaxed mb-6">{content}</p>
    </div>
  </div>
);

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
      
      <div className="flex overflow-hidden space-x-4 animate-slide">
        <img 
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
          alt="Tech Innovation" 
          className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
        />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
          alt="Research Work" 
          className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
        />
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
          alt="Code Development" 
          className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
        />
        <img 
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
          alt="Workspace" 
          className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
        />
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
          alt="Team Collaboration" 
          className="w-64 h-48 object-cover rounded-lg flex-shrink-0"
        />
      </div>
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
          <Route path="/research" element={
            <PlaceholderPage 
              title="Research" 
              content="Our research focuses on cutting-edge artificial intelligence and machine learning applications. We're currently working on several groundbreaking projects in natural language processing, computer vision, and reinforcement learning. Our team collaborates with leading institutions worldwide to push the boundaries of what's possible in AI technology."
              image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            />
          } />
          <Route path="/academic" element={<Academic />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={
            <PlaceholderPage 
              title="Projects" 
              content="Explore our diverse portfolio of innovative projects spanning various domains of technology. From mobile applications to enterprise solutions, each project demonstrates our commitment to excellence and cutting-edge development practices."
              image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            />
          } />
          <Route path="/awards" element={
            <PlaceholderPage 
              title="Awards" 
              content="Recognition for excellence in innovation, research, and technological advancement. Our achievements include industry awards, academic honors, and acknowledgments from leading technology organizations worldwide."
              image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            />
          } />
          <Route path="/blog" element={
            <PlaceholderPage 
              title="Blog" 
              content="Stay updated with our latest insights, technology trends, and industry analysis. Our blog features in-depth articles, tutorials, and thought leadership pieces from our team of experts."
              image="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
            />
          } />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/about" element={<AboutPage />} />
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

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

const SkillsPage = () => (
  <div className="min-h-screen bg-[#121212] text-white p-8">
    <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">AI and Machine Learning</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>LangChain</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Neo4j</li>
            <li>Pinecone</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Programming / Scripting Languages</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>MicroC</li>
            <li>C /C++</li>
            <li>Java</li>
            <li>MySQL</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>JavaScript</li>
            <li>Arduino</li>
            <li>React</li>
            <li>Python</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">PLC/HMI Programming</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Xinje PLC & HMI</li>
            <li>Omron PLC</li>
            <li>Mitsubishi PLC</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Unitronics PLC & HMI</li>
            <li>Samkoon HMI</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Hardware Design & Other Tools</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>Eagle CAD</li>
            <li>KiCAD</li>
            <li>Proteus</li>
            <li>DGLux5</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Onshape</li>
            <li>QT Creator</li>
            <li>OpenCV</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Version Control</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc list-inside space-y-2">
            <li>GitHub</li>
            <li>Azure DevOps</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>Git</li>
          </ul>
        </div>
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
          <Route path="/about" element={
            <PlaceholderPage 
              title="About" 
              content="Learn about our mission, values, and the team behind our success. We're passionate about technology and committed to delivering innovative solutions that make a difference."
              image="https://images.unsplash.com/photo-1501854140801-50d01698950b"
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
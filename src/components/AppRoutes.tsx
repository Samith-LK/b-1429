import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SkillsPage from "@/pages/SkillsPage";
import AboutPage from "@/pages/AboutPage";
import PlaceholderPage from "@/components/PlaceholderPage";

const AppRoutes = () => (
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
);

export default AppRoutes;
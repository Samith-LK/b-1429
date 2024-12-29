import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import SkillsPage from "@/pages/SkillsPage";
import AboutPage from "@/pages/AboutPage";
import Experiences from "@/pages/Experiences";
import Academic from "@/pages/Academic";
import Sports from "@/pages/Sports";
import Volunteering from "@/pages/Volunteering";
import Competitions from "@/pages/Competitions";
import Projects from "@/pages/Projects";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/skills" element={<SkillsPage />} />
    <Route path="/experiences" element={<Experiences />} />
    <Route path="/academic" element={<Academic />} />
    <Route path="/sports" element={<Sports />} />
    <Route path="/volunteering" element={<Volunteering />} />
    <Route path="/competitions" element={<Competitions />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
);

export default AppRoutes;
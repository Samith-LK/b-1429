import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// Lazy load all pages
const Index = lazy(() => import("@/pages/Index"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const SkillsPage = lazy(() => import("@/pages/SkillsPage"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const Academic = lazy(() => import("@/pages/Academic"));
const Sports = lazy(() => import("@/pages/Sports"));
const Volunteering = lazy(() => import("@/pages/Volunteering"));
const Competitions = lazy(() => import("@/pages/Competitions"));
const Contact = lazy(() => import("@/pages/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#121212] flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-400"></div>
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/volunteering" element={<Volunteering />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
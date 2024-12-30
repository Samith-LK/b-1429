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

// Loading fallback component with better visual feedback
const LoadingFallback = () => (
  <div className="min-h-screen bg-[#121212] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
      <p className="text-white">Loading content...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  console.log('AppRoutes rendering'); // Debug log
  
  return (
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
        {/* Catch-all route for 404 */}
        <Route path="*" element={
          <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">
            <h1>Page not found</h1>
          </div>
        } />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
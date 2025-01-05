import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import profilePic from "../images/profilepicNoBack.webp";
import detailedAnalysis from "../images/undraw_detailed-analysis_w5a8.svg";
import feelingProud from "../images/undraw_feeling-proud_tdos.svg";
import makerLaunch from "../images/undraw_maker-launch_fwzi.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <ScrollFadeIn delay={0.1}>
          <Link to="/about" className="col-span-1 md:col-span-2 lg:col-span-2 bento-card group h-[250px]">
            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
              <div className="relative flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 p-2">
                    <img 
                      src={profilePic} 
                      alt="Profile" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center md:text-left space-y-2 flex-grow">
                <div className="space-y-2">
                  <h2 className="text-sm text-blue-400 uppercase tracking-wider">Welcome</h2>
                  <h1 className="text-2xl md:text-3xl font-bold text-blue-400">
                    Hi, I'm <span className="font-extrabold">Samith Chathuranga</span>
                  </h1>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  A passionate researcher and innovator in artificial intelligence and machine learning, 
                  with a focus on developing solutions that bridge the gap between theoretical advancement 
                  and practical applications.
                </p>
              </div>
            </div>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.2}>
          <Link to="/experiences" className="bento-card group h-[250px]">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={detailedAnalysis} alt="Experiences" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiences</h3>
            <p className="text-gray-400">Professional journey and industry expertise</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.3}>
          <Link to="/skills" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={feelingProud} alt="Skills" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Skills & Expertise</h3>
            <p className="text-gray-400">Technical skills and professional competencies</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.4}>
          <Link to="/academic" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={makerLaunch} alt="Academic" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Academic</h3>
            <p className="text-gray-400">Explore academic achievements and scholarly work</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.5}>
          <Link to="/projects" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={detailedAnalysis} alt="Projects" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.6}>
          <Link to="/awards" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={feelingProud} alt="Awards" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Awards</h3>
            <p className="text-gray-400">Recognition and honors for research excellence</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.7}>
          <Link to="/sports" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={makerLaunch} alt="Sports" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sports</h3>
            <p className="text-gray-400">Athletic achievements and sports activities</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.8}>
          <Link to="/volunteering" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={detailedAnalysis} alt="Volunteering" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Volunteering</h3>
            <p className="text-gray-400">Community service and volunteer activities</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={0.9}>
          <Link to="/competitions" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={feelingProud} alt="Competitions" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Competitions</h3>
            <p className="text-gray-400">Achievements in various competitions and challenges</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={1.0}>
          <Link to="/blog" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={makerLaunch} alt="Blog" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Blog</h3>
            <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
          </Link>
        </ScrollFadeIn>

        <ScrollFadeIn delay={1.1}>
          <Link to="/contact" className="bento-card group">
            <div className="h-40 w-full flex items-center justify-center mb-4">
              <img src={detailedAnalysis} alt="Contact" className="h-32 w-32 object-contain" />
            </div>
            <h3 className="text-xl font-bold mb-2">Let's work together</h3>
            <p className="text-gray-400">Reach out for collaborations and opportunities</p>
          </Link>
        </ScrollFadeIn>
      </div>
    </div>
  );
};

export default Index;
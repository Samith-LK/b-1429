import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Brain } from "lucide-react";
import profilePic from "../images/profilepicNoBack.webp";
import detailedAnalysis from "../images/undraw_detailed-analysis_w5a8.svg";
import feelingProud from "../images/undraw_feeling-proud_tdos.svg";
import makerLaunch from "../images/undraw_maker-launch_fwzi.svg";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Link to="/about" className="col-span-1 md:col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 group">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-36 h-36 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rotate-0 group-hover:rotate-6 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 p-2">
                  <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="text-center md:text-left space-y-4">
              <div className="space-y-2">
                <h2 className="text-sm text-blue-400 uppercase tracking-wider">Welcome</h2>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hi, I'm <span className="font-extrabold">Samith Chathuranga</span>
                </h1>
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
                A passionate researcher and innovator in artificial intelligence and machine learning, 
                with a focus on developing solutions that bridge the gap between theoretical advancement 
                and practical applications.
              </p>
            </div>
          </div>
        </Link>

        {/* Other Cards */}
        <Link to="/experiences" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={detailedAnalysis} alt="Experiences" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Experiences</h3>
          <p className="text-gray-400">Professional journey and industry expertise</p>
        </Link>

        <Link to="/skills" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={feelingProud} alt="Skills" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Skills & Expertise</h3>
          <p className="text-gray-400">Technical skills and professional competencies</p>
        </Link>

        <Link to="/academic" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={makerLaunch} alt="Academic" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Academic</h3>
          <p className="text-gray-400">Explore academic achievements and scholarly work</p>
        </Link>

        <Link to="/projects" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={detailedAnalysis} alt="Projects" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
        </Link>

        <Link to="/awards" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={feelingProud} alt="Awards" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Recognition and honors for research excellence</p>
        </Link>

        <Link to="/sports" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={makerLaunch} alt="Sports" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Sports</h3>
          <p className="text-gray-400">Athletic achievements and sports activities</p>
        </Link>

        <Link to="/volunteering" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={detailedAnalysis} alt="Volunteering" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Volunteering</h3>
          <p className="text-gray-400">Community service and volunteer activities</p>
        </Link>

        <Link to="/competitions" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={feelingProud} alt="Competitions" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-400">Achievements in various competitions and challenges</p>
        </Link>

        <Link to="/blog" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={makerLaunch} alt="Blog" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
        </Link>

        <Link to="/contact" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <img src={detailedAnalysis} alt="Contact" className="h-32 w-32 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-2">Let's work together</h3>
          <p className="text-gray-400">Reach out for collaborations and opportunities</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;

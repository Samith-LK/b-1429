import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Trophy, 
  BookOpen, 
  Heart, 
  Medal, 
  Contact, 
  Brain,
  Newspaper,
  Dumbbell
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Link to="/about" className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-400 flex items-center justify-center">
              <Brain className="w-24 h-24 md:w-32 md:h-32 text-blue-400" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-sm text-gray-400 mb-2">Welcome</h2>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Samith Chathuranga</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg">
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
            <Briefcase className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Experiences</h3>
          <p className="text-gray-400">Professional journey and industry expertise</p>
        </Link>

        <Link to="/skills" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Code2 className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Skills & Expertise</h3>
          <p className="text-gray-400">Technical skills and professional competencies</p>
        </Link>

        <Link to="/academic" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <GraduationCap className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Academic</h3>
          <p className="text-gray-400">Explore academic achievements and scholarly work</p>
        </Link>

        <Link to="/projects" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Code2 className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
        </Link>

        <Link to="/awards" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Trophy className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Recognition and honors for research excellence</p>
        </Link>

        <Link to="/sports" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Dumbbell className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Sports</h3>
          <p className="text-gray-400">Athletic achievements and sports activities</p>
        </Link>

        <Link to="/volunteering" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Heart className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Volunteering</h3>
          <p className="text-gray-400">Community service and volunteer activities</p>
        </Link>

        <Link to="/competitions" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Medal className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-400">Achievements in various competitions and challenges</p>
        </Link>

        <Link to="/blog" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Newspaper className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
        </Link>

        <Link to="/contact" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="h-40 w-full flex items-center justify-center mb-4">
            <Contact className="w-24 h-24 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Let's work together</h3>
          <p className="text-gray-400">Reach out for collaborations and opportunities</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
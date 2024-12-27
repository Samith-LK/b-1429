import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Book, 
  Trophy, 
  FileText, 
  Rocket, 
  Award,
  Globe,
  Newspaper,
  MessageSquare,
  Share2
} from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/research" className="text-gray-400 hover:text-white">Research</Link>
            <Link to="/entrepreneur" className="text-gray-400 hover:text-white">Entrepreneur</Link>
            <Link to="/volunteer" className="text-gray-400 hover:text-white">Volunteer</Link>
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
          </div>
        </div>
      </nav>

      <div className="bento-grid">
        {/* Profile Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* Publications Card */}
        <Link to="/publications" className="bento-card group">
          <div className="flex flex-col h-full">
            <Book className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Publications</h3>
            <p className="text-gray-400">Research papers and academic work</p>
          </div>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="bento-card group">
          <div className="flex flex-col h-full">
            <Rocket className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-bold mb-2">Projects</h3>
            <p className="text-gray-400">Technical projects and implementations</p>
          </div>
        </Link>

        {/* Awards Card */}
        <Link to="/awards" className="bento-card group">
          <div className="flex flex-col h-full">
            <Trophy className="w-12 h-12 mb-4 text-yellow-400" />
            <h3 className="text-xl font-bold mb-2">Honors and Awards</h3>
            <p className="text-gray-400">Achievements and recognition</p>
          </div>
        </Link>

        {/* Grants Card */}
        <Link to="/grants" className="bento-card group">
          <div className="flex flex-col h-full">
            <FileText className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Grants</h3>
            <p className="text-gray-400">Research grants and funding</p>
          </div>
        </Link>

        {/* Entrepreneur Card */}
        <Link to="/entrepreneur" className="bento-card group">
          <div className="flex flex-col h-full">
            <Award className="w-12 h-12 mb-4 text-red-400" />
            <h3 className="text-xl font-bold mb-2">Entrepreneur</h3>
            <p className="text-gray-400">Business ventures and startups</p>
          </div>
        </Link>

        {/* Patents Card */}
        <Link to="/patents" className="bento-card group">
          <div className="flex flex-col h-full">
            <Award className="w-12 h-12 mb-4 text-indigo-400" />
            <h3 className="text-xl font-bold mb-2">Patents</h3>
            <p className="text-gray-400">Intellectual property and innovations</p>
          </div>
        </Link>

        {/* Quote Card */}
        <div className="bento-card col-span-2">
          <h2 className="text-2xl font-bold italic">
            "Education must be the only domain where the service provider (lecturer) evaluates the client (student) and not the other way around."
          </h2>
          <p className="text-gray-400 mt-4">Feedback from lectures</p>
        </div>

        {/* Volunteer Card */}
        <Link to="/volunteer" className="bento-card group">
          <div className="flex flex-col h-full">
            <Globe className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p className="text-gray-400">Community service and contributions</p>
          </div>
        </Link>

        {/* Blog Card */}
        <Link to="/blog" className="bento-card group">
          <div className="flex flex-col h-full">
            <Newspaper className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-bold mb-2">Blog</h3>
            <p className="text-gray-400">Thoughts and articles</p>
          </div>
        </Link>

        {/* Social Media Card */}
        <Link to="/social" className="bento-card group">
          <div className="flex flex-col h-full">
            <Share2 className="w-12 h-12 mb-4 text-purple-400" />
            <h3 className="text-xl font-bold mb-2">Social Media</h3>
            <p className="text-gray-400">Stay connected</p>
          </div>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="bento-card group">
          <div className="flex flex-col h-full">
            <MessageSquare className="w-12 h-12 mb-4 text-pink-400" />
            <h3 className="text-xl font-bold mb-2">Let's work together</h3>
            <p className="text-gray-400">Get in touch for collaborations</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
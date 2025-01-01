import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, imageName: string) => {
    console.error(`Failed to load image: ${imageName}`);
    e.currentTarget.src = "/portfolio/placeholder.svg";
    toast({
      title: "Image loading error",
      description: `Failed to load ${imageName}. Using placeholder instead.`,
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Link to="/about" className="col-span-1 md:col-span-2 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="/portfolio/images/profilepicNoBack.webp"
              alt="Profile"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-400"
              onError={(e) => handleImageError(e, 'profile')}
              loading="eager"
            />
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
          <img 
            src="/portfolio/images/undraw_feeling-proud_tdos.svg"
            alt="Experiences"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'experiences')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Experiences</h3>
          <p className="text-gray-400">Professional journey and industry expertise</p>
        </Link>

        <Link to="/skills" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_percentages_wi9e.svg"
            alt="Skills & Expertise"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'skills')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Skills & Expertise</h3>
          <p className="text-gray-400">Technical skills and professional competencies</p>
        </Link>

        <Link to="/academic" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_detailed-analysis_w5a8.svg"
            alt="Academic"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'academic')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Academic</h3>
          <p className="text-gray-400">Explore academic achievements and scholarly work</p>
        </Link>

        <Link to="/projects" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_maker-launch_fwzi.svg"
            alt="Projects"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'projects')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
        </Link>

        <Link to="/awards" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_awards_faq6.svg"
            alt="Awards"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'awards')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Recognition and honors for research excellence</p>
        </Link>

        <Link to="/sports" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_greek-freak_p532.svg"
            alt="Sports"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'sports')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Sports</h3>
          <p className="text-gray-400">Athletic achievements and sports activities</p>
        </Link>

        <Link to="/volunteering" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_adventure_9my9.svg"
            alt="Volunteering"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'volunteering')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Volunteering</h3>
          <p className="text-gray-400">Community service and volunteer activities</p>
        </Link>

        <Link to="/competitions" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_firmware_3fxd.svg"
            alt="Competitions"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'competitions')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-400">Achievements in various competitions and challenges</p>
        </Link>

        <Link to="/blog" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_social-update_tf0a.svg"
            alt="Blog"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'blog')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
        </Link>

        <Link to="/contact" className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
          <img 
            src="/portfolio/images/undraw_phone-call_lpny.svg"
            alt="Contact"
            className="h-40 w-full object-contain mb-4"
            onError={(e) => handleImageError(e, 'contact')}
            loading="lazy"
          />
          <h3 className="text-xl font-bold mb-2">Let's work together</h3>
          <p className="text-gray-400">Reach out for collaborations and opportunities</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;

import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-400 hover:text-white bg-transparent">
                    Resume
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2 bg-[#1a1a1a] rounded-md">
                      <a 
                        href="/src/assets/SamithCV.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-[#242424] rounded-md"
                      >
                        Samith CV
                      </a>
                      <a 
                        href="/src/assets/SamithResume.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-[#242424] rounded-md"
                      >
                        Samith Resume
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      <div className="bento-grid">
        {/* Profile Card - Now links to About */}
        <Link to="/about" className="bento-card col-span-2">
          <div className="flex items-center gap-8">
            <img 
              src="/src/images/profilepicNoBack.webp" 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-400"
            />
            <div className="text-left">
              <h2 className="text-sm text-gray-400 mb-2">Welcome</h2>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Samith Chathuranga</span>
              </h1>
              <p className="text-gray-300 text-lg">
                A passionate researcher and innovator in artificial intelligence and machine learning, 
                with a focus on developing solutions that bridge the gap between theoretical advancement 
                and practical applications.
              </p>
            </div>
          </div>
        </Link>

        {/* Experiences Card */}
        <Link to="/experiences" className="bento-card">
          <img 
            src="/src/images/undraw_feeling-proud_tdos.svg" 
            alt="Experiences" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Experiences</h3>
          <p className="text-gray-400">Professional journey and industry expertise</p>
        </Link>

        {/* Skills & Expertise Card */}
        <Link to="/skills" className="bento-card">
          <img 
            src="/src/images/undraw_percentages_wi9e.svg" 
            alt="Skills & Expertise" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Skills & Expertise</h3>
          <p className="text-gray-400">Technical skills and professional competencies</p>
        </Link>

        {/* Academic Card */}
        <Link to="/academic" className="bento-card">
          <img 
            src="/src/images/undraw_detailed-analysis_w5a8.svg" 
            alt="Academic" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Academic</h3>
          <p className="text-gray-400">Explore academic achievements and scholarly work</p>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="bento-card">
          <img 
            src="/src/images/undraw_maker-launch_fwzi.svg" 
            alt="Projects" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
        </Link>

        {/* Awards Card */}
        <Link to="/awards" className="bento-card">
          <img 
            src="/src/images/undraw_awards_faq6.svg" 
            alt="Awards" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Recognition and honors for research excellence</p>
        </Link>

        {/* Sports Card */}
        <Link to="/sports" className="bento-card">
          <img 
            src="/src/images/undraw_greek-freak_p532.svg" 
            alt="Sports" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Sports</h3>
          <p className="text-gray-400">Athletic achievements and sports activities</p>
        </Link>

        {/* Volunteering Card */}
        <Link to="/volunteering" className="bento-card">
          <img 
            src="/src/images/undraw_adventure_9my9.svg" 
            alt="Volunteering" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Volunteering</h3>
          <p className="text-gray-400">Community service and volunteer activities</p>
        </Link>

        {/* Competitions Card */}
        <Link to="/competitions" className="bento-card">
          <img 
            src="/src/images/undraw_firmware_3fxd.svg" 
            alt="Competitions" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-400">Achievements in various competitions and challenges</p>
        </Link>

        {/* Blog Card */}
        <Link to="/blog" className="bento-card">
          <img 
            src="/src/images/undraw_social-update_tf0a.svg" 
            alt="Blog" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="bento-card">
          <img 
            src="/src/images/undraw_phone-call_lpny.svg" 
            alt="Contact" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Let's work together</h3>
          <p className="text-gray-400">Reach out for collaborations and opportunities</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400">Home</Link>
            <Link to="/research" className="text-gray-400 hover:text-white">Research</Link>
            <Link to="/academic" className="text-gray-400 hover:text-white">Academic</Link>
            <Link to="/sports" className="text-gray-400 hover:text-white">Sports</Link>
            <Link to="/volunteering" className="text-gray-400 hover:text-white">Volunteering</Link>
            <Link to="/competitions" className="text-gray-400 hover:text-white">Competitions</Link>
            <Link to="/experiences" className="text-gray-400 hover:text-white">Experiences</Link>
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/resume" className="text-gray-400 hover:text-white">Resume</Link>
          </div>
        </div>
      </nav>

      <div className="bento-grid">
        {/* Profile Card */}
        <div className="bento-card col-span-2">
          <div className="flex items-center gap-8">
            <img 
              src="https://cdn.pixabay.com/photo/2021/09/25/05/25/robot-6654029_960_720.png" 
              alt="Profile" 
              className="w-48 h-48 rounded-full object-cover border-4 border-blue-400"
            />
            <div className="text-left">
              <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Dr. Sarah Johnson</span>
              </h1>
              <p className="text-gray-300 text-lg">
                A passionate researcher and innovator in artificial intelligence and machine learning, 
                with a focus on developing solutions that bridge the gap between theoretical advancement 
                and practical applications.
              </p>
            </div>
          </div>
        </div>

        {/* Experiences Card */}
        <Link to="/experiences" className="bento-card">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Experiences" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Experiences</h3>
          <p className="text-gray-400">Professional journey and industry expertise</p>
        </Link>

        {/* Academic Card */}
        <Link to="/academic" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/academic-achievements.webp" 
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
            src="/src/images/undraw_home-run_n1g7.svg" 
            alt="Sports" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Sports</h3>
          <p className="text-gray-400">Athletic achievements and sports activities</p>
        </Link>

        {/* Volunteering Card */}
        <Link to="/volunteering" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/volunteer-work.webp" 
            alt="Volunteering" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Volunteering</h3>
          <p className="text-gray-400">Community service and volunteer activities</p>
        </Link>

        {/* Competitions Card */}
        <Link to="/competitions" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/competitions-awards.webp" 
            alt="Competitions" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Competitions</h3>
          <p className="text-gray-400">Achievements in various competitions and challenges</p>
        </Link>

        {/* Blog Card */}
        <Link to="/blog" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/blog-writing.webp" 
            alt="Blog" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Insights and thoughts on AI, ML, and research</p>
        </Link>

        {/* Social Media Card */}
        <Link to="/social" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/social-media.webp" 
            alt="Social Media" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Social Media</h3>
          <p className="text-gray-400">Connect with me across various platforms</p>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/contact-communication.webp" 
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
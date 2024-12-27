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

        {/* Publications Card */}
        <Link to="/publications" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/academic-publications.webp" 
            alt="Publications" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Publications</h3>
          <p className="text-gray-400">Explore my research papers and academic contributions in AI and ML</p>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/tech-projects.webp" 
            alt="Projects" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Discover innovative technical implementations and research projects</p>
        </Link>

        {/* Awards Card */}
        <Link to="/awards" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/awards-trophies.webp" 
            alt="Awards" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Recognition and honors for research excellence</p>
        </Link>

        {/* Grants Card */}
        <Link to="/grants" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/research-grants.webp" 
            alt="Grants" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Grants</h3>
          <p className="text-gray-400">Funded research initiatives and ongoing projects</p>
        </Link>

        {/* Patents Card */}
        <Link to="/patents" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/patent-documents.webp" 
            alt="Patents" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Patents</h3>
          <p className="text-gray-400">Innovative technologies and intellectual property</p>
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
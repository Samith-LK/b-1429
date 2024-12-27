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
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/profile-researcher.webp" 
            alt="Profile" 
            className="bento-card-image"
          />
          <h2 className="text-sm text-gray-400 mb-2">welcome</h2>
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-blue-400">Your Name</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A software developer with a passion for creating beautiful and functional web experiences
          </p>
        </div>

        {/* Publications Card */}
        <Link to="/publications" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/academic-publications.webp" 
            alt="Publications" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Publications</h3>
          <p className="text-gray-400">Research papers and academic work</p>
        </Link>

        {/* Projects Card */}
        <Link to="/projects" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/tech-projects.webp" 
            alt="Projects" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Projects</h3>
          <p className="text-gray-400">Technical projects and implementations</p>
        </Link>

        {/* Awards Card */}
        <Link to="/awards" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/awards-trophies.webp" 
            alt="Awards" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Awards</h3>
          <p className="text-gray-400">Achievements and recognition</p>
        </Link>

        {/* Grants Card */}
        <Link to="/grants" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/research-grants.webp" 
            alt="Grants" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Grants</h3>
          <p className="text-gray-400">Research grants and funding</p>
        </Link>

        {/* Patents Card */}
        <Link to="/patents" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/patent-documents.webp" 
            alt="Patents" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Patents</h3>
          <p className="text-gray-400">Intellectual property and innovations</p>
        </Link>

        {/* Blog Card */}
        <Link to="/blog" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/blog-writing.webp" 
            alt="Blog" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Blog</h3>
          <p className="text-gray-400">Thoughts and articles</p>
        </Link>

        {/* Social Media Card */}
        <Link to="/social" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/social-media.webp" 
            alt="Social Media" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Social Media</h3>
          <p className="text-gray-400">Stay connected</p>
        </Link>

        {/* Contact Card */}
        <Link to="/contact" className="bento-card">
          <img 
            src="https://im.runware.ai/image/ws/0.5/ii/contact-communication.webp" 
            alt="Contact" 
            className="bento-card-image"
          />
          <h3 className="text-xl font-bold mb-2">Let's work together</h3>
          <p className="text-gray-400">Get in touch for collaborations</p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
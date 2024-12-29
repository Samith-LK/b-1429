import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Let's work together</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">Email:</span>
                <a href="mailto:contact@example.com" className="hover:text-blue-400">
                  contact@example.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 (234) 567-890
                </a>
              </p>
              <p className="flex items-center">
                <span className="text-blue-400 mr-2">Location:</span>
                <span>City, Country</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
            <div className="space-y-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                GitHub
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-blue-400"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-xl mb-4">
            Interested in collaboration? Let's discuss your project!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
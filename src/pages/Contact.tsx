import ScrollFadeIn from '@/components/ScrollFadeIn';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <h1 className="text-4xl font-bold mb-8">Contact Information</h1>
        </ScrollFadeIn>
        
        <div className="grid gap-8">
          <ScrollFadeIn delay={0.1}>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-blue-400 mr-2">Phone:</span>
                  <a href="tel:+94717024913" className="hover:text-blue-400">
                    (+94) 717024913
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-400 mr-2">Email:</span>
                  <a href="mailto:samith.perera.lk@ieee.org" className="hover:text-blue-400">
                    samith.perera.lk@ieee.org
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-400 mr-2">Address:</span>
                  <span>72/6A, Old Kesbawa Rd, Gangodawila, Nugegoda.</span>
                </p>
                <p className="flex items-center">
                  <span className="text-blue-400 mr-2">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/scperera" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    www.linkedin.com/in/scperera
                  </a>
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Career Objective</h2>
              <p className="text-gray-300">
                To lead automation initiatives by leveraging my expertise in AI, IoT, and system integration,
                driving efficiency and delivering innovative solutions that align with organizational goals.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.3}>
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Social Media</h2>
              <div className="flex space-x-6 justify-center">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook size={32} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Instagram size={32} />
                </a>
                <a 
                  href="https://linkedin.com/in/scperera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={32} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Twitter size={32} />
                </a>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
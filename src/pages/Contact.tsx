import ScrollFadeIn from '@/components/ScrollFadeIn';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8">Contact Information</h1>
        </ScrollFadeIn>
        
        <div className="grid gap-4 sm:gap-8">
          <ScrollFadeIn delay={0.1}>
            <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg">
              <div className="space-y-3 sm:space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-blue-400 font-medium">Phone:</span>
                  <a href="tel:+94717024913" className="hover:text-blue-400">
                    (+94) 717024913
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-blue-400 font-medium">Email:</span>
                  <a href="mailto:samith.perera.lk@ieee.org" className="hover:text-blue-400 break-all">
                    samith.perera.lk@ieee.org
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-blue-400 font-medium">Address:</span>
                  <span>72/6A, Old Kesbawa Rd, Gangodawila, Nugegoda.</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="text-blue-400 font-medium">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/scperera" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 break-all">
                    www.linkedin.com/in/scperera
                  </a>
                </p>
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">Career Objective</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                To lead automation initiatives by leveraging my expertise in AI, IoT, and system integration,
                driving efficiency and delivering innovative solutions that align with organizational goals.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.3}>
            <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-400">Social Media</h2>
              <div className="flex flex-wrap gap-6 justify-center">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook size={28} className="sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Instagram size={28} className="sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://linkedin.com/in/scperera" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={28} className="sm:w-8 sm:h-8" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Twitter size={28} className="sm:w-8 sm:h-8" />
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
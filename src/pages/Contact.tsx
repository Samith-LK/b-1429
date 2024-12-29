const Contact = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Information</h1>
        
        <div className="grid gap-8">
          {/* Contact Details */}
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

          {/* Career Objective */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Career Objective</h2>
            <p className="text-gray-300">
              To lead automation initiatives by leveraging my expertise in AI, IoT, and system integration,
              driving efficiency and delivering innovative solutions that align with organizational goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8">
        {/* Technical Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <p className="text-gray-300">Python, Java, C++, JavaScript, TypeScript</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Web Technologies</h3>
              <p className="text-gray-300">React, Node.js, HTML5, CSS3, REST APIs</p>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Machine Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Frameworks</h3>
              <p className="text-gray-300">TensorFlow, PyTorch, Scikit-learn, Keras</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Areas</h3>
              <p className="text-gray-300">Deep Learning, NLP, Computer Vision, Reinforcement Learning</p>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Tools & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Development Tools</h3>
              <p className="text-gray-300">Git, Docker, VS Code, Jupyter Notebooks</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Cloud Platforms</h3>
              <p className="text-gray-300">AWS, Google Cloud, Azure</p>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-400">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Communication</h3>
              <p className="text-gray-300">Technical Writing, Presentation, Team Collaboration</p>
            </div>
            <div className="bg-card p-4 rounded-lg">
              <h3 className="font-medium mb-2">Project Management</h3>
              <p className="text-gray-300">Agile Methodologies, Team Leadership, Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
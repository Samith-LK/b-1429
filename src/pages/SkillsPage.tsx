import ScrollFadeIn from '@/components/ScrollFadeIn';

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "AI and Machine Learning",
      skills: ["TensorFlow", "PyTorch", "LangChain", "Neo4j", "Pinecone"]
    },
    {
      title: "Programming / Scripting Languages",
      skills: ["MicroC", "C/C++", "Java", "MySQL", "JavaScript", "Arduino", "React", "Python"]
    },
    {
      title: "PLC/HMI Programming",
      skills: ["Xinje PLC & HMI", "Omron PLC", "Mitsubishi PLC", "Unitronics PLC & HMI", "Samkoon HMI"]
    },
    {
      title: "Hardware Design & Other Tools",
      skills: ["Eagle CAD", "KiCAD", "Proteus", "DGLux5", "Onshape", "QT Creator", "OpenCV"]
    },
    {
      title: "Version Control",
      skills: ["GitHub", "Git", "Azure DevOps"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Skills & Expertise</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto grid gap-8">
        {skillCategories.map((category, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div className="bg-card p-6 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{category.title}</h2>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-[#1a1a1a] rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
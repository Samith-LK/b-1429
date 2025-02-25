import ScrollFadeIn from '@/components/ScrollFadeIn';

const Academic = () => {
  const academicAchievements = [
    {
      title: "B.Sc Applied Science",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "Embedded Machine Learning for Edge Computing",
      institution: "University of Moratuwa | ENTC",
      description: ""
    },
    {
      title: "Embedded Product Design for IoT",
      institution: "University of Moratuwa | ENTC",
      description: ""
    },
    {
      title: "Certificate in Project Management",
      institution: "Global Eye International",
      description: ""
    },
    {
      title: "DevOps Training",
      institution: "Simplilearn",
      description: ""
    },
    {
      title: "Building Real-World Applications With LLMs",
      institution: "Udacity",
      description: ""
    },
    {
      title: "Build a Neo4j-backed Chatbot using Python",
      institution: "Neo4j",
      description: ""
    },
    {
      title: "G.C.E. O/L & A/L (Combined Mathematics)",
      institution: "Ananda College, Colombo 10",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Academic Achievements</h1>
      </ScrollFadeIn>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {academicAchievements.map((achievement, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div className="bg-card p-6 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-2 text-blue-400">{achievement.title}</h2>
              <p className="text-gray-400 mb-2">{achievement.institution}</p>
              {achievement.description && (
                <p className="text-gray-300">{achievement.description}</p>
              )}
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Academic;
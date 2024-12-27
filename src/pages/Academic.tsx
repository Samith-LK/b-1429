const Academic = () => {
  const academicAchievements = [
    {
      title: "Dean's List Recognition",
      year: "2023",
      description: "Achieved academic excellence with a GPA of 3.95/4.0",
      image: "https://im.runware.ai/image/ws/0.5/ii/deans-list.webp"
    },
    {
      title: "Research Publication in Computer Science",
      year: "2022",
      description: "Published research on AI applications in healthcare",
      image: "https://im.runware.ai/image/ws/0.5/ii/research-publication.webp"
    },
    {
      title: "Academic Excellence Scholarship",
      year: "2021",
      description: "Awarded full scholarship for outstanding academic performance",
      image: "https://im.runware.ai/image/ws/0.5/ii/scholarship.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Academic Achievements</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {academicAchievements.map((achievement, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <img 
              src={achievement.image} 
              alt={achievement.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{achievement.title}</h2>
            <p className="text-gray-400 mb-2">{achievement.year}</p>
            <p className="text-gray-300">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
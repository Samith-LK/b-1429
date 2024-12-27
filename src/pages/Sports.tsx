const Sports = () => {
  const sportsAchievements = [
    {
      title: "University Basketball Team Captain",
      year: "2023",
      description: "Led the team to regional championship victory",
      image: "https://im.runware.ai/image/ws/0.5/ii/basketball-team.webp"
    },
    {
      title: "Marathon Completion",
      year: "2022",
      description: "Completed the city marathon in under 4 hours",
      image: "https://im.runware.ai/image/ws/0.5/ii/marathon.webp"
    },
    {
      title: "Swimming Competition",
      year: "2021",
      description: "Won gold medal in 100m freestyle university championship",
      image: "https://im.runware.ai/image/ws/0.5/ii/swimming.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Sports Achievements</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {sportsAchievements.map((achievement, index) => (
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

export default Sports;
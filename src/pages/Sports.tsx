const Sports = () => {
  const sportsAchievements = [
    {
      title: "Champions - Fresher's Table Tennis tournament 2013",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "Champions - Inter Faculty Table Tennis Tournament 2015",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "1st Runner up - Inter Faculty Table Tennis tournament 2014",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "1st Runner up - Fresher's Carrom tournament 2013",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "Vice-Captain - Table Tennis Team (2014/2015)",
      institution: "Wayamba University of Sri Lanka",
      description: ""
    },
    {
      title: "International Sports Participation",
      institution: "10th UiTM International Sports Fiesta 2015 in ShahAlam, Malaysia",
      description: ""
    },
    {
      title: "Carrom Federation Tournaments",
      description: "Participated in multiple tournaments representing the university"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Sports Achievements</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {sportsAchievements.map((achievement, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{achievement.title}</h2>
            {achievement.institution && (
              <p className="text-gray-400 mb-2">{achievement.institution}</p>
            )}
            {achievement.description && (
              <p className="text-gray-300">{achievement.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
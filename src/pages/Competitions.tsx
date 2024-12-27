const Competitions = () => {
  const competitions = [
    {
      title: "International Hackathon Winner",
      year: "2023",
      description: "First place in AI/ML category at Global Tech Hackathon",
      image: "https://im.runware.ai/image/ws/0.5/ii/hackathon.webp"
    },
    {
      title: "Coding Competition Finalist",
      year: "2022",
      description: "Top 5 finalist in national coding championship",
      image: "https://im.runware.ai/image/ws/0.5/ii/coding-competition.webp"
    },
    {
      title: "Innovation Challenge Winner",
      year: "2021",
      description: "Won first prize for innovative solution in sustainability",
      image: "https://im.runware.ai/image/ws/0.5/ii/innovation-challenge.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Competition Achievements</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {competitions.map((competition, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <img 
              src={competition.image} 
              alt={competition.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{competition.title}</h2>
            <p className="text-gray-400 mb-2">{competition.year}</p>
            <p className="text-gray-300">{competition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
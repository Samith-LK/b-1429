const Volunteering = () => {
  const volunteerWork = [
    {
      title: "Local Food Bank Volunteer",
      period: "2022-2023",
      description: "Organized and distributed food to families in need, serving over 1000 families",
      image: "https://im.runware.ai/image/ws/0.5/ii/food-bank.webp"
    },
    {
      title: "Environmental Clean-up Initiative",
      period: "2021-2022",
      description: "Led a team of 50 volunteers in coastal clean-up operations",
      image: "https://im.runware.ai/image/ws/0.5/ii/environmental-cleanup.webp"
    },
    {
      title: "Youth Mentorship Program",
      period: "2020-2021",
      description: "Mentored underprivileged youth in STEM subjects",
      image: "https://im.runware.ai/image/ws/0.5/ii/youth-mentorship.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Volunteer Work</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {volunteerWork.map((work, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <img 
              src={work.image} 
              alt={work.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{work.title}</h2>
            <p className="text-gray-400 mb-2">{work.period}</p>
            <p className="text-gray-300">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
const Experiences = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021-2023",
      description: "Led development of AI-powered solutions for enterprise clients. Managed a team of 5 developers and implemented cutting-edge machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      title: "Machine Learning Engineer",
      company: "Data Solutions Co.",
      period: "2019-2021",
      description: "Developed and deployed machine learning models for predictive analytics. Improved system efficiency by 40% through optimization techniques.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl border border-gray-800">
            <img 
              src={experience.image} 
              alt={experience.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-blue-400">{experience.title}</h2>
            <h3 className="text-xl text-gray-300 mb-2">{experience.company}</h3>
            <p className="text-gray-400 mb-2">{experience.period}</p>
            <p className="text-gray-300">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
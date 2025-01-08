import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Competitions = () => {
  const competitions = [
    {
      title: "International Hackathon Winner",
      year: "2023",
      description: "• First place in AI/ML category at Global Tech Hackathon\n• Developed an innovative solution using cutting-edge AI/ML\n• Recognition for technical excellence",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Coding Competition Finalist",
      year: "2022",
      description: "• Top 5 finalist in national coding championship\n• Advanced problem-solving demonstration\n• Algorithm optimization excellence",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Innovation Challenge Winner",
      year: "2021",
      description: "• First prize for innovative sustainability solution\n• Impact-driven project development\n• Environmental technology innovation",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">COMPETITION ACHIEVEMENTS</h1>
      </ScrollFadeIn>
      <div className="bento-grid">
        {competitions.map((competition, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={competition.title}
              content={`${competition.year}\n\n${competition.description}`}
              images={competition.images}
              maxPreviewLength={0}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Competitions;
import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Competitions = () => {
  const competitions = [
    {
      title: "International Hackathon Winner",
      year: "2023",
      description: "First place in AI/ML category at Global Tech Hackathon. Developed an innovative solution that showcased cutting-edge artificial intelligence and machine learning capabilities.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Coding Competition Finalist",
      year: "2022",
      description: "Top 5 finalist in national coding championship",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Innovation Challenge Winner",
      year: "2021",
      description: "Won first prize for innovative solution in sustainability",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Competition Achievements</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto space-y-8">
        {competitions.map((competition, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={competition.title}
              content={`${competition.year} - ${competition.description}`}
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

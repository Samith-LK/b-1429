import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Competitions = () => {
  const competitions = [
    {
      title: "FAS Awards 2016 - WUSL",
      description: "• In recognition of valuable contribution made to National | Social | Institutional development during the Undergraduate period",
      images: []
    },
    {
      title: "Champions - SAITM Robotics Challenge 2015",
      description: "• All Island Robotics Competition",
      images: []
    },
    {
      title: "Champions - Technosoft 2015 Robotics Competition",
      description: "• All Island Robotics Competition",
      images: []
    },
    {
      title: "1st Runner up - IESL RoboGames 2015",
      description: "• All Island Robotics Competition",
      images: []
    },
    {
      title: "5th place - FASBOT Robotics Competition 2013",
      description: "• Wayamba University of Sri Lanka",
      images: []
    },
    {
      title: "Among Top 17 Teams - OpenAI Hackathon 2024",
      description: "• Hatch Works & Veracity Group",
      images: []
    },
    {
      title: "Among Top 20 Teams - IEEE IES Generative AI Hackathon 2024",
      description: "• IEEE Industrial Electronics Society",
      images: []
    },
    {
      title: "Ranked 23rd - ACES CODERS 2015",
      description: "• All Island Programming Competition",
      images: []
    },
    {
      title: "Ranked 772 (World) & 129 (Sri Lanka) - IEEEXtreme Programming Competition 2015",
      description: "• Global 24-hour Programming Competition",
      images: []
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
              content={competition.description}
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
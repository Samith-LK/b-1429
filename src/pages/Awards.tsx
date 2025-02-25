import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Awards = () => {
  const awards = [
    {
      title: "FAS Awards 2016 - WUSL",
      description: "• In recognition of the valuable contribution made to:\n• National Development\n• Social Development\n• Institutional Development\n• During the Undergraduate period",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Champions - SAITM Robotics Challenge 2015",
      description: "• All Island Robotics Competition\n• First place among 50+ teams\n• Innovative solution implementation\n• Technical excellence award"
    },
    {
      title: "Champions - Technosoft 2015 Robotics Competition",
      description: "• All Island Robotics Competition\n• Best technical implementation\n• Outstanding team performance"
    },
    {
      title: "1st Runner up - IESL RoboGames 2015",
      description: "• All Island Robotics Competition\n• Second place overall\n• Best innovation award"
    },
    {
      title: "5th place - FASBOT Robotics Competition 2013",
      description: "• Wayamba University of Sri Lanka\n• Top 5 finish\n• Technical innovation recognition"
    },
    {
      title: "Among Top 17 Teams - OpenAI Hackathon 2024",
      description: "• Hatch Works & Veracity Group\n• Innovative AI solution\n• Recognition for technical implementation"
    },
    {
      title: "Among Top 20 Teams - IEEE IES Generative AI Hackathon 2024",
      description: "• IEEE Industrial Electronics Society\n• Advanced AI implementation\n• Technical excellence recognition"
    },
    {
      title: "Ranked 23rd - ACES CODERS 2015",
      description: "• All Island Programming Competition\n• Top 25 finish\n• Recognition for programming excellence"
    },
    {
      title: "Ranked 772 (World) & 129 (Sri Lanka) - IEEEXtreme 9.0 Programming Competition 2015",
      description: "• IEEE Programming Competition\n• Global ranking: 772\n• National ranking: 129\n• 24-hour programming challenge"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">ACHIEVEMENTS</h1>
      </ScrollFadeIn>
      <div className="bento-grid">
        {awards.map((award, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={award.title}
              content={award.description}
              images={award.images}
              maxPreviewLength={0}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Awards;
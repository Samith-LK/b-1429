import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Awards = () => {
  const awards = [
    {
      title: "FAS Awards 2016 - WUSL",
      description: "In recognition of the valuable contribution made to National | Social | Institutional development during the Undergraduate period",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Champions - SAITM Robotics Challenge 2015",
      description: "All Island Robotics Competition"
    },
    {
      title: "Champions - Technosoft 2015 Robotics Competition",
      description: "All Island Robotics Competition"
    },
    {
      title: "1st Runner up - IESL RoboGames 2015",
      description: "All Island Robotics Competition"
    },
    {
      title: "5th place - FASBOT Robotics Competition 2013",
      description: "Wayamba University of Sri Lanka"
    },
    {
      title: "Among Top 17 Teams - OpenAI Hackathon 2024",
      description: "Hatch Works & Veracity Group"
    },
    {
      title: "Among Top 20 Teams - IEEE IES Generative AI Hackathon 2024",
      description: "IEEE Industrial Electronics Society"
    },
    {
      title: "Ranked 23rd - ACES CODERS 2015",
      description: "All Island Programming Competition"
    },
    {
      title: "Ranked 772 (World) & 129 (Sri Lanka) - IEEEXtreme 9.0 Programming Competition 2015",
      description: "IEEE Programming Competition"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">ACHIEVEMENTS</h1>
      </ScrollFadeIn>
      <div className="grid gap-6">
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

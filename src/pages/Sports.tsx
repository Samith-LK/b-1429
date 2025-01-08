import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Sports = () => {
  const sportsAchievements = [
    {
      title: "Champions - Fresher's Table Tennis tournament 2013",
      institution: "Wayamba University of Sri Lanka",
      description: "Won the championship title in the university-wide table tennis tournament for freshers, demonstrating exceptional skill and sportsmanship.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
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
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Sports Achievements</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto space-y-8">
        {sportsAchievements.map((achievement, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={achievement.title}
              content={`${achievement.institution ? `${achievement.institution} - ` : ''}${achievement.description}`}
              images={achievement.images}
              maxPreviewLength={0}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Sports;

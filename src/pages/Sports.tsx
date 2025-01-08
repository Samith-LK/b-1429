import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

const Sports = () => {
  const sportsAchievements = [
    {
      title: "Champions - Fresher's Table Tennis tournament 2013",
      institution: "Wayamba University of Sri Lanka",
      description: "• Won the championship title in the university-wide table tennis tournament for freshers\n• Demonstrated exceptional skill and sportsmanship",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Champions - Inter Faculty Table Tennis Tournament 2015",
      institution: "Wayamba University of Sri Lanka",
      description: "• First place in university-wide competition\n• Led team to victory\n• Outstanding performance recognition"
    },
    {
      title: "1st Runner up - Inter Faculty Table Tennis tournament 2014",
      institution: "Wayamba University of Sri Lanka",
      description: "• Second place overall\n• Exceptional team coordination\n• Strategic gameplay commendation"
    },
    {
      title: "1st Runner up - Fresher's Carrom tournament 2013",
      institution: "Wayamba University of Sri Lanka",
      description: "• Second place in freshman tournament\n• Notable strategic gameplay\n• Recognition for sportsmanship"
    },
    {
      title: "Vice-Captain - Table Tennis Team (2014/2015)",
      institution: "Wayamba University of Sri Lanka",
      description: "• Leadership role in university team\n• Team management and strategy\n• Mentoring junior players"
    },
    {
      title: "International Sports Participation",
      institution: "10th UiTM International Sports Fiesta 2015 in ShahAlam, Malaysia",
      description: "• International tournament representation\n• Cultural exchange experience\n• High-level competition exposure"
    },
    {
      title: "Carrom Federation Tournaments",
      description: "• Multiple tournament participation\n• University representation\n• Consistent performance record"
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">SPORTS ACHIEVEMENTS</h1>
      </ScrollFadeIn>
      <div className="bento-grid">
        {sportsAchievements.map((achievement, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={achievement.title}
              content={`${achievement.institution ? `${achievement.institution}\n\n` : ''}${achievement.description}`}
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
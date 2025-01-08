import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

interface VolunteerWork {
  title: string;
  description: string;
  images: string[];
}

const Volunteering = () => {
  const volunteerWork: VolunteerWork[] = [
    {
      title: "Vice-Chairman - IEEE Young Professional Sri Lanka 2018",
      description: "• Led initiatives bridging academic and professional engineering communities\n• Organized workshops and seminars for professional development\n• Coordinated networking events for young engineers",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Founding Chairman - IEEE Wayamba University Student Branch",
      description: "• Established first IEEE student branch at Wayamba University\n• Created opportunities for global engineering community engagement\n• Facilitated access to professional development resources",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Delegate - Representing Sri Lanka",
      description: "• IEEE Region 10 (Asia-Pacific) Student/YP/WIE Congress 2015\n• Contributed to technological advancement discussions\n• Participated in professional development forums",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Publicity & Social Media Committee",
      description: "• IEEE Region10 Congress 2015\n• Managed social media presence\n• Increased event visibility and engagement",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Leader of Publicity & Social Media Committee",
      description: "• IEEE Sri Lanka Congress 2015\n• Led social media strategy\n• Improved event attendance and engagement",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Student Ambassador - Microsoft Sri Lanka",
      description: "• Represented Microsoft at university events\n• Promoted technology adoption\n• Shared software development best practices",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Technical Committee",
      description: "• WICC 2014 at Wayamba University\n• Contributed to technical planning\n• Managed technical sessions",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Technical Committee",
      description: "• ASETRTE at Wayamba University\n• Organized technical aspects\n• Facilitated knowledge sharing",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Treasurer of Mathematical Society (2014/2015)",
      description: "• Managed society's financial operations\n• Organized mathematical competitions\n• Promoted mathematical thinking",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">VOLUNTEER WORK & LEADERSHIP</h1>
      </ScrollFadeIn>
      <div className="bento-grid">
        {volunteerWork.map((work, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={work.title}
              content={work.description}
              images={work.images}
              maxPreviewLength={0}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
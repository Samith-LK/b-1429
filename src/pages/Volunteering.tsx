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
      description: "Led initiatives to bridge the gap between academic and professional engineering communities. Organized workshops, seminars, and networking events to foster professional development among young engineers.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Founding Chairman - IEEE Wayamba University of Sri Lanka Student Branch",
      description: "Established and led the first IEEE student branch at Wayamba University, creating opportunities for students to engage with the global engineering community and access professional development resources.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Delegate - Representing Sri Lanka",
      description: "IEEE Region 10 (Asia-Pacific) Student | Young Professionals | Women in Engineering Congress 2015 at Colombo Sri Lanka. Represented Sri Lanka in international engineering forums, contributing to discussions on technological advancement and professional development in the Asia-Pacific region.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Publicity & Social Media Committee",
      description: "IEEE Region10 (Asia-Pacific) Student | Young Professional | Women in Engineering Congress 2015 at Colombo Sri Lanka. Managed social media presence and publicity campaigns for major IEEE events, increasing visibility and engagement across the region.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Leader of Publicity & Social Media Committee",
      description: "IEEE Sri Lanka Student | Young Professional | Women in Engineering Congress 2015 at Colombo Sri Lanka. Led the social media strategy and publicity efforts for national IEEE events, significantly improving event attendance and online engagement.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Student Ambassador - Microsoft Sri Lanka",
      description: "Represented Microsoft in university events and programs, promoting technology adoption and software development best practices among students.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Technical Committee",
      description: "WICC (Wayamba International Conference 2014) at Wayamba University of Sri Lanka. Contributed to the technical planning and execution of the international conference, ensuring smooth operation of technical sessions and presentations.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Member of Technical Committee",
      description: "ASETRTE (Annual Symposium of Department of Electronics) at Wayamba University of Sri Lanka. Assisted in organizing and managing technical aspects of the annual symposium, facilitating knowledge sharing among electronics engineering students and faculty.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    },
    {
      title: "Treasurer of Mathematical Society (2014/2015)",
      description: "Wayamba University of Sri Lanka. Managed financial operations of the society, organized mathematical competitions and workshops to promote mathematical thinking among students.",
      images: ["/lovable-uploads/2e7d8ff6-f40b-49d4-be8f-28a5a3a357b3.png"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Volunteer Work & Leadership</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
        {volunteerWork.map((work, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={work.title}
              content={work.description}
              images={work.images}
              maxPreviewLength={0}  // Set to 0 to initially hide the content
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
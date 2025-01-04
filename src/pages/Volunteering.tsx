import ScrollFadeIn from '@/components/ScrollFadeIn';

const Volunteering = () => {
  const volunteerWork = [
    {
      title: "Vice-Chairman - IEEE Young Professional Sri Lanka 2018",
      description: ""
    },
    {
      title: "Founding Chairman - IEEE Wayamba University of Sri Lanka Student Branch",
      description: ""
    },
    {
      title: "Delegate - Representing Sri Lanka",
      description: "IEEE Region 10 (Asia-Pacific) Student | Young Professionals | Women in Engineering Congress 2015 at Colombo Sri Lanka"
    },
    {
      title: "Member of Publicity & Social Media Committee",
      description: "IEEE Region10 (Asia-Pacific) Student | Young Professional | Women in Engineering Congress 2015 at Colombo Sri Lanka"
    },
    {
      title: "Leader of Publicity & Social Media Committee",
      description: "IEEE Sri Lanka Student | Young Professional | Women in Engineering Congress 2015 at Colombo Sri Lanka"
    },
    {
      title: "Student Ambassador - Microsoft Sri Lanka",
      description: ""
    },
    {
      title: "Member of Technical Committee",
      description: "WICC (Wayamba International Conference 2014) at Wayamba University of Sri Lanka"
    },
    {
      title: "Member of Technical Committee",
      description: "ASETRTE (Annual Symposium of Department of Electronics) at Wayamba University of Sri Lanka"
    },
    {
      title: "Treasurer of Mathematical Society (2014/2015)",
      description: "Wayamba University of Sri Lanka"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">Volunteer Work & Leadership</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto space-y-8">
        {volunteerWork.map((work, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <div className="bg-card p-6 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-2 text-blue-400">{work.title}</h2>
              {work.description && (
                <p className="text-gray-300">{work.description}</p>
              )}
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
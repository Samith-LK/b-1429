import ScrollFadeIn from '@/components/ScrollFadeIn';
import BentoCard from '@/components/BentoCard';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: (string | string[])[];
  logo?: string;
}

const Experiences = () => {
  const experiences: Experience[] = [
    {
      title: "EMBEDDED ENGINEER - AI",
      company: "IPD COLOMBO PVT.LTD",
      period: "Sep 2022 - Present",
      logo: "/lovable-uploads/61a7bee4-1e2c-4d84-ad2b-29d9779eda55.png",
      achievements: [
        "Developed RAG based chatbots to boost productivity, using cutting-edge LLMs and AI tools",
        "Designed front-end applications for Building Management Systems (BMS) using React, DGLux5, Node-Red, and Skyspark",
        "Implemented a communication protocol conversion method to the DER-related IEEE2030.5 protocol"
      ]
    },
    {
      title: "ELECTRONICS ENGINEER",
      company: "HITECH SOLUTIONS PVT. LTD",
      period: "June 2016 - June 2022",
      logo: "/lovable-uploads/61a7bee4-1e2c-4d84-ad2b-29d9779eda55.png",
      achievements: [
        "Optimized vision-based width and length measuring software, enhancing precision and operational efficiency",
        "Led cross-functional teams to design and deploy custom industrial automation solutions",
        "Engineered end-to-end automation for:",
        [
          "Fabric relaxing, inspection, and cutting machines",
          "Automatic tire cutting machines",
          "Automatic wrapping systems",
          "Gantry cranes, conveyor systems, and goods hoists",
          "Gate barriers, parking systems, and wire-checking",
          "IoT-based data monitoring systems for real-time operational insights"
        ],
        "Integrated vision-based guidance systems for AGVs",
        "Collaborated with stakeholders to install, commission, and optimize automation solutions",
        "Provided technical leadership in product development",
        "Successfully executed international projects across Asia",
        "Represented SLEMEA as a delegate in Vietnam and Thailand"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        <ScrollFadeIn>
          <h1 className="text-4xl font-bold mb-8">Professional Experience</h1>
        </ScrollFadeIn>
        {experiences.map((experience, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={`${experience.title} at ${experience.company}`}
              content={`${experience.period}\n\n${experience.achievements.map(achievement => 
                Array.isArray(achievement) 
                  ? achievement.join('\n• ')
                  : achievement
              ).join('\n• ')}`}
              images={experience.logo ? [experience.logo] : []}
              maxPreviewLength={0}
            />
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};

export default Experiences;

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
        "• Developed RAG based chatbots to boost productivity, using cutting-edge LLMs and AI tools",
        "• Designed front-end applications for Building Management Systems (BMS) using React, DGLux5, Node-Red, and Skyspark",
        "• Implemented a communication protocol conversion method to the DER-related IEEE2030.5 protocol"
      ]
    },
    {
      title: "ELECTRONICS ENGINEER",
      company: "HITECH SOLUTIONS PVT. LTD",
      period: "June 2016 - June 2022",
      logo: "/lovable-uploads/61a7bee4-1e2c-4d84-ad2b-29d9779eda55.png",
      achievements: [
        "• Optimized vision-based width and length measuring software",
        "• Led cross-functional teams for industrial automation solutions",
        "• Engineered automation systems for:",
        [
          "- Fabric relaxing, inspection, and cutting machines",
          "- Automatic tire cutting machines",
          "- Automatic wrapping systems",
          "- Gantry cranes and conveyor systems",
          "- Gate barriers and parking systems",
          "- IoT-based monitoring systems"
        ],
        "• Integrated vision-based guidance for AGVs",
        "• Successfully executed international projects across Asia",
        "• Represented SLEMEA as delegate in Vietnam and Thailand"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl">
      <ScrollFadeIn>
        <h1 className="text-3xl font-bold mb-8 text-blue-400">PROFESSIONAL EXPERIENCE</h1>
      </ScrollFadeIn>
      <div className="bento-grid">
        {experiences.map((experience, index) => (
          <ScrollFadeIn key={index} delay={index * 0.1}>
            <BentoCard
              title={`${experience.title} at ${experience.company}`}
              content={`${experience.period}\n\n${experience.achievements.map(achievement => 
                Array.isArray(achievement) 
                  ? achievement.join('\n')
                  : achievement
              ).join('\n')}`}
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
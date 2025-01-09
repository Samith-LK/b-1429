import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFadeIn from "@/components/ScrollFadeIn";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  fullContent: string;
  technologies: string[];
}

const sampleProjects: Project[] = [
  {
    id: 1,
    title: "Intelicart - AI Powered E-commerce Platform",
    description: "Transforming E-commerce Search Using Open-Source LLMs and CLIP-Powered Multi-model Architecture.",
    image: "https://im.runware.ai/image/ws/0.5/ii/ai-ecommerce.webp",
    fullContent: "Transforming E-commerce Search Using Open-Source LLMs and CLIP-Powered Multi-model Architecture. An innovative platform that leverages artificial intelligence to enhance the online shopping experience through advanced search capabilities and personalized recommendations.",
    technologies: ["AI/ML", "LLMs", "CLIP", "React", "Python"]
  },
  {
    id: 2,
    title: "High Capacity Heavy-Duty Continues Shaking Incubator",
    description: "Chemical shaking device with speed and temperature control used in molecular plantation.",
    image: "https://im.runware.ai/image/ws/0.5/ii/biotech.webp",
    fullContent: "Chemical shaking device with speed and temperature control used in molecular plantation for the Department of Biochemistry and Molecular Biology, Faculty of Medicine, University of Colombo. Advanced system for bacterial growth and molecular studies.",
    technologies: ["Embedded Systems", "Temperature Control", "Mechanical Engineering"]
  },
  {
    id: 3,
    title: "Autonomous Robots",
    description: "Designed and developed various task-oriented autonomous robots for all island robotics competitions.",
    image: "https://im.runware.ai/image/ws/0.5/ii/robotics.webp",
    fullContent: "Designed and developed various task-oriented autonomous robots for all island robotics competitions. Included capabilities: Object detection and manipulation, Grid navigation, Color detection, Volume measuring, Maze solving, and any given specific tasks.",
    technologies: ["Robotics", "Computer Vision", "AI", "Embedded Systems"]
  },
  {
    id: 4,
    title: "Carrom Scoring and Judging Framework",
    description: "Computer vision-based automated system for unbiased game scoring and judging support.",
    image: "https://im.runware.ai/image/ws/0.5/ii/computer-vision.webp",
    fullContent: "Computer vision-based automated system is to give an unbiased result for the game and support and help to carry out the duty assigned for judges. Advanced image processing algorithms for real-time game analysis.",
    technologies: ["Computer Vision", "Machine Learning", "Real-time Processing"]
  },
  {
    id: 5,
    title: "Low Cost Pump to Regulate Delivery of Drug Infusion",
    description: "A machine which can gradually administer intravenous medications to patients.",
    image: "https://im.runware.ai/image/ws/0.5/ii/medical-device.webp",
    fullContent: "A machine which can gradually administer intravenous medications to patients. Designed to be cost-effective while maintaining high precision and safety standards for medical applications.",
    technologies: ["Medical Devices", "Embedded Systems", "Control Systems"]
  },
  {
    id: 6,
    title: "Fully Autonomous Face Tracking and Task Oriented Humanoid Robot",
    description: "Advanced humanoid robot with face tracking and autonomous task execution capabilities.",
    image: "https://im.runware.ai/image/ws/0.5/ii/humanoid-robot.webp",
    fullContent: "Advanced humanoid robot system featuring real-time face tracking capabilities and autonomous task execution. Integrates computer vision, motion control, and artificial intelligence for human-robot interaction.",
    technologies: ["Robotics", "Computer Vision", "AI", "Motion Control"]
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8 text-blue-400">Projects</h1>
      </ScrollFadeIn>
      
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProjects.map((project, index) => (
            <ScrollFadeIn key={project.id} delay={index * 0.1}>
              <motion.div
                layoutId={`project-${project.id}`}
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className={`bento-card cursor-pointer ${
                  expandedId === project.id ? "col-span-2 row-span-2" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                
                <AnimatePresence mode="wait">
                  {expandedId === project.id ? (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <p className="text-gray-300 mb-4">{project.fullContent}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-blue-400 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.p
                      key="collapsed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gray-400"
                    >
                      {project.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollFadeIn>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
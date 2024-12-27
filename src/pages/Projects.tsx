import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    title: "AI-Powered Healthcare Assistant",
    description: "A machine learning system for early disease detection",
    image: "https://cdn.pixabay.com/photo/2021/09/25/05/25/robot-6654029_960_720.png",
    fullContent: "An advanced healthcare assistant that uses machine learning algorithms to analyze patient data and predict potential health risks. The system processes medical records, lab results, and vital signs to provide early warning signs of diseases.",
    technologies: ["Python", "TensorFlow", "React", "Node.js"]
  },
  {
    id: 2,
    title: "Smart City Infrastructure",
    description: "IoT-based urban monitoring system",
    image: "https://im.runware.ai/image/ws/0.5/ii/smart-city.webp",
    fullContent: "A comprehensive smart city solution that integrates IoT sensors throughout urban infrastructure to monitor traffic, air quality, and energy usage in real-time. The system helps city planners make data-driven decisions.",
    technologies: ["IoT", "AWS", "React", "Python"]
  },
  {
    id: 3,
    title: "Blockchain Supply Chain",
    description: "Decentralized logistics tracking platform",
    image: "https://im.runware.ai/image/ws/0.5/ii/blockchain-supply.webp",
    fullContent: "A blockchain-based supply chain management system that ensures transparency and traceability of products from manufacturer to consumer. Features smart contracts for automated compliance and payments.",
    technologies: ["Ethereum", "Solidity", "React", "Node.js"]
  },
  {
    id: 4,
    title: "Virtual Reality Education",
    description: "Immersive learning platform",
    image: "https://im.runware.ai/image/ws/0.5/ii/vr-education.webp",
    fullContent: "An educational platform that uses virtual reality to create immersive learning experiences. Students can explore historical sites, conduct virtual science experiments, and interact with 3D models.",
    technologies: ["Unity", "C#", "WebXR", "Three.js"]
  },
  {
    id: 5,
    title: "Sustainable Energy Monitor",
    description: "Renewable energy optimization system",
    image: "https://im.runware.ai/image/ws/0.5/ii/renewable-energy.webp",
    fullContent: "A monitoring and optimization system for renewable energy installations that uses AI to predict energy production and consumption patterns, helping maximize efficiency and reduce waste.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
  },
  {
    id: 6,
    title: "Augmented Reality Shopping",
    description: "AR-powered retail experience",
    image: "https://im.runware.ai/image/ws/0.5/ii/ar-shopping.webp",
    fullContent: "An augmented reality shopping platform that allows users to visualize products in their space before purchasing. Features include virtual try-on for clothing and furniture placement visualization.",
    technologies: ["ARKit", "React Native", "Node.js", "Three.js"]
  },
  {
    id: 7,
    title: "Autonomous Drone System",
    description: "AI-powered drone navigation",
    image: "https://im.runware.ai/image/ws/0.5/ii/autonomous-drone.webp",
    fullContent: "An autonomous drone system that uses computer vision and AI for navigation, obstacle avoidance, and task automation. Applications include surveillance, delivery, and aerial photography.",
    technologies: ["Python", "OpenCV", "ROS", "TensorFlow"]
  },
  {
    id: 8,
    title: "Quantum Computing Simulator",
    description: "Educational quantum computing platform",
    image: "https://im.runware.ai/image/ws/0.5/ii/quantum-computing.webp",
    fullContent: "A quantum computing simulator that helps students and researchers understand quantum algorithms and circuits. Includes interactive tutorials and visualization tools for quantum states.",
    technologies: ["Python", "Qiskit", "React", "WebAssembly"]
  },
  {
    id: 9,
    title: "Natural Language Processing API",
    description: "Advanced text analysis service",
    image: "https://im.runware.ai/image/ws/0.5/ii/nlp-api.webp",
    fullContent: "A comprehensive NLP API that provides services like sentiment analysis, entity recognition, and text classification. Supports multiple languages and domain-specific models.",
    technologies: ["Python", "SpaCy", "FastAPI", "Docker"]
  },
  {
    id: 10,
    title: "Cybersecurity Defense System",
    description: "AI-powered threat detection",
    image: "https://im.runware.ai/image/ws/0.5/ii/cybersecurity.webp",
    fullContent: "An advanced cybersecurity system that uses AI to detect and prevent network threats in real-time. Features include anomaly detection, automated response, and threat intelligence integration.",
    technologies: ["Python", "TensorFlow", "Elasticsearch", "Kubernetes"]
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="bento-grid">
        {sampleProjects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            className={`bento-card cursor-pointer ${
              expandedId === project.id ? "col-span-2 row-span-2" : ""
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="bento-card-image"
            />
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            
            <AnimatePresence>
              {expandedId === project.id ? (
                <motion.div
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
                <p className="text-gray-400">{project.description}</p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
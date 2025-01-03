import BentoCard from '@/components/BentoCard';

const AboutPage = () => {
  const aboutContent = `As a dedicated researcher and innovator in the field of artificial intelligence and machine learning, 
    I've spent years exploring the fascinating intersection of theoretical advancement and practical applications. 
    My journey began with a deep curiosity about how technology can enhance human capabilities and solve complex 
    real-world problems. This passion has driven me to pursue cutting-edge research while maintaining a strong 
    focus on practical implementations that can make a meaningful impact.

    Beyond my technical expertise, I believe in the power of collaboration and knowledge sharing. Throughout my 
    career, I've had the privilege of working with talented teams across various domains, from academic research 
    to industry applications. This diverse experience has shaped my holistic approach to problem-solving and 
    reinforced my commitment to creating solutions that are not only technically sophisticated but also 
    accessible and beneficial to end-users.`;

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="max-w-4xl mx-auto">
        <div className="bento-grid">
          <BentoCard 
            title="About Me" 
            content={aboutContent}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
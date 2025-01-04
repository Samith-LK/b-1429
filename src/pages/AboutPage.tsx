import BentoCard from '@/components/BentoCard';
import ScrollFadeIn from '@/components/ScrollFadeIn';

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

  const travelContent = `Passionate about exploring new cultures and destinations around the world. 
    From hiking through majestic mountains to experiencing vibrant city life, every journey brings new perspectives 
    and unforgettable memories. Recent adventures include trekking in the Himalayas, exploring ancient ruins in Peru, 
    and discovering hidden gems in Southeast Asia.`;

  const countriesContent = `Having visited over 20 countries across 5 continents, each destination has contributed 
    to a broader understanding of global cultures and traditions. Notable visits include Japan, France, Brazil, 
    South Africa, India, Australia, and Canada. Each country has offered unique insights into local customs, 
    cuisines, and ways of life.`;

  const innovationContent = `Leading breakthrough initiatives in artificial intelligence and machine learning, 
    with a focus on practical applications that solve real-world challenges. Key innovations include developing 
    advanced neural networks for medical diagnosis, creating efficient algorithms for sustainable energy management, 
    and implementing cutting-edge solutions for smart city infrastructure.`;

  const travelImages = [
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  ];

  const countryFlags = [
    "https://flagcdn.com/w160/jp.png", // Japan
    "https://flagcdn.com/w160/fr.png", // France
    "https://flagcdn.com/w160/br.png", // Brazil
    "https://flagcdn.com/w160/za.png", // South Africa
    "https://flagcdn.com/w160/in.png", // India
    "https://flagcdn.com/w160/au.png", // Australia
    "https://flagcdn.com/w160/ca.png"  // Canada
  ];

  const innovationImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <ScrollFadeIn>
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
      </ScrollFadeIn>
      <div className="max-w-4xl mx-auto">
        <div className="bento-grid">
          <ScrollFadeIn delay={0.1}>
            <BentoCard 
              title="About Me" 
              content={aboutContent}
            />
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.2}>
            <BentoCard 
              title="Travelling"
              content={travelContent}
              images={travelImages}
            />
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.3}>
            <BentoCard 
              title="Countries Visited"
              content={countriesContent}
              images={countryFlags}
              isFlags={true}
            />
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.4}>
            <BentoCard 
              title="Innovations"
              content={innovationContent}
              images={innovationImages}
            />
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
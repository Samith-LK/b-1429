import React from 'react';

interface PlaceholderPageProps {
  title: string;
  content: string;
  image: string;
}

const PlaceholderPage = ({ title, content, image }: PlaceholderPageProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Failed to load image:', image);
    e.currentTarget.src = "/portfolio/placeholder.svg";
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="mb-8">
          <div className="relative">
            <img 
              src={`/portfolio/${image}`}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              onError={handleImageError}
            />
          </div>
          <p className="text-gray-300 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
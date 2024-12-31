import React from 'react';

interface PlaceholderPageProps {
  title: string;
  content: string;
  image: string;
}

const PlaceholderPage = ({ title, content, image }: PlaceholderPageProps) => {
  const baseUrl = import.meta.env.BASE_URL;
  console.log('Loading image with path:', `${baseUrl}${image}`);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="mb-8">
          <div className="relative">
            <img 
              src={`${baseUrl}${image}`}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              loading="lazy"
              onError={(e) => {
                console.error('Failed to load image:', image);
                e.currentTarget.src = `${baseUrl}placeholder.svg`;
              }}
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
// src/pages/BlogPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Optional: if you want to link back or elsewhere

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-xl mb-8 text-gray-400">
        Coming Soon! Exciting content about AI, ML, and research is on its way.
      </p>
      <img 
        src="/placeholder.svg" // Using the existing placeholder image
        alt="Coming Soon" 
        className="w-1/2 md:w-1/3 lg:w-1/4 mb-8"
      />
      <div>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;

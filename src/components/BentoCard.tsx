import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BentoCardProps {
  title: string;
  content: string;
  maxPreviewLength?: number;
  images?: string[];
  isFlags?: boolean;
}

const BentoCard = ({ 
  title, 
  content, 
  maxPreviewLength = 150,
  images = [],
  isFlags = false 
}: BentoCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = content.slice(0, maxPreviewLength);
  const hasMore = content.length > maxPreviewLength;

  return (
    <motion.div
      layout
      className={`bento-card group cursor-pointer relative ${isExpanded ? 'h-auto' : 'h-[150px]'}`}
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {images && images.length > 0 && (
        <div className="absolute top-4 right-4 w-12 h-12">
          <img
            src={images[0]}
            alt="Company Logo"
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )}
      
      <h2 className="text-2xl font-bold mb-4 text-blue-400 pr-16">{title}</h2>
      
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {images.length > 0 && (
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                <div className="flex animate-slide">
                  {[...images, ...images].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${title} ${index + 1}`}
                      className={`w-full h-64 object-cover flex-shrink-0 ${
                        isFlags ? 'w-32 mx-2' : 'w-full'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="text-gray-300">
              {content}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-300"
          >
            {maxPreviewLength === 0 ? null : (
              <>
                {preview}
                {hasMore && (
                  <span className="text-blue-400 ml-2 hover:text-blue-300">
                    ... See More
                  </span>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoCard;
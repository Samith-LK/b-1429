import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BentoCardProps {
  title: string;
  content: string;
  maxPreviewLength?: number;
}

const BentoCard = ({ title, content, maxPreviewLength = 150 }: BentoCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const preview = content.slice(0, maxPreviewLength);
  const hasMore = content.length > maxPreviewLength;

  return (
    <motion.div
      layout
      className="bento-card group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{title}</h2>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-300"
          >
            {content}
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-300"
          >
            {preview}
            {hasMore && (
              <span className="text-blue-400 ml-2 hover:text-blue-300">
                ... See More
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BentoCard;
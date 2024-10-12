"use client";
import { motion } from 'framer-motion';
import React from 'react';

interface BoxesProps {
  className?: string;
  children?: React.ReactNode;
}

const BoxesCore: React.FC<BoxesProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {/* Background boxes content */}
      {children}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div key={i}>
          {Array.from({ length: 5 }).map((_, j) => (
            <motion.div key={j}>
              {i === 2 && j === 2 ? (
                <svg>
                  <path d="M12 6v12m6-6H6" />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface LiquidTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  delay?: number;
}

const LiquidText: React.FC<LiquidTextProps> = ({ text, as: Component = 'span', className = '', delay = 0 }) => {
  return (
    <Component className={`relative inline-block font-black tracking-tighter isolate ${className}`}>
      {/* Chrome Gradient Overlay */}
      <motion.span
        className="absolute inset-0 z-10 block bg-gradient-to-br from-white via-[#a0a0a0] to-[#404040] bg-[length:200%_auto] bg-clip-text text-transparent will-change-[background-position]"
        initial={{ backgroundPosition: '0% center' }}
        animate={{
          backgroundPosition: ['0% center', '200% center'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
        style={{ 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(0px 0px 10px rgba(255,255,255,0.3))'
        }}
      >
        {text}
      </motion.span>
      
      {/* Glass Stroke Effect */}
      <span 
        className="block text-transparent bg-clip-text stroke-white"
        style={{ 
          WebkitTextStroke: '1px rgba(255,255,255,0.1)',
          color: 'transparent'
        }}
      >
        {text}
      </span>
      
      {/* Liquid Blur */}
      <span
        className="absolute inset-0 -z-10 block text-white blur-md opacity-30"
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  );
};

export default LiquidText;


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center hidden md:flex will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* Outer Ring */}
      <motion.div
        className="rounded-full border border-white"
        style={{ width: 40, height: 40 }}
        animate={{
          scale: isHovering ? 2.5 : 1, 
          opacity: isHovering ? 1 : 0.5,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'transparent',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Inner Content */}
        {isHovering && (
             <motion.div 
               className="w-full h-full flex items-center justify-center"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
             >
                <div className="w-1 h-1 bg-black rounded-full" />
             </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;

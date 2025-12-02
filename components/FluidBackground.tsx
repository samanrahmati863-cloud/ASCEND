
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#111] opacity-90" />

      {/* Liquid Metal Blob 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-gray-400 rounded-full mix-blend-exclusion filter blur-[80px] opacity-20 will-change-transform"
        animate={{
          x: [0, 50, -25, 0],
          y: [0, -25, 25, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Liquid Metal Blob 2 */}
      <motion.div
        className="absolute top-[40%] right-[-20%] w-[100vw] h-[80vw] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-10 will-change-transform"
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 50, -25, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Liquid Metal Blob 3 */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] bg-gray-600 rounded-full mix-blend-color-dodge filter blur-[90px] opacity-20 will-change-transform"
        animate={{
          x: [0, 75, -75, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ transform: 'translateZ(0)' }}
      />

      {/* Grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none brightness-150 contrast-150"></div>
    </div>
  );
};

export default FluidBackground;

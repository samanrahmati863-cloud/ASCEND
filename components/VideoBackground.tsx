
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* 
        VIDEO LAYER
        Replace the 'src' below with your local video file path to see your specific Veo video.
        Example: src="/videos/my-veo-runway.mp4" 
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-fog-on-a-dark-background-4239-large.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Cinematic Blue Overlay - Adds that specific deep blue tint from your reference images */}
      <div className="absolute inset-0 bg-[#050a14]/60 mix-blend-multiply" />
      
      {/* Gradient Vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      
      {/* Noise Grain for film texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none brightness-100 contrast-150"></div>
    </div>
  );
};

export default VideoBackground;

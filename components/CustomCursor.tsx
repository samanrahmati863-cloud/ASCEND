import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        left: pos.x,
        top: pos.y,
        width: 12,
        height: 12,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        background: '#ffffff',
        mixBlendMode: 'difference',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
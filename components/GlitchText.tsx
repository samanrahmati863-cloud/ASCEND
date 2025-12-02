import React from 'react';

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

const GlitchText: React.FC<Props> = ({ text, as = 'h1', className }) => {
  const Tag = as as any;
  // Lightweight stub so App mounts without runtime errors.
  return (
    <Tag className={className}>
      {text}
    </Tag>
  );
};

export default GlitchText;

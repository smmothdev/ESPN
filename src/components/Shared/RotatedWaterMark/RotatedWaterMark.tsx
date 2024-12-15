import React from 'react';

interface IRotatedWaterMark {
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  className?: string;
  fontSize?: string;
}

const RotatedWaterMark: React.FC<IRotatedWaterMark> = ({
  top,
  right,
  left,
  bottom,
  className = '',
  fontSize = '128px'
}) => {
  return (
    <p
      style={{
        top: top ?? undefined,
        right: right ?? undefined,
        left: left ?? undefined,
        bottom: bottom ?? undefined,
      }}
      className={`font-[AR_One_Sans] text-[${fontSize}] leading-[${fontSize}}px]  underline-from-font  opacity-[0.17] bg-gradient-to-r from-[#E674F5] via-[#6ED5E0] to-[#6ED5E0] text-transparent bg-clip-text transform z-5 ${className}`}
    >
      SmoothFlowTech
    </p>
  );
};

export default RotatedWaterMark;

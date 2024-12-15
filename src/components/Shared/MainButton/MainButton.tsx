import React from 'react';

export interface IMainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const MainButton: React.FC<IMainButtonProps> = ({
  label,
  className = 'rounded-[28px] text-black px-[32px] py-[16px] font-albert text-[24px] leading-[24px] font-medium',
  type = 'button',
  ...props // The spread operator captures all remaining props like `onClick`, etc.
}) => {
  return (
    <button
      className={`${className} bg-gradient-to-r from-[#E674F5] via-[#6ED5E0] to-[#6ED5E0] md:px-6 md:py-3 md:text-[18px]`}
      type={type}
      {...props} // Spread the props to the button element
    >
      {label}
    </button>
  );
};

export default MainButton;

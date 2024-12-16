import React from 'react';
import { IWhyUsPoint } from '../../../../types/types';

const WhyUsPoint: React.FC<IWhyUsPoint> = ({ icon, title, description }) => {
  return (
    <div className="mt-20 mb-10 py-10 px-5 flex flex-col gap-8 items-justify-center w-full">
      <div className="flex flex-col gap-6 justify-center">
        <img
          src={icon}
          alt={title}
          width={120}
          className="tex-center mx-auto"
        />
        <p className="font-albert font-medium text-[40px] leading-[40px] text-[#333333] text-center break-all">
          {title}
        </p>
      </div>
      <p className="font-albert font-medium text-[24px] leading-[24px] text-[#333333] opacity-85 text-center">
        {description}
      </p>
    </div>
  );
};

export default WhyUsPoint;

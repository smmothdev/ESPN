import React from 'react';
import { IWhyUsPoint } from '../../../../types/types';

const WhyUsPoint: React.FC<IWhyUsPoint> = ({ icon, title, description }) => {
  return (
    <div className="py-5 md:py-10 px-3 md:px-5 flex flex-col gap-8 items-justify-center w-full">
      <div className="flex flex-col gap-6 justify-center">
        <img
          src={icon}
          alt={title}
          className="tex-center mx-auto w-[80px] md:w-[120px]"
        />
        <p className="font-albert font-medium text-[30px] leading-[35px] md:text-[40px] md:leading-[40px] text-[#333333] text-center break-all">
          {title}
        </p>
      </div>
      <p className="font-albert font-medium text-[20px] leading-[25px] md:text-[24px] md:leading-[24px] text-[#333333] opacity-85 text-center">
        {description}
      </p>
    </div>
  );
};

export default WhyUsPoint;

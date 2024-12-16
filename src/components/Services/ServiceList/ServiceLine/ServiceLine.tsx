import React from 'react';
import { IServiceLineProps } from '../../../../types/types';

const ServiceLine: React.FC<IServiceLineProps> = ({ name, number, description }) => {
  return (
    <div className="flex flex-row gap-10 items-center">
      {/* here is the number */}
      <p className="text-[72px] leading-[72px] font-semibold font-albert text-[#FA9C01]">
        {number}
      </p>
      {/* here is the name & description */}
      <div className="flex flex-col gap-2">
        {/* here is the name */}
        <h2 className="text-[48px] leading-[48px] font-semibold font-albert">
          {name}
        </h2>
        <p className="text-[32px] leading-[32px] font-normal font-albert text-[#333333]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceLine;
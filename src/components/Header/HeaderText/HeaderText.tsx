import React from 'react';
import { useTranslation } from 'react-i18next';

const HeaderText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex flex-row gap-2">
        <img src="/assets/espn-logo.svg" alt="logo" />
        <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-tight font-albert font-bold text-[#FA9C01]">
          {t('header.title')}
        </h1>
      </div>
      <p className="text-[20px] sm:text-[26px] leading-[32px] font-albert font-medium mt-2 w-full sm:w-[70%]">
        {t('header.description')}
      </p>
    </div>
  );
};

export default HeaderText;

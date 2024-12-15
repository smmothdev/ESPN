import React from 'react';
import { useTranslation } from 'react-i18next';

const HeaderText: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-tight font-albert font-bold bg-gradient-to-r from-[#E674F5] via-[#6ED5E0] to-[#6ED5E0] text-transparent bg-clip-text">
        {t('header.title')}
      </h1>
      <p className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] font-albert font-medium mt-2 w-full sm:w-[60%]">
        {t('header.description.1st')}
        <br className="hidden md:inline-block" />
        {t('header.description.2nd')}{' '}
        <span className="text-[#6ED5E0]">{t('header.uniqueBusiness')}</span>{' '}
        <span className="text-[#E674F5] pl-1 md:pl-0">{t('header.needs')}</span>
      </p>
    </div>
  );
};

export default HeaderText;

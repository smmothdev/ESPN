import React from 'react';
import { useTranslation } from 'react-i18next';
import Points from './Points/WhyUsPoints';

const WhyUs: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  return (
    <div>
      <div
        dir={isAr ? 'rtl' : 'ltr'}
        className="w-full max-w-6xl mx-auto mt-20"
      >
        <p
          className={`relative text-[#333333] text-[48px] tracking-wide leading-[48px] font-albert font-semibold  after:h-[7px] after:rounded-[24px] after:bg-[#FA9C01] after:bg-opacity-[85%] after:absolute after:bottom-[-16px]  text-center ${
            isAr
              ? 'after:right-[35.5%] after:w-[300px]'
              : 'after:left-[26.5%] after:w-[400px]'
          }`}
        >
          {t('whyChoose.title')}
        </p>
        <Points />
      </div>
      <img src="/assets/images/pattern3.png" className="w-full opacity-80" />
    </div>
  );
};

export default WhyUs;

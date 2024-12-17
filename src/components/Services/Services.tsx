import React from 'react';
import RotatedWaterMark from '../Shared/RotatedWaterMark/RotatedWaterMark';
import { useTranslation } from 'react-i18next';
import ServiceList from './ServiceList/ServiceList';

const Services: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';
  const isDe = language == 'de';

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} id="services" className="relative">
      <RotatedWaterMark
        className={`hidden md:block text-center text-[40px] md:text-[176px] ${
          isDe ? 'tracking-[0.001em]' : 'tracking-[0.5em]'
        } mt-[-75px]`}
        label={t('services.title')}
      />
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <p
          className={`relative text-[#FA9C01] text-[40px] md:text-[80px] tracking-wide leading-[40px] md:leading-[80px] font-albert font-semibold mt-4 md:mt-[-100px] after:h-[7px] after:rounded-[24px] after:bg-[#333333] after:bg-opacity-[85%] after:absolute after:bottom-[-10px] text-center md:text-left ${
            isAr
              ? 'after:w-1/2 md:after:w-[150px] after:right-[25%] md:after:right-[40px]'
              : 'after:w-[115px] md:after:w-[215px] after:left-[35%] md:after:left-[70px]'
          }`}
        >
          {t('services.title')}
        </p>
        <ServiceList />
      </div>
      <img src="/assets/images/pattern3.png" className="w-full mt-4" />
    </div>
  );
};

export default Services;

import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';
  return (
    <div
      id="about"
      className="relative overflow-hidden px-4 bg-[#333333] md:px-6 lg:px-8 mx-auto"
      style={{
        backgroundImage: `
          url('/assets/images/pattern2.png')
        `,
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-center gap-4 py-[66px]">
          <div className="flex flex-row justify-center gap-1">
            <img src="/assets/images/quote.svg" />
            <img src="/assets/images/quote.svg" />
          </div>
          <p className="text-[20px] leading-[30px] md:text-[32px] md:leading-[37px] font-semibold font-albert text-[#F5F5F5] text-center">
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react';
import SmoothSlider from '../Navbar/Shared/SmoothSlider/SmoothSlider';
import HeaderText from './HeaderText/HeaderText';
import MainButton from '../Navbar/Shared/MainButton/MainButton';
import { handleScrollToSection } from '../../utils/scroll';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  // Array of background images
  const bgImages: string[] = [
    '/assets/images/slider/1.png',
    '/assets/images/slider/2.png',
    '/assets/images/slider/3.png',
  ];

  return (
    <SmoothSlider
      className="h-[calc(60vh-80px)] md:h-[calc(100vh-80px)]"
      bgImages={bgImages}
      delay={3000}
      showButtons
      content={
        <div
          dir={isArabic ? 'rtl' : 'ltr'}
          id="home"
          className="max-w-7xl w-screen mx-auto px-4 md:px-6 lg:px-8"
        >
          <HeaderText />
          <MainButton
            label={t('header.button')}
            className="rounded-[28px] text-black px-[16px] py-[16px] font-albert text-[24px] leading-[24px] font-medium mt-10 md:px-8 md:py-4 md:text-lg md:mt-6"
            onClick={handleScrollToSection('contact')}
          />
        </div>
      }
    />
  );
};

export default Header;

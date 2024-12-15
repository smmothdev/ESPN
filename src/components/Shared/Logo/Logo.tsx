import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ILogo } from '../../../types/types';

const Logo: React.FC<ILogo> = ({
  imgWidth,
  showText,
  direction,
  className,
  animate,
}) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [showFirstImage, setShowFirstImage] = useState(!animate);
  const [showSecondImage, setShowSecondImage] = useState(!animate);

  useEffect(() => {
    if (animate && showText) {
      const firstTimer = setTimeout(() => setShowFirstImage(true), 1000); // Show first image after 1s
      const secondTimer = setTimeout(() => setShowSecondImage(true), 1500); // Show second image after 1.5s

      return () => {
        clearTimeout(firstTimer);
        clearTimeout(secondTimer);
      };
    }
  }, [animate, showText]);

  const currentLang = i18n.language; // Get the current language from i18n
  const homePath = `/${currentLang}/`; // Dynamically set the path for the home route

  return (
    <Link
      to={homePath}
      className={`text-white flex items-center justify-center ${className} ${
        direction === 'row' ? 'flex-row' : 'flex-col '
      } row-reverse`}
      aria-label="Home"
    >
      <img
        src="/assets/logo.png"
        width={imgWidth}
        alt="Logo"
        className="mr-2"
      />

      {showText ? (
        <div
          className={`flex flex-col sm:flex-row gap-2 sm:gap-4 ${
            isArabic ? 'flex-row-reverse' : ''
          }`}
        >
          <img
            src="/assets/images/smooth.svg"
            alt="smooth"
            className={`transition-opacity duration-1000 ${
              showFirstImage || !animate ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              visibility: showFirstImage || !animate ? 'visible' : 'hidden',
            }}
          />
          <img
            src="/assets/images/flow-tech.svg"
            alt="flow-tech"
            className={`transition-opacity duration-1000 ${
              showSecondImage || !animate ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              visibility: showSecondImage || !animate ? 'visible' : 'hidden',
            }}
          />
        </div>
      ) : null}
    </Link>
  );
};

export default Logo;

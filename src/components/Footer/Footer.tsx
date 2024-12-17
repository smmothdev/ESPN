import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const isAr = language == 'ar';

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      id="contact"
      className="py-[36px] md:py-[56px] relative overflow-hidden bg-[#333333] text-white"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-row gap-[120px] justify-center">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="rounded-full w-[56px] h-[56px] p-3 bg-[#FA9C01] flex justify-center items-center">
            <img src="/assets/location.svg" alt="location" width={40} />
          </div>
          <p>
            {t('footer.location.0')} <br />
            {t('footer.location.1')}
          </p>
          <div className="rounded-full w-[56px] h-[56px] p-3 bg-[#FA9C01] flex justify-center items-center">
            <img src="/assets/mail.svg" alt="location" width={40} />
          </div>
          <p>{t('footer.mail')}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

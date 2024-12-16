import React from 'react';
import Logo from '../Shared/Logo/Logo';
import { IFooterList } from '../../types/types';
import SocialMedia from './SocialMedia/SocialMedia';
import FooterList from './FooterList/FooterList';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="py-[36px] md:py-[56px] relative overflow-hidden bg-[#333333] text-white"
    >
      <div className="mx-auto w-full max-w-6xl flex flex-row gap-[120px] justify-center">
        <div className="flex flex-row gap-6 justify-center items-center">
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

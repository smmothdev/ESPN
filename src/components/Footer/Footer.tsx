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
  // const isArabic = i18n.language === 'ar';

  const footerLists: IFooterList[] = [
    {
      title: 'Company',
      items: [
        { label: 'Casrs', path: '/cases' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact Us', path: '/contact' },
        { label: 'About Us', path: '/about' },
        { label: 'Careers', path: '/careers' },
      ],
    },
    {
      title: 'Services',
      items: [
        { label: 'Software Product Engineering', path: '/software' },
        { label: 'Digital Experience ', path: '/digital_exp' },
        { label: 'Data & Analysis ', path: '/data_analysis' },
        { label: 'Cloud Engineering', path: '/cloud' },
        { label: 'IT Consulting', path: '/it' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { label: t('privacy.title'), path: '/privacy' },
        { label: t('termsOfUse.title'), path: '/terms_of_use' },
        {
          label: t('termsAndConditions.title'),
          path: 'terms_and_conditions',
        },
      ],
    },
  ];

  return (
    <div className="py-[36px] md:py-[56px] relative overflow-hidden bg-[#333333] text-white">
      <div className="mx-auto w-full max-w-7xl flex flex-row gap-[120px] justify-center">
        <div className="flex flex-row gap-6 justify-center items-center">
          <div className="rounded-full w-[56px] h-[56px] p-3 bg-[#FA9C01] flex justify-center items-center">
            <img src="/assets/location.svg" alt="location" width={40} />
          </div>
          <p>
            Arakwastraße 6 / 2 / 13 <br />
            1220 Vienna, Austria
          </p>
          <div className="rounded-full w-[56px] h-[56px] p-3 bg-[#FA9C01] flex justify-center items-center">
            <img src="/assets/mail.svg" alt="location" width={40} />
          </div>
          <p>espngmbh@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

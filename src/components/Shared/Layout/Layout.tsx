import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { INavLink } from '../../../types/types';
import { useTranslation } from 'react-i18next';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();

  const navLinks: INavLink[] = [
    { label: t('about.title'), path: `/about-us` },
    { label: t('services.title'), path: `#services`, isDropdown: true },
    { label: t('contactUs.title'), path: `#faq` },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

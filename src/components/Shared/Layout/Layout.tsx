import React from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import { INavLink } from '../../../types/types';
import { useTranslation } from 'react-i18next';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useTranslation();

  const navLinks: INavLink[] = [
    { label: t('about.title'), path: `#about` },
    { label: t('services.title'), path: `#services` },
    { label: t('contactUs.title'), path: `#contact` },
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

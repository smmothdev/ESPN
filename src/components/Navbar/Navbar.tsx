import React, { useState, useEffect, useCallback } from 'react';
import Logo from '../Shared/Logo/Logo';
import NavLink from './NavLink/NavLink';
import { Dropdown, Drawer, Button, MenuProps } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { INavLink } from '../../types/types';
import LanguageSwitcher from '../Shared/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export interface NavbarProps {
  navLinks: INavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.hash);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const isAboutOrPrivacyPage =
    location.pathname.includes('/about-us') ||
    location.pathname.includes('/privacy');

  const handleSectionVisibility = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (id) {
          setCurrentPath(`#${id}`);
        }
      }
    });
  };

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      handleSectionVisibility,
      observerOptions
    );

    const observedElements = navLinks
      .filter(({ path }) => path.startsWith('#')) // Only observe in-page anchors
      .map(({ path }) => document.querySelector(path))
      .filter(Boolean) as Element[];

    observedElements.forEach((element) => observer.observe(element));

    return () => {
      observedElements.forEach((element) => observer.unobserve(element));
    };
  }, [navLinks]);

  const createDropdownMenu = useCallback(
    (sublinks: INavLink[]): MenuProps['items'] =>
      sublinks.map(({ label, path }) => ({
        key: path,
        label: (
          <NavLink
            label={label}
            path={path}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        ),
      })),
    [currentPath]
  );

  const handleDrawerNavClick = (path: string) => {
    setCurrentPath(path);
    setIsDrawerVisible(false);
    const targetId = path.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      history.replaceState(null, '', path);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-10 bg-[#333333] ${
        isArabic ? 'rtl text-right' : ' text-left'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo
            imgWidth="195px"
            direction={'row'}
            // showText
            className="gap-2"
            animate
          />

          {/* Burger menu icon */}
          <Button
            className="lg:hidden block"
            icon={<MenuOutlined style={{ color: 'white' }} />}
            onClick={toggleDrawer}
            style={{ border: 'none', background: 'none' }}
          />

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-4">
            {!isAboutOrPrivacyPage &&
              navLinks.map(({ label, path, isDropdown, sublinks }) => (
                <div key={path} className="relative">
                  {isDropdown && sublinks ? (
                    <Dropdown
                      menu={{ items: createDropdownMenu(sublinks) }}
                      trigger={['hover']}
                      placement={isArabic ? 'bottomRight' : 'bottomLeft'}
                      getPopupContainer={() => document.body}
                    >
                      <a className="font-albert text-white text-[24px] font-medium flex items-center cursor-pointer">
                        {label}
                        <DownOutlined
                          className={`ml-2 ${isArabic ? 'rotate-180' : ''}`}
                        />
                      </a>
                    </Dropdown>
                  ) : (
                    <NavLink
                      label={label}
                      path={path}
                      currentPath={currentPath}
                      setCurrentPath={setCurrentPath}
                    />
                  )}
                </div>
              ))}
          </div>

          {/* Contact Us Button */}
          <div className="lg:flex hidden gap-3 items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Drawer for mobile view */}
      <Drawer
        placement={isArabic ? 'left' : 'right'}
        open={isDrawerVisible}
        onClose={toggleDrawer}
        width={250}
        styles={{
          header: { backgroundColor: '#000', color: '#fff' },
          body: { backgroundColor: '#000', color: '#fff' },
        }}
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
      >
        <div className="space-y-4">
          {!isAboutOrPrivacyPage &&
            navLinks.map(({ label, path, isDropdown, sublinks }) => (
              <div key={path} className="relative">
                {/* <hr className="border-gray-600" /> */}

                {isDropdown && sublinks ? (
                  <Dropdown
                    menu={{ items: createDropdownMenu(sublinks) }}
                    trigger={['click']}
                    placement={isArabic ? 'bottomRight' : 'bottomLeft'}
                    getPopupContainer={() => document.body}
                  >
                    <a
                      className="font-albert text-white text-[24px] font-medium flex items-center cursor-pointer"
                      onClick={() => handleDrawerNavClick(path)}
                    >
                      {label}
                      <DownOutlined
                        className={`ml-2 ${isArabic ? 'rotate-180' : ''}`}
                      />
                    </a>
                  </Dropdown>
                ) : (
                  <NavLink
                    toggleDrawer={toggleDrawer}
                    label={label}
                    path={path}
                    currentPath={currentPath}
                    setCurrentPath={setCurrentPath}
                  />
                )}
              </div>
            ))}
          <hr className="border-gray-600" />
          <div className="flex flex-col justify-center mt-4 gap-4">
            <div className="mx-auto">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;

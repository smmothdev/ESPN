import React, { CSSProperties } from 'react';
import { INavLink } from '../../../types/types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavLinkProps extends INavLink {
  currentPath: string;
  setCurrentPath: (path: string) => void;
  className?: string;
  style?: CSSProperties;
  toggleDrawer?: Function;
}

const NavLink: React.FC<NavLinkProps> = ({
  label,
  path,
  currentPath,
  setCurrentPath,
  className = '',
  style,
  toggleDrawer,
}) => {
  const isActive = currentPath === path || (path === '#home' && !currentPath);
  const { i18n } = useTranslation();

  const baseClasses =
    'font-albert font text-[16px] sm:text-[24px] font-medium text-center px-4 py-2 transition-all duration-300 ease-in-out transform ';
  // const hoverClasses =
  //   'hover:bg-gradient-to-r hover:from-[#E674F5] hover:via-[#6ED5E0] hover:to-[#6ED5E0] hover:text-transparent hover:bg-clip-text';
  // const activeClasses =
  //   'bg-gradient-to-r from-[#E674F5] via-[#6ED5E0] to-[#6ED5E0] text-transparent bg-clip-text';
  // const inactiveClasses = 'text-white bg-transparent';

  const computedClasses = `${baseClasses} ${
    isActive ? 'text-[#FA9C01]' : 'text-white'
  } ${className}`.trim();

  const handleElementClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = path.replace('#', '');
    const targetElement = document.getElementById(targetId);
    toggleDrawer && toggleDrawer();

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentPath(path);
      history.pushState(null, '', path);
    }
  };

  const currentLang = i18n.language;
  const localizedPath = `/${currentLang}${path}`;

  return path.startsWith('#') ? (
    <a
      href={path}
      onClick={handleElementClick}
      className={computedClasses}
      style={style}
    >
      {label}
    </a>
  ) : (
    <Link
      to={localizedPath}
      onClick={() => setCurrentPath(localizedPath)}
      className={computedClasses}
      style={style}
    >
      {label}
    </Link>
  );
};

export default NavLink;

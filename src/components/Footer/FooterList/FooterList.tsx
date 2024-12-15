import React from 'react';
import { Link } from 'react-router-dom';
import { IFooterList } from '../../../types/types';
import { useTranslation } from 'react-i18next';

const FooterList: React.FC<IFooterList> = ({ items }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // Get the current language from i18n

  return (
    <div className="flex flex-col gap-4 justify-center sm:justify-start">
      {/* <h4 className="font-albert font-normal text-[26px] leading-[26px] text-[#606060]">
        {title}
      </h4> */}
      <ul className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
        {items.map((item) => (
          <li
            key={item.path} // Ensure unique key for each list item
            className="font-albert font-medium text-center sm:text-left text-[16px] sm:text-[30px] leading-[30px] text-[#F8FEFF]"
          >
            {/* Use Link for navigation */}
            <Link to={`/${currentLang}${item.path}`}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;

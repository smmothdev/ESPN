import React from "react";
import { ISocialMedia } from "../../../types/types";

const socialMedia: ISocialMedia[] = [
  {
    name: "instagram",
    link: "https://www.instagram.com/smoothflowtech/",
    icon: "/assets/images/social-media/instagram.svg",
  },
  // {
  //   name: "facebook",
  //   link: "/facebook",
  //   icon: "/assets/images/social-media/facebook.svg",
  // },
  // { name: "x", link: "/x", icon: "/assets/images/social-media/x.svg" },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/smooth-flow-tech/",
    icon: "/assets/images/social-media/linkedin.svg",
  },
  // {
  //   name: "behance",
  //   link: "/behance",
  //   icon: "/assets/images/social-media/behance.svg",
  // },
  // {
  //   name: "Dribbble",
  //   link: "/Dribbble",
  //   icon: "/assets/images/social-media/Dribbble.svg",
  // },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 md:gap-8 pt-[20px]  md:pt-[46px] justify-center sm:justify-end items-center">
      {socialMedia.map((item) => (
        <a key={item.name} href={item.link}>
          <img src={item.icon} alt={item.name} />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;

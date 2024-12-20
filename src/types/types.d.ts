export interface INavLink {
  label: string;
  path: string;
  isDropdown?: boolean;
  sublinks?: INavLink[];
}

export interface ILogo {
  imgWidth;
  showText?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  className?: string;
  animate?: boolean;
}

export interface IService {
  name: string;
  description: string;
}

export interface IServiceLineProps extends IService {
  number: string;
}

export interface IFaq {
  question: string;
  answer: string;
}

export interface IContactPoint {
  title: string;
  subTitle?: string;
  description: string;
}

export interface ICustomInput {
  label: string;
  required: boolean;
}

export interface IFooterList {
  title: string;
  items: {
    label: string;
    path: string;
  }[];
}

export interface IWhyUsPoint {
  icon: string;
  title: string;
  description: string;
}

import { ReactNode } from 'react';

export type TSizeType = 'sm' | 'md' | 'lg';
export type TColorType = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type TRadiusType = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type TSelectionMode = 'none' | 'single' | 'multiple';

interface IAccordionItem {
  title: string;
  subTitle?: ReactNode;
  description: string;
  indicator?: ReactNode;
}

interface IAvatar {
  isBordered: boolean;
  color: TColorType;
  radius: TRadiusType;
  src: string;
}

interface IOptions {
  label: string;
  value: string;
}

interface IBreadcrumbsItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface ICheckboxItem {
  label: string;
  value: string;
  isDisabled?: boolean;
  size?: TSizeType;
  color?: TColorType;
  radius?: TRadiusType;
  isIndeterminate?: boolean;
  isLineThrough?: boolean;
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IAccordionItem, IAvatar, IOptions, IBreadcrumbsItem, ICheckboxItem };

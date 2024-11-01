import React from 'react';
import { Breadcrumbs, BreadcrumbItem, BreadcrumbsProps } from '@nextui-org/react';
import { IBreadcrumbsItem } from '@/common/component.interface';

type IBreadcrumbsProps = {
  items: Array<IBreadcrumbsItem>;
} & Partial<BreadcrumbsProps>;

export function CBreadcrumbs({ items, ...rest }: IBreadcrumbsProps) {
  return (
    <Breadcrumbs {...rest}>
      {items.map((item, idx) => (
        <BreadcrumbItem key={idx} href={item.href} isCurrent={item.isCurrent}>
          {item.label}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}

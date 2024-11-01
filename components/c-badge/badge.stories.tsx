import React from 'react';
import { Avatar, AvatarProps, Badge, BadgeProps } from '@nextui-org/react';

type IBadgeProps = {
  src: string;
} & Partial<BadgeProps> &
  Partial<AvatarProps>;

export function CBadge({ src, radius = 'full', size = 'lg', ...rest }: IBadgeProps) {
  return (
    <Badge content="5" color="primary">
      <Avatar radius={radius} size={size} src={src} {...rest} />
    </Badge>
  );
}

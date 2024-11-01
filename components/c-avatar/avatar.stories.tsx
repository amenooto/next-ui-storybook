import React from 'react';
import { Avatar, AvatarProps } from '@nextui-org/react';

type IAvatarProps = {
  mode: 'src' | 'name';
  value: string;
} & Partial<AvatarProps>;

export function CAvatar({ mode = 'src', value, ...rest }: IAvatarProps) {
  return (
    <>{mode === 'src' ? <Avatar src={value} {...rest} /> : <Avatar name={value} {...rest} />}</>
  );
}

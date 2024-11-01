import React from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

type IButtonProps = {
  text: string;
} & Partial<ButtonProps>;

export function CButton({ text, ...rest }: IButtonProps) {
  return <Button {...rest}>{text}</Button>;
}

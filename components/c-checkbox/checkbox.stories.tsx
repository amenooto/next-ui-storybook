import React from 'react';
import { Checkbox, CheckboxProps } from '@nextui-org/react';

type ICheckboxProps = {
  text: string;
} & Partial<CheckboxProps>;

export function CCheckbox({ text, ...rest }: ICheckboxProps) {
  return <Checkbox {...rest}>{text}</Checkbox>;
}

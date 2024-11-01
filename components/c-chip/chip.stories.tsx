import React from 'react';
import { Chip, ChipProps } from '@nextui-org/react';

type IChipProps = {
  text: string;
} & Partial<ChipProps>;

export function CChip({ text, ...rest }: IChipProps) {
  return <Chip {...rest}>{text}</Chip>;
}

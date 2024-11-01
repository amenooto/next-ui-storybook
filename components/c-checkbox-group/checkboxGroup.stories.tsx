import React from 'react';
import { CheckboxGroup, Checkbox, CheckboxGroupProps } from '@nextui-org/react';
import { ICheckboxItem } from '@/common/component.interface';

type ICheckboxGroupProps = {
  items: Array<ICheckboxItem>;
} & Partial<CheckboxGroupProps>;

export function CCheckboxGroup({ items, ...rest }: ICheckboxGroupProps) {
  return (
    <CheckboxGroup {...rest}>
      {items.map((item, idx) => (
        <Checkbox key={idx} value={item.value}>
          {item.label}
        </Checkbox>
      ))}
    </CheckboxGroup>
  );
}

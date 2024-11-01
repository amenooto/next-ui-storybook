import React from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { IOptions } from '@/common/component.interface';
import { AutocompleteProps } from '@nextui-org/autocomplete/dist/autocomplete';

type IAutocompleteProps = {
  options: IOptions[];
  placeholder: string;
  label: string;
  isDisabled?: boolean;
  disabledItems?: string[];
} & Partial<AutocompleteProps>;

export function CAutocomplete({
  options,
  label,
  placeholder,
  disabledItems = [],
  ...rest
}: IAutocompleteProps) {
  return (
    <>
      <Autocomplete
        label={label}
        placeholder={placeholder}
        className="max-w-xs"
        defaultItems={options}
        disabledKeys={disabledItems}
        {...rest}
      >
        {options.map((item) => (
          <AutocompleteItem
            key={item.value}
            value={item.value}
            isDisabled={disabledItems.includes(item.value)}
          >
            {item.label}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </>
  );
}

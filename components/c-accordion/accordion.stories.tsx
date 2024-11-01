import React from 'react';

import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { IAccordionItem, TSelectionMode } from '@/common/component.interface';
import { AccordionProps } from '@nextui-org/accordion/dist/accordion';

type ICAccordionProps = {
  mode?: TSelectionMode;
  isCompact?: boolean;
  variant?: 'light' | 'bordered' | 'shadow' | 'splitted';
  defaultKeys?: string[];
  disabledKeys?: string[];
  items: Array<IAccordionItem>;
} & Partial<AccordionProps>;

export function CAccordion({
  mode = 'single',
  isCompact = true,
  variant = 'light',
  defaultKeys,
  disabledKeys,
  items,
}: ICAccordionProps) {
  return (
    <div>
      <Accordion
        selectionMode={mode}
        isCompact={isCompact}
        variant={variant}
        defaultExpandedKeys={defaultKeys}
        disabledKeys={disabledKeys}
      >
        {items.map((item, idx) => {
          return (
            <AccordionItem
              key={idx}
              aria-label={item.title}
              title={item.title}
              subtitle={item.subTitle}
            >
              {item.description}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

import { Meta, StoryObj } from '@storybook/react';
import { CAccordionStories } from '@/components/c-accordion/accordion.stories';
import { IAccordionItem } from '@/common/component.interface';

const items: IAccordionItem[] = [
  {
    title: 'Item 1',
    subTitle: 'Sub item 1',
    description: 'Description 1',
  },
  {
    title: 'Item 2',
    subTitle: 'Sub item 2',
    description: 'Description 2',
  },
  {
    title: 'Item 3',
    subTitle: 'Sub item 3',
    description: 'Description 3',
  },
];

const meta: Meta<typeof CAccordionStories> = {
  title: 'Form/Accordion',
  component: CAccordionStories,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'The selection mode of the accordion.',
    },
    isCompact: {
      control: 'boolean',
      description: 'The compact mode of the accordion.',
    },
    variant: {
      control: 'select',
      options: ['light', 'bordered', 'shadow', 'splitted'],
      description: 'The variant of the accordion.',
    },
    defaultKeys: {
      control: 'object',
      description: 'The default expanded keys of the accordion.',
    },
    disabledKeys: {
      control: 'object',
      description: 'The disabled keys of the accordion.',
    },
    items: {
      control: 'object',
      description: 'The items of the accordion.',
    },
  },
  args: {
    isCompact: true,
    mode: 'single',
    variant: 'shadow',
    items: items as IAccordionItem[],
  },
};

export default meta;
type Story = StoryObj<typeof CAccordionStories>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'shadow',
    isCompact: true,
    items: items as IAccordionItem[],
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    isCompact: true,
    variant: 'shadow',
    defaultKeys: [],
    disabledKeys: [],
    items: items as IAccordionItem[],
  },
};

export const DefaultKey: Story = {
  args: {
    isCompact: true,
    variant: 'shadow',
    defaultKeys: ['2'],
    items: items as IAccordionItem[],
  },
};

export const DisableKey: Story = {
  args: {
    isCompact: true,
    variant: 'shadow',
    disabledKeys: ['2'],
    items: items as IAccordionItem[],
  },
};

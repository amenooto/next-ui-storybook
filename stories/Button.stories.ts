import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CButton } from '@/components/c-button';

const meta: Meta<typeof CButton> = {
  title: 'Shadcn/Button',
  component: CButton,
  tags: ['autodocs'],
  args: {},
};
export default meta;
type Story = StoryObj<typeof CButton>;

export const Default: Story = {
  args: {},
};

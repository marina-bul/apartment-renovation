import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Red: Story = {
  args: {
    variant: 'red',
    children: 'Button'
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
    children: 'Button'
  },
};

export const White: Story = {
  args: {
    variant: 'white',
    children: 'Button'
  },
};

export const Rounded: Story = {
  args: {
    shape: 'rounded',
    children: 'Button'
  },
};

export const Circle: Story = {
  args: {
    shape: 'circle',
    children: 'Button'
  },
};

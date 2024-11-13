import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from './Banner';

const initialBanner = {
  title: "Качественный ремонт<br>квартир в Москве и МО", 
  image: ""
}

const meta: Meta<typeof Banner> = {
  title: 'shared/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '630px', height: '260px', backgroundColor: '#87CEFA' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const DefaultBanner: Story = {

  args: {
    banner: initialBanner,
  },
};

export const WithButton: Story = {
  args: {
    banner: {...initialBanner, buttonText: "ЗАПИСАТЬСЯ НА ЗАМЕР"},
  },
};

import type { Preview } from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/decorators/StyleDecorator"
import {ThemeDecorator} from "../../src/shared/config/decorators/ThemeDecorator"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Switch between light and dark themes',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator], 

};

export default preview;

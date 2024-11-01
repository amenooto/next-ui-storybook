import type { Preview } from '@storybook/react';
import previewDecorators from '../utils/preview-decorators';
import { action } from '@storybook/addon-actions';

const preview: Preview = {
  parameters: {
    actions: {
      onClick: action('onClick'),
      onSubmit: action('onSubmit'),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: previewDecorators,
};

export default preview;

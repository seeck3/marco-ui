import type { Preview } from '@storybook/react'
import '@src/global.css'; // Ensure your global styles are imported for Storybook

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
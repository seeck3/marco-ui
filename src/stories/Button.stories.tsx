// src/stories/Button.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { TextMarco, Button } from '@src/index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'error'],
    },
  },
} as Meta<typeof Button>;

export const AllButtons: StoryFn<typeof Button> = (args) => (
  <div className="space-y-4 flex flex-col items-center border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
    <TextMarco variant="h3" className="mb-4">
      Button Variations
    </TextMarco>
    <Button {...args} label="Primary Button" variant="primary" />
    <Button {...args} label="Secondary Button" variant="secondary" />
    <Button {...args} label="Warning Button" variant="warning" />
    <Button {...args} label="Error Button" variant="error" />
  </div>
);

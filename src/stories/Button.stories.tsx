// src/stories/Button.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../components/Button';

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

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  variant: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Button',
  variant: 'error',
};

// src/stories/Alert.stories.tsx
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Alert, { AlertProps } from '../components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = (args) => <Alert {...args} />;

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  type: 'info',
  message: 'This is an info alert',
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  type: 'success',
  message: 'Operation successful!',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  type: 'warning',
  message: 'Warning: check your settings',
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  type: 'error',
  message: 'Error: something went wrong',
};

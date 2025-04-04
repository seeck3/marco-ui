// src/stories/Alert.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Alert } from '@src/index'; // Adjust the import path as necessary

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta<typeof Alert>;

export const AllAlerts: StoryFn<typeof Alert> = (args) => (
  <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
    <Alert {...args} type="info" message="This is an info alert" />
    <Alert {...args} type="success" message="This is a success alert" />
    <Alert {...args} type="warning" message="This is a warning alert" />
    <Alert {...args} type="error" message="This is an error alert" />
  </div>
);

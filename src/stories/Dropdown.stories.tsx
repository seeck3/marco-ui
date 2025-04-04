// src/stories/Dropdown.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Dropdown } from '@src/index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: 'Select an option',
  items: ['Option 1', 'Option 2', 'Option 3'],
};

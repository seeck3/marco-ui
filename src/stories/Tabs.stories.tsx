// src/stories/Tabs.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Tabs, TabsProps } from '@src/index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta<typeof Tabs>;

const Template: StoryFn<TabsProps> = (args) => <Tabs {...args} />;

export const DefaultTabs = Template.bind({});
DefaultTabs.args = {
  tabs: [
    { label: 'Tab 1', content: <div>This is the content for Tab 1.</div> },
    { label: 'Tab 2', content: <div>This is the content for Tab 2.</div> },
    { label: 'Tab 3', content: <div>This is the content for Tab 3.</div> },
  ],
};

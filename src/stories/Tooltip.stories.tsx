// src/stories/Tooltip.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Tooltip } from '@src/index';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

const Template: StoryFn<typeof Tooltip> = (args) => (
  <div className="flex justify-center items-center h-64">
    <Tooltip {...args}>
      <span className="underline cursor-pointer">Hover over me!</span>
    </Tooltip>
  </div>
);

export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
  text: 'This is a tooltip message',
};

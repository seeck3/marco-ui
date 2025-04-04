// src/stories/Card.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Card } from '@src/index';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const WithHeaderAndBody = Template.bind({});
WithHeaderAndBody.args = {
  title: 'Card Title',
  children: 'This is the body content of the card.',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Card Title',
  children: 'This is the body content of the card.',
  footer: 'This is the footer content.',
};

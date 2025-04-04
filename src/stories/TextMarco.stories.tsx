// src/stories/Text.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { TextMarco } from '@src/index';

export default {
  title: 'Components/TextMarco',
  component: TextMarco,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'body', 'caption', 'label'],
    },
  },
} as Meta<typeof TextMarco>;

export const AllVariants: StoryFn = () => (
  <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
    <TextMarco variant="h1">
      Heading 1: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="h2">
      Heading 2: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="h3">
      Heading 3: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="h4">
      Heading 4: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="body">
      Body: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="caption">
      Caption: The quick brown fox jumps over the lazy dog.
    </TextMarco>
    <TextMarco variant="label">
      Label: The quick brown fox jumps over the lazy dog.
    </TextMarco>
  </div>
);

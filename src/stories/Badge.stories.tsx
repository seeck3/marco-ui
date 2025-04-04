// src/stories/Badge.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { Badge } from '@src/index';
import { UserIcon, UserGroupIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    icon: {
      control: false,
      table: { disable: true },
    },
    initial: {
      control: false,
      description: 'Initials to display when no icon is provided',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'N/A' },
      },
    },
    text: {
      control: false,
      description: 'Text to display inside the badge',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'N/A' }, // Default value shown in the Storybook table
      },
    },
    variant: {
      control: false,
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
      ],
    },
  },
} as Meta<typeof Badge>;

const AllBadges: StoryFn<typeof Badge> = (args) => (
  <div className="flex gap-10 items-cente grow">
    <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
      <Badge {...args} variant="default" text="Default Badge" />
      <Badge {...args} variant="primary" text="Primary Badge" />
      <Badge {...args} variant="secondary" text="Secondary Badge" />
      <Badge {...args} variant="success" text="Success Badge" />
      <Badge {...args} variant="warning" text="Warning Badge" />
      <Badge {...args} variant="error" text="Error Badge" />
    </div>
    <div className="space-y-4 flex flex-col border-2 border-dashed border-gray-300 p-6 rounded-md w-full items-center">
      <Badge {...args} variant="default" text="Default Badge" />
      <div>
        <Badge
          {...args}
          variant="primary"
          icon={<UserIcon className="h-4 w-4" />}
        />
      </div>
      <div>
        <Badge
          {...args}
          variant="secondary"
          icon={<UserGroupIcon className="h-4 w-4" />}
        />
      </div>
      <div>
        <Badge {...args} variant="success" initial="MS" />
      </div>
      <div>
        <Badge {...args} variant="warning" initial="DS" />
      </div>
    </div>
  </div>
);

export const AllVariants = AllBadges.bind({});
AllVariants.args = {};

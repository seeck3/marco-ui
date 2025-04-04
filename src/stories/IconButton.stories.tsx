// src/stories/IconButton.stories.tsx
import { StoryFn, Meta } from '@storybook/react';
import { IconButton, IconButtonProps, IconButtonSize } from '@src/index';
import {
  XMarkIcon,
  AtSymbolIcon,
  BellAlertIcon,
  BellSlashIcon,
  CheckIcon,
} from '@heroicons/react/24/solid';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger'],
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof IconButton>;

const sizes: IconButtonSize[] = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
];

const Template: StoryFn<IconButtonProps> = (args) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      {/* Size Variations */}
      <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
        <h3 className="text-lg font-semibold mb-4">
          IconButton - Size Variations
        </h3>
        <div className="flex gap-6">
          {sizes.map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <IconButton
                {...args}
                icon={<XMarkIcon className="h-full w-full" />}
                size={size}
              />
              <span className="text-sm capitalize">{size}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Color Variant Variations */}
      <div className="flex flex-col items-center border-2 border-dashed border-gray-300 p-6 rounded-md w-full">
        <h3 className="text-lg font-semibold mb-4">
          IconButton - Color Variations
        </h3>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <IconButton
              {...args}
              icon={<AtSymbolIcon className="h-full w-full" />}
              variant="default"
            />
            <span className="text-sm">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconButton
              {...args}
              icon={<CheckIcon className="h-full w-full" />}
              variant="primary"
            />
            <span className="text-sm">primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconButton
              {...args}
              icon={<BellAlertIcon className="h-full w-full" />}
              variant="secondary"
            />
            <span className="text-sm">secondary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <IconButton
              {...args}
              icon={<BellSlashIcon className="h-full w-full" />}
              variant="danger"
            />
            <span className="text-sm">danger</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DefaultIconButton = Template.bind({});
DefaultIconButton.args = {};

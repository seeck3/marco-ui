// src/stories/Toast.stories.tsx
import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Toast, ToastProps, Button } from '@src/index';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    duration: {
      control: 'number',
    },
    variant: {
      control: 'select',
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
} as Meta<typeof Toast>;

// Basic Template with a button to show/hide the toast.
const Template: StoryFn<ToastProps> = (args) => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {visible && (
        <Toast
          {...args}
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
      <button
        onClick={() => setVisible(true)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Show Toast
      </button>
    </div>
  );
};

export const CenterToast = Template.bind({});
CenterToast.args = {
  message: 'This is a toast notification!',
  duration: 3000,
  position: 'center',
  variant: 'default',
};

export const LeftToast = Template.bind({});
LeftToast.args = {
  message: 'Toast on the left!',
  duration: 3000,
  position: 'left',
  variant: 'default',
};

export const RightToast = Template.bind({});
RightToast.args = {
  message: 'Toast on the right!',
  duration: 3000,
  position: 'right',
  variant: 'default',
};

/**
 * AllVariantToasts story displays one toast for each variant.
 * We use a longer duration and a no-op onClose to ensure each toast stays visible for preview.
 */
export const AllVariantToasts: StoryFn = (args) => {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<ToastProps['variant']>('default');
  const [visibleNoIcon, setVisibleNoIcon] = useState(false);
  const [variantNoIcon, setVariantNoIcon] =
    useState<ToastProps['variant']>('default');
  // Define all the available variants
  const variants: ToastProps['variant'][] = [
    'default',
    'primary',
    'secondary',
    'success',
    'warning',
    'error',
  ];

  const getVariant = (variant: ToastProps['variant'] | undefined) => {
    switch (
      variant // Use the key of the variant to determine which one it is.
    ) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'warning':
        return 'warning'; // warning variant
      case 'error':
        return 'error'; // error variant
      default:
        return 'primary'; // default variant, this is the fallback if none of the above match.
    }
  };
  return (
    <div className="space-x-4 flex grow justify-around">
      <div className="flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md">
        {variants.map((variant) => (
          <Button
            key={variant} // Ensure each button has a unique key for React's list rendering
            onClick={() => {
              setVisible(true);
              setVariant(variant); // Set the variant for the toast to show
            }}
            label={`Show ${variant} Toast`}
            variant={getVariant(variant)} // Use the getVariant function to determine the variant for the button
          />
        ))}
      </div>
      <div className="flex flex-col space-y-4 border-2 border-dashed border-gray-300 p-6 rounded-md">
        {variants.map((variant) => (
          <Button
            key={variant} // Ensure each button has a unique key for React's list rendering
            onClick={() => {
              setVisibleNoIcon(true);
              setVariantNoIcon(variant); // Set the variant for the toast to show
            }}
            label={`Show ${variant} Toast Without Icon`}
            variant={getVariant(variant)} // Use the getVariant function to determine the variant for the button
          />
        ))}
      </div>
      {visible && (
        <Toast
          {...args}
          message={`Vairant: ${variant}`} // Display the variant in the message for clarity
          duration={5000} // Longer duration to allow for visibility during preview
          variant={variant} // Use the current variant
          position="left"
          icon
          onClose={() => {
            setVisible(false);
          }}
        />
      )}
      {visibleNoIcon && (
        <Toast
          {...args}
          message={`Vairant: ${variantNoIcon}`} // Display the variant in the message for clarity
          duration={5000} // Longer duration to allow for visibility during preview
          position="right"
          variant={variantNoIcon} // Use the current variant
          onClose={() => {
            setVisibleNoIcon(false);
          }}
        />
      )}
    </div>
  );
};

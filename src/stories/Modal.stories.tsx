// src/stories/Modal.stories.tsx
import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ModalProps, Modal } from '@src/index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  const handleClose = () => {
    setIsOpen(false);
    action('onClose')();
  };

  const handleConfirm = () => {
    setIsOpen(false);
    action('onConfirm')();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Open Modal
      </button>
      <Modal
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  isOpen: false,
  title: 'Confirm Action',
  children: 'Are you sure you want to proceed?',
};

export const ActionModal = Template.bind({});
ActionModal.args = {
  isOpen: false,
  isAction: true,
  title: 'Confirm Action',
  children: 'Are you sure you want to proceed?',
};

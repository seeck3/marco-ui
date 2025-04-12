'use client'
// src/components/Modal.tsx
import React from 'react';
import { Button, IconButton, TextMarco } from '@src/index';
import { XMarkIcon } from '@heroicons/react/24/solid';

export interface ModalProps {
  isOpen: boolean;
  isAction?: boolean; // Optional prop to indicate if the modal is an action modal (like confirmation)
  onClose: () => void;
  onConfirm?: () => void; // Optional prop for confirm action, if needed
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  isAction = false,
  onClose,
  onConfirm, // Not used in this example but kept for flexibility
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-lg w-full">
          <div className="px-6 py-4 border-b border-gray-300 flex justify-between items-center">
            <TextMarco variant="h4">{title}</TextMarco>
            <IconButton
              onClick={onClose}
              icon={<XMarkIcon />}
              ariaLabel="Close"
              size="xsmall" // Use xsmall to match the modal header size
            />
          </div>
          <div className="px-6 py-4">{children}</div>
          {isAction ? (
            <div className="px-6 py-4 border-t border-gray-300 bg-gray-50 flex justify-end space-x-2">
              <Button onClick={onConfirm} label="Confirm" />
              <Button
                onClick={onClose}
                variant="secondary" // Use secondary variant for cancel
                label="Cancel"
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Modal;

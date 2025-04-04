// src/components/Modal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '@src/index';

describe('Modal component', () => {
  const onClose = jest.fn();
  const onConfirm = jest.fn();
  const defaultProps = {
    isOpen: true,
    isAction: true,
    onClose,
    onConfirm,
    title: 'Test Modal',
    children: 'Modal Content',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal content when open', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when backdrop is clicked', () => {
    const { container } = render(<Modal {...defaultProps} />);
    // Query the backdrop by its Tailwind class
    const backdrop = container.querySelector('.bg-black');
    expect(backdrop).toBeInTheDocument();
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(onClose).toHaveBeenCalled();
    }
  });

  it('calls onConfirm when confirm button is clicked', () => {
    render(<Modal {...defaultProps} />);
    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });

  it('calls onClose when cancel button is clicked', () => {
    render(<Modal {...defaultProps} />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(onClose).toHaveBeenCalled();
  });
});

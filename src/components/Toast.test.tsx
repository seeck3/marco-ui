// src/components/Toast.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { Toast } from '@src/index';

describe('Toast component', () => {
  it('renders the message', () => {
    const handleClose = jest.fn();
    render(
      <Toast message="Test Toast" duration={3000} onClose={handleClose} />,
    );
    expect(screen.getByText(/Test Toast/i)).toBeInTheDocument();
  });

  it('calls onClose after duration', async () => {
    jest.useFakeTimers();
    const handleClose = jest.fn();
    render(
      <Toast message="Auto dismiss" duration={1000} onClose={handleClose} />,
    );

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(handleClose).toHaveBeenCalled();
    });

    jest.useRealTimers();
  });
});

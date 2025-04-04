// src/components/IconButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButtonProps, IconButton } from '@src/index';
import { XMarkIcon } from '@heroicons/react/24/solid';

describe('IconButton component', () => {
  const defaultProps: IconButtonProps = {
    icon: <XMarkIcon data-testid="icon" className="h-full w-full" />,
    ariaLabel: 'Close',
  };

  it('renders the provided icon', () => {
    render(<IconButton {...defaultProps} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton {...defaultProps} onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the default (medium) size classes', () => {
    const { container } = render(<IconButton {...defaultProps} />);
    // For "medium", we expect 'p-3 h-10 w-10'
    expect(container.firstChild).toHaveClass('p-1');
    expect(container.firstChild).toHaveClass('h-10');
    expect(container.firstChild).toHaveClass('w-10');
  });

  it('applies the "large" size classes when specified', () => {
    const { container } = render(<IconButton {...defaultProps} size="large" />);
    // For "large", we expect 'p-4 h-12 w-12'
    expect(container.firstChild).toHaveClass('p-1');
    expect(container.firstChild).toHaveClass('h-12');
    expect(container.firstChild).toHaveClass('w-12');
  });
});

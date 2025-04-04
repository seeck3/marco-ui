// src/components/Badge.test.tsx
import { render, screen } from '@testing-library/react';
import { Badge } from '@src/index';

describe('Badge component', () => {
  it('renders the badge text', () => {
    render(<Badge text="Test Badge" />);
    expect(screen.getByText(/Test Badge/i)).toBeInTheDocument();
  });

  it('applies the correct classes for primary variant', () => {
    render(<Badge text="Primary Badge" variant="primary" />);
    const badgeElement = screen.getByText(/Primary Badge/i);
    expect(badgeElement).toHaveClass('bg-blue-500');
  });
});

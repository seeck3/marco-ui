// src/components/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@src/index';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText(/Test Button/i)).toBeInTheDocument();
});

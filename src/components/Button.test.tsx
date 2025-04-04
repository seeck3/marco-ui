// src/components/Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with label', () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText(/Test Button/i)).toBeInTheDocument();
});

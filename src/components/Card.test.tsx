// src/components/Card.test.tsx
import { render, screen } from '@testing-library/react';
import { Card, CardProps } from '@src/index';

describe('Card component', () => {
  const defaultProps: CardProps = {
    title: 'Test Card Title',
    children: <div>Test Card Body</div>,
  };

  it('renders the title and children', () => {
    render(<Card {...defaultProps} />);
    // Check that the title text is rendered.
    expect(screen.getByText('Test Card Title')).toBeInTheDocument();
    // Check that the children are rendered.
    expect(screen.getByText('Test Card Body')).toBeInTheDocument();
  });

  it('renders the footer when provided', () => {
    const footerContent = <div>Footer Content</div>;
    render(<Card {...defaultProps} footer={footerContent} />);
    // Check that the footer content is rendered.
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('does not render the footer container when no footer is provided', () => {
    render(<Card {...defaultProps} />);
    // We assume the footer container has a bg-gray-50 background.
    const footerElement = document.querySelector('.bg-gray-50');
    expect(footerElement).toBeNull();
  });
});

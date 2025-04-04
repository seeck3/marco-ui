// src/components/Text.test.tsx
import { render, screen } from '@testing-library/react';
import { TextMarco } from '@src/index';

describe('TextMarco component', () => {
  it('renders body text by default', () => {
    render(<TextMarco>Hello, world!</TextMarco>);
    expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
    // Default should render as a <p> element
    expect(screen.getByText(/hello, world!/i).tagName).toBe('P');
  });

  it('renders h1 variant with proper classes and element', () => {
    const { container } = render(<TextMarco variant="h1">Heading 1</TextMarco>);
    const element = container.firstChild;
    expect(element).toHaveClass('text-4xl');
    expect(element).toHaveClass('font-bold');
    expect(element?.nodeName).toBe('H1');
  });

  it('renders caption variant with proper classes', () => {
    const { container } = render(
      <TextMarco variant="caption">Caption Text</TextMarco>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass('text-sm');
    expect(element).toHaveClass('text-gray-500');
    expect(element?.nodeName).toBe('P'); // caption renders as a <p> by default
  });

  it('renders label variant as a <label> element', () => {
    const { container } = render(
      <TextMarco variant="label">Label Text</TextMarco>,
    );
    const element = container.firstChild;
    expect(element).toHaveClass('text-sm');
    expect(element).toHaveClass('font-medium');
    expect(element?.nodeName).toBe('LABEL');
  });
});

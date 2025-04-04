// src/components/Alert.test.tsx
import { render, screen } from '@testing-library/react';
import Alert from './Alert'; // Adjust the import path based on your file structure';

describe('Alert component', () => {
  const defaultMessage = 'Test Alert Message';

  it('renders the alert message', () => {
    render(<Alert message={defaultMessage} />);
    expect(screen.getByText(defaultMessage)).toBeInTheDocument();
  });

  it('applies the correct classes for the info type (default)', () => {
    render(<Alert message={defaultMessage} />);
    const alertElement = screen.getByText(defaultMessage).parentElement;
    // Assuming default type is 'info'
    expect(alertElement).toHaveClass('bg-blue-100');
    expect(alertElement).toHaveClass('border-blue-500');
    expect(alertElement).toHaveClass('text-blue-700');
  });

  it('applies the correct classes for success type', () => {
    render(<Alert type="success" message="Success Alert" />);
    const alertElement = screen.getByText(/Success Alert/i).parentElement;
    expect(alertElement).toHaveClass('bg-green-100');
    expect(alertElement).toHaveClass('border-green-500');
    expect(alertElement).toHaveClass('text-green-700');
  });

  it('applies the correct classes for warning type', () => {
    render(<Alert type="warning" message="Warning Alert" />);
    const alertElement = screen.getByText(/Warning Alert/i).parentElement;
    expect(alertElement).toHaveClass('bg-yellow-100');
    expect(alertElement).toHaveClass('border-yellow-500');
    expect(alertElement).toHaveClass('text-yellow-700');
  });

  it('applies the correct classes for error type', () => {
    render(<Alert type="error" message="Error Alert" />);
    const alertElement = screen.getByText(/Error Alert/i).parentElement;
    expect(alertElement).toHaveClass('bg-red-100');
    expect(alertElement).toHaveClass('border-red-500');
    expect(alertElement).toHaveClass('text-red-700');
  });
});

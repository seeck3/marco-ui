// src/components/Dropdown.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from '@src/index';

describe('Dropdown component', () => {
  it('renders the label button', () => {
    render(<Dropdown label="Choose" items={['A', 'B']} />);
    expect(screen.getByText(/Choose/i)).toBeInTheDocument();
  });

  it('opens the dropdown when button is clicked', () => {
    render(<Dropdown label="Choose" items={['A', 'B']} />);
    const button = screen.getByText(/Choose/i);
    fireEvent.click(button);
    expect(screen.getByText(/A/i)).toBeInTheDocument();
    expect(screen.getByText(/B/i)).toBeInTheDocument();
  });

  it('calls onSelect when an item is clicked', () => {
    const handleSelect = jest.fn();
    render(
      <Dropdown label="Choose" items={['A', 'B']} onSelect={handleSelect} />,
    );
    const button = screen.getByText(/Choose/i);
    fireEvent.click(button);
    const item = screen.getByText(/A/i);
    fireEvent.click(item);
    expect(handleSelect).toHaveBeenCalledWith('A');
  });
});

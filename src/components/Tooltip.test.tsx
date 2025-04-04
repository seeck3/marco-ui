// src/components/Tooltip.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  it('renders the child element', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    // Verify that the child (button) is rendered.
    expect(screen.getByText(/hover me/i)).toBeInTheDocument();
  });

  it('does not display the tooltip text initially', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    // Tooltip text should not be visible before interaction.
    expect(screen.queryByText(/tooltip text/i)).not.toBeInTheDocument();
  });

  it('shows the tooltip text on mouse enter and hides it on mouse leave', () => {
    render(
      <Tooltip text="Tooltip text">
        <button>Hover me</button>
      </Tooltip>,
    );
    const button = screen.getByText(/hover me/i);

    // Simulate mouse entering the button.
    fireEvent.mouseEnter(button);
    expect(screen.getByText(/tooltip text/i)).toBeInTheDocument();

    // Simulate mouse leaving the button.
    fireEvent.mouseLeave(button);
    expect(screen.queryByText(/tooltip text/i)).not.toBeInTheDocument();
  });
});

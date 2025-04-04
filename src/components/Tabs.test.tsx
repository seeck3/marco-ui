// src/components/Tabs.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { TabsProps, Tabs } from '@src/index'; // Adjust the import path as necessary

describe('Tabs component', () => {
  const tabs: TabsProps['tabs'] = [
    { label: 'First Tab', content: <div>Content 1</div> },
    { label: 'Second Tab', content: <div>Content 2</div> },
  ];

  it('renders the first tab content by default', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText(/Content 1/i)).toBeInTheDocument();
  });

  it('switches content when a different tab is clicked', () => {
    render(<Tabs tabs={tabs} />);
    const secondTabButton = screen.getByText(/Second Tab/i);
    fireEvent.click(secondTabButton);
    expect(screen.getByText(/Content 2/i)).toBeInTheDocument();
  });
});

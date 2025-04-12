'use client'
// src/components/Tabs.tsx
import React, { useState, ReactNode } from 'react';

export interface Tab {
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 -mb-px border-b-2 focus:outline-none cursor-pointer ${
              activeIndex === index
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-600 hover:text-blue-500'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;

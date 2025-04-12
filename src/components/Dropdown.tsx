'use client'
// src/components/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';

export interface DropdownProps {
  label: string;
  items: string[];
  onSelect?: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setOpen((prev) => !prev);

  const handleItemClick = (item: string) => {
    if (onSelect) onSelect(item);
    setOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleToggle}
      >
        {label}
      </button>
      {open && (
        <ul className="absolute left-0 mt-2 w-full bg-white border rounded shadow-lg z-10">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

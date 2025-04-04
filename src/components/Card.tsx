// src/components/Card.tsx
import React from 'react';
import { TextMarco } from '@src/index'; // Adjust the import path as necessary

export interface CardProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  footer,
  className = '',
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}
    >
      <div className="px-6 py-4 border-b">
        <TextMarco variant="h3">{title}</TextMarco>
      </div>
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="px-6 py-4 border-t bg-gray-50">{footer}</div>}
    </div>
  );
};

export default Card;

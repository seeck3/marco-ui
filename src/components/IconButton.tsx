// src/components/IconButton.tsx
import React from 'react';

export type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'danger';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
}

// Size mapping for padding and dimensions
const sizeClasses: Record<IconButtonSize, string> = {
  xsmall: 'p-1 h-6 w-6',
  small: 'p-1 h-8 w-8',
  medium: 'p-1 h-10 w-10',
  large: 'p-1 h-12 w-12',
  xlarge: 'p-1 h-14 w-14',
};

// Variant mapping for colors
const variantClasses: Record<IconButtonVariant, string> = {
  default: 'text-gray-600 hover:text-gray-800 hover:bg-gray-200',
  primary: 'text-blue-600 hover:text-blue-800 hover:bg-blue-200',
  secondary: 'text-purple-600 hover:text-purple-800 hover:bg-purple-200',
  danger: 'text-red-600 hover:text-red-800 hover:bg-red-200',
};

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  className = '',
  size = 'medium',
  variant = 'default',
  ...props
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`cursor-pointer transition-transform hover:scale-110 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;

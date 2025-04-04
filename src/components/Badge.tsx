// src/components/Badge.tsx
import React from 'react';

export type BadgeVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

export interface BadgeProps {
  /**
   * The text to display if no icon or initial is provided.
   */
  text?: string;
  /**
   * A React node to render as an icon. If provided, it takes precedence over the text or initial.
   */
  icon?: React.ReactNode;
  /**
   * A short string (e.g. an initial letter) to display if no icon is provided.
   */
  initial?: string;
  /**
   * The visual variant of the badge.
   * @default 'default'
   */
  variant?: BadgeVariant;
  /**
   * Additional CSS classes to add.
   */
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-200 text-gray-800',
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-purple-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  error: 'bg-red-500 text-white',
};

const Badge: React.FC<BadgeProps> = ({
  text,
  icon,
  initial,
  variant = 'default',
  className = '',
}) => {
  // Determine what content to render.
  // Priority: icon > initial > text
  const content = icon ? icon : initial ? initial : text;

  // If an icon or initial is provided, render badge as a circle.
  const isCircular = Boolean(icon || initial);

  // If circular, use fixed equal dimensions and center the content.
  const baseClasses = isCircular
    ? 'p-2 flex items-center justify-center rounded-full'
    : 'px-2 py-1 rounded';

  return (
    <span
      className={`inline-block ${baseClasses} text-sm ${variantClasses[variant]} ${className}`}
    >
      {content}
    </span>
  );
};

export default Badge;

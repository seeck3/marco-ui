// src/components/Button.tsx
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'error';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  warning: 'bg-yellow-500 text-black hover:bg-yellow-600',
  error: 'bg-red-500 text-white hover:bg-red-600',
};

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', ...props }) => {
  const classes = `px-4 py-2 rounded cursor-pointer ${variantClasses[variant]}`;
  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
};

export default Button;

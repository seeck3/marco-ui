// src/components/Alert.tsx
import React from 'react';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  message: string;
}

const typeClasses: Record<AlertType, string> = {
  info: 'bg-blue-100 border-blue-500 text-blue-700',
  success: 'bg-green-100 border-green-500 text-green-700',
  warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  error: 'bg-red-100 border-red-500 text-red-700',
};

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  ...props
}) => {
  return (
    <div
      className={`border-l-4 p-4 ${typeClasses[type]} rounded`}
      {...props}
    >
      <p>{message}</p>
    </div>
  );
};

export default Alert;

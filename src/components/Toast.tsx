'use client'
// src/components/Toast.tsx
import React, { useEffect } from 'react';
import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  XCircleIcon,
  StarIcon,
} from '@heroicons/react/24/solid';

/**
 * Available visual variants for the Toast.
 */
export type ToastVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';

/**
 * Props for the Toast component.
 */
export interface ToastProps {
  /**
   * The message to display inside the toast.
   */
  message: string;
  /**
   * The duration (in milliseconds) before the toast auto-dismisses.
   * @default 3000
   */
  duration?: number;
  /**
   * Callback function that is called when the toast is closed.
   */
  onClose: () => void;
  /**
   * The position where the toast appears on the screen.
   * Options: 'left', 'center', or 'right'.
   * @default 'center'
   */
  position?: 'left' | 'center' | 'right';
  /**
   * The visual variant of the toast.
   * @default 'default'
   */
  variant?: ToastVariant;
  /**
   * Optional prop to control whether to display the icon or not.
   * This is useful for cases where you might want to show a plain message without an icon.
   * @default false for variants with icons, otherwise false.
   */
  icon?: boolean; // Optional prop to control icon display, defaults to false for variants with icons.
}

/**
 * Mapping from position prop to Tailwind CSS classes for positioning.
 */
const POSITION_CLASSES: Record<NonNullable<ToastProps['position']>, string> = {
  left: 'fixed bottom-4 left-4',
  center: 'fixed bottom-4 left-1/2 transform -translate-x-1/2',
  right: 'fixed bottom-4 right-4',
};

/**
 * Mapping from variant prop to Tailwind CSS classes for styling.
 */
const VARIANT_CLASSES: Record<NonNullable<ToastProps['variant']>, string> = {
  default: 'bg-gray-800 text-white',
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-purple-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-black',
  error: 'bg-red-500 text-white',
};

/**
 * Mapping from variant prop to a default icon for the toast.
 */
const VARIANT_ICONS: Record<
  NonNullable<ToastProps['variant']>,
  React.ReactNode
> = {
  default: <InformationCircleIcon className="h-6 w-6 mr-2 inline-block" />,
  primary: <StarIcon className="h-6 w-6 mr-2 inline-block" />,
  secondary: <StarIcon className="h-6 w-6 mr-2 inline-block" />,
  success: <CheckCircleIcon className="h-6 w-6 mr-2 inline-block" />,
  warning: <ExclamationCircleIcon className="h-6 w-6 mr-2 inline-block" />,
  error: <XCircleIcon className="h-6 w-6 mr-2 inline-block" />,
};

/**
 * Toast component displays a notification message with an icon based on the variant.
 *
 * The toast auto-dismisses after a specified duration and can be positioned on the left,
 * center, or right of the viewport.
 *
 * @example
 * ```tsx
 * <Toast
 *   message="Operation Successful!"
 *   duration={3000}
 *   position="right"
 *   variant="success"
 *   onClose={() => console.log('Toast closed')}
 * />
 * ```
 *
 * @param props - Props for the Toast component.
 * @returns The rendered Toast component.
 */
const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  position = 'center',
  variant = 'default',
  icon = false, // Optional prop to control icon display, defaults to true for variants with icons.
}) => {
  // Automatically call onClose after the specified duration.
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // Combine the position and variant classes along with common styling.
  const classes = `${POSITION_CLASSES[position]} ${VARIANT_CLASSES[variant]} px-4 py-2 rounded shadow-lg animate-slide-up flex items-center`;

  return (
    <div className={classes}>
      {icon ? VARIANT_ICONS[variant] : null}
      <span>{message}</span>
    </div>
  );
};

export default Toast;

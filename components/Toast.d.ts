import { default as React } from '../../node_modules/react';
/**
 * Available visual variants for the Toast.
 */
export type ToastVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
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
    icon?: boolean;
}
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
declare const Toast: React.FC<ToastProps>;
export default Toast;

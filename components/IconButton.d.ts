import { default as React } from '../../node_modules/react';
export type IconButtonSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
export type IconButtonVariant = 'default' | 'primary' | 'secondary' | 'danger';
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    ariaLabel?: string;
    className?: string;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
}
declare const IconButton: React.FC<IconButtonProps>;
export default IconButton;

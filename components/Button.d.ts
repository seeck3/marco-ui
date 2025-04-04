import { default as React } from '../../node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'warning' | 'error';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: ButtonVariant;
}
declare const Button: React.FC<ButtonProps>;
export default Button;

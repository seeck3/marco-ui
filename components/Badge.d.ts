import { default as React } from '../../node_modules/react';
export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
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
declare const Badge: React.FC<BadgeProps>;
export default Badge;

import { default as React } from '../../node_modules/react';
export interface CardProps {
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
declare const Card: React.FC<CardProps>;
export default Card;

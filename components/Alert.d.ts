import { default as React } from '../../node_modules/react';
export type AlertType = 'info' | 'success' | 'warning' | 'error';
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: AlertType;
    message: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;

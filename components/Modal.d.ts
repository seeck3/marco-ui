import { default as React } from '../../node_modules/react';
export interface ModalProps {
    isOpen: boolean;
    isAction?: boolean;
    onClose: () => void;
    onConfirm?: () => void;
    title: string;
    children: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;

import { default as React } from '../../node_modules/react';
export interface DropdownProps {
    label: string;
    items: string[];
    onSelect?: (item: string) => void;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;

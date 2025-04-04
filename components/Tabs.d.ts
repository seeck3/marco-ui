import { default as React, ReactNode } from '../../node_modules/react';
export interface Tab {
    label: string;
    content: ReactNode;
}
export interface TabsProps {
    tabs: Tab[];
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;

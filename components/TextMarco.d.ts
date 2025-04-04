import { default as React } from '../../node_modules/react';
/**
 * Variants supported by TextMarco.
 */
export type TextMarcoVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption' | 'label';
/**
 * Props for the TextMarco component.
 */
export interface TextMarcoProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The variant determines the style and HTML element rendered.
     * @default 'body'
     */
    variant?: TextMarcoVariant;
    /**
     * The text content to be displayed.
     */
    children: React.ReactNode;
    /**
     * Additional CSS class names to apply to the element.
     */
    className?: string;
}
/**
 * **TextMarco Component**
 *
 * A flexible text component that renders different HTML elements and styles
 * based on the `variant` prop. Use this component to maintain consistent typography
 * throughout your application.
 *
 * @example
 * ```tsx
 * <TextMarco variant="h1">This is a Heading</TextMarco>
 * <TextMarco variant="body">This is body text.</TextMarco>
 * ```
 *
 * @param props - TextMarco component props.
 * @returns A styled text element.
 */
declare const TextMarco: React.FC<TextMarcoProps>;
export default TextMarco;

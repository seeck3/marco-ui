import React from 'react';

/**
 * Variants supported by TextMarco.
 */
export type TextMarcoVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'caption'
  | 'label';

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
 * Mapping of text variants to their corresponding Tailwind CSS classes.
 */
const variantClasses: Record<TextMarcoVariant, string> = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-semibold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  body: 'text-base',
  caption: 'text-sm text-gray-500',
  label: 'text-sm font-medium',
};

/**
 * Mapping of text variants to the HTML element to render.
 */
const variantTag: Record<TextMarcoVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  caption: 'p',
  label: 'label',
};

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
const TextMarco: React.FC<TextMarcoProps> = ({
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  const Component = variantTag[variant] || 'p';
  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default TextMarco;

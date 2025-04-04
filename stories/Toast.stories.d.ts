import { StoryFn, Meta } from '@storybook/react';
import { Toast, ToastProps } from '../index';
declare const _default: Meta<typeof Toast>;
export default _default;
export declare const CenterToast: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ToastProps>;
export declare const LeftToast: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ToastProps>;
export declare const RightToast: import('@storybook/core/csf').AnnotatedStoryFn<import('@storybook/react').ReactRenderer, ToastProps>;
/**
 * AllVariantToasts story displays one toast for each variant.
 * We use a longer duration and a no-op onClose to ensure each toast stays visible for preview.
 */
export declare const AllVariantToasts: StoryFn;

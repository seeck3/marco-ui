// src/components/index.ts
import Alert, { AlertProps, AlertType } from './Alert';
import Badge, { BadgeProps, BadgeVariant } from './Badge';
import Button, { ButtonProps, ButtonVariant } from './Button';
import Card, { CardProps } from './Card';
import Dropdown, { DropdownProps } from './Dropdown';
import IconButton, {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton';
import Modal, { ModalProps } from './Modal';
import Tabs, { Tab, TabsProps } from './Tabs';
import TextMarco, { TextMarcoProps, TextMarcoVariant } from './TextMarco';
import Toast, { ToastProps, ToastVariant } from './Toast';
import Tooltip, { TooltipProps } from './Tooltip';

export {
  Alert,
  Badge,
  Button,
  Card,
  Dropdown,
  Modal,
  Tabs,
  TextMarco,
  Tooltip,
  Toast,
  IconButton, // Added IconButton
};

export type {
  AlertProps,
  AlertType,
  BadgeProps,
  BadgeVariant,
  ButtonProps,
  ButtonVariant,
  CardProps,
  DropdownProps,
  ModalProps,
  Tab,
  TabsProps,
  TextMarcoProps,
  TextMarcoVariant,
  ToastProps,
  ToastVariant,
  TooltipProps,
  IconButtonProps, // Added IconButtonProps
  IconButtonSize, // Added IconButtonSize
  IconButtonVariant, // Added IconButtonVariant
};

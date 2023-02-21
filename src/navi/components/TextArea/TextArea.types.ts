import { TooltipPositionTypes } from "./../Tooltip/Tooltip.types";

export interface CustomTextAreaEvent {
  event: React.ChangeEvent<HTMLDivElement | HTMLSpanElement>;
  value: string;
}
export interface TextAreaProps {
  intent?: "default" | "success" | "critical" | "read-only";
  disabled?: boolean;
  "data-testid"?: string;
  ariaLabel?: string;
  placeholder?: string;
  value?: string;
  maxWidth?: string;
  maxHeight?: string;
  height?: string,
  width?: string,
  label?: string;
  required?: boolean;
  maxCharacters?: number;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  moreInfo?: string;
  tooltipPlacement?: TooltipPositionTypes;
  onChange?: (e: CustomTextAreaEvent) => void;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLSpanElement>;
}

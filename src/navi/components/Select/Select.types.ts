import { SelectProps as MuiSelectProps } from "@material-ui/core/Select";
import React from "react";
import { NaviInputProps } from "../Input/Input.types";
import { TagProps } from "../Tag/Tag.types";
export interface SelectDataProps {
  title?: string;
  description?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  value?: string | number;
  checked?: boolean;
  type?: "divider" | "select";
  divider?: boolean;
  groupHeading?: boolean;
  disabled?: boolean;
}

export interface SelectProps
  extends Pick<
    MuiSelectProps,
    Exclude<keyof MuiSelectProps, "inputProps" | "onChange">
  > {
  selectType?: "default" | "success" | "critical" | "read-only";
  open?: boolean;
  size?: "small" | "large";
  multiSelect?: boolean;
  selectAll?: boolean;
  checkboxes?: boolean;
  inputProps?: NaviInputProps;
  tagProps?: TagProps;
  dropdownIcon?: React.ReactNode;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number;
  maxHeight?: number;
  value?: string[];
  renderValueAsTag?: boolean;
  onChange?: (data: string[]) => void;
  selectValue?: string[];
  dataTestId?: string;
  clearTooltipText: string;
  openTooltipText: string;
  hideClearButton?: boolean;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  moreInfo?: string;
  label?: string;
  width?: string | number | 'auto' | 'inherit';
}
export interface SelectItemCardProps {
  selectValue?: string[];
  title?: string;
  description?: string;
  trailingIcon?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  avatar?: React.ReactNode;
  multiSelect?: boolean;
  selected?: boolean;
  checkboxes?: boolean;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  _onchange?: (
    event: React.MouseEvent<{ name?: string; value?: unknown }>,
    child: string,
    checked?: boolean
  ) => void;
}

export interface SelectedChipsProps {
  size?: "large" | "small";
  value: string;
  label?: string;
  onDismiss?: (e: React.MouseEvent, value?: string) => void;
  tagProps?: TagProps;
  classes?: Object;
  className?: string;
  style?: Object;
}

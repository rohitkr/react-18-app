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
  value?: string;
  checked?: boolean;
  type?: "divider" | "select";
  divider?: boolean;
  groupHeading?: boolean;
  disabled?: boolean;
}

// export interface SelectProps extends MuiSelectProps {
export interface SelectProps
  extends Pick<
    MuiSelectProps,
    Exclude<keyof MuiSelectProps, "inputProps" | "onChange">
  > {
  open: boolean;
  size?: "small" | "large";
  // anchorEl?: HTMLElement | null;
  multiSelect?: boolean;
  selectAll?: boolean;
  checkboxes?: boolean;
  inputProps?: NaviInputProps;
  tagProps?: TagProps;
  dropdownIcon?: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  value?: string[];
  renderValueAs?: "tag" | "default";
  onChange?: (data: string[]) => void;
  selectValue?: string[];
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
  onDismiss?: (e: React.MouseEvent, value?: string) => void;
  tagProps?: TagProps;
  classes?: Object;
  className?: string;
  style?: Object;
}

import { MenuProps as MuiMenuProps } from "@material-ui/core/Menu";
import { SelectProps as MuiSelectProps } from "@material-ui/core/Select";
import React from "react";
import { NaviInputProps } from "../Input/Input.types";
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
  disabled?: boolean;
}

// export interface SelectProps extends MuiSelectProps {
export interface SelectProps extends Pick<MuiSelectProps, Exclude<keyof MuiSelectProps, "inputProps" | "onChange">> {
  open: boolean;
  size?: "small" | "large";
  // anchorEl?: HTMLElement | null;
  multiSelect?: boolean;
  selectAll?: boolean;
  checkboxes?: boolean;
  inputProps?: NaviInputProps;
  dropdownIcon?: React.ReactNode;
  value?: string[];
  onChange?: (
    data: string[]
  ) => void;
}
export interface SelectItemCardProps {
  selectValue: string[];
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

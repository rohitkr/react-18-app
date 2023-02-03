import { TabProps as MuiTabProps } from "@material-ui/core";

export interface TabProps extends MuiTabProps {
  size?: "large" | "small";
  intent?: "info" | "prime" | "mutedLight";
  labeltext?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  selectedValue?: string | number;
  dataTestId?: string;
}

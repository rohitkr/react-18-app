import { TabsProps as MuiTabsProps } from "@material-ui/core";
export interface TabsProps extends MuiTabsProps {
  size?: "large" | "small";
  intent?: "info" | "prime" | "mutedLight";
  dataTestId?: string;
}

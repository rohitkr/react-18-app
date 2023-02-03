import { SwitchProps as MuiSwitchProps, SwitchClassKey } from '@material-ui/core/Switch'

export interface SwitchProps extends Pick<MuiSwitchProps, Exclude<keyof MuiSwitchProps, "size">> {
  children?: any;
  size?: 'large' | 'small';
  label?: React.ReactNode | string;
  labelPlacement?: "end" | "start";
  checkIcon?: Boolean;
  "data-testid"?: string;
}

export interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

export interface Props extends SwitchProps {
  classes: Styles;
}

import { LinearProgressProps } from "@material-ui/core/LinearProgress";

export type Intent = "success" | "critical" | "warning" | "info";
export type Size = "small" | "large";

export interface ProgressBarProps extends LinearProgressProps {
  type?: "solid" | "step";
  size?: "small" | "large";
  label?: React.ReactNode;
  labelPosition?: "top" | "bottom";
  intent?: Intent;
  progressType?: "completion" | "loading";
  value?: number;
  maxValue?: number;
  percentageLabel?: boolean;
  stepLabel?: boolean;
  stepCount?: 2|3|4|5|6|7|8|9|10;
}

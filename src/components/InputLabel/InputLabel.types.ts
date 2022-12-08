import { TooltipPositionTypes } from "../Tooltip/Tooltip.types";
import { InputLabelProps as MuiInputLabelPropsProps } from "@material-ui/core/InputLabel";

// label, required, moreInfo, CharacterLimitText, tooltipPlacement, size
export interface NaviInputLabelProps extends MuiInputLabelPropsProps {
  "data-testid"?: string;
  size?: "large" | "small";
  label?: string;
  required?: boolean;
  moreInfo?: string;
  tooltipPlacement?: TooltipPositionTypes;
  characterLimitText: string;
}

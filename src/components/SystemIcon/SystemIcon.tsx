import React from "react";
import Box from "../Box/Box";
import { SystemIconProps } from "./SystemIcon.types";
import "./SystemIcon.scss";

const SystemIconComponent: React.FC<SystemIconProps> = ({
  size = "medium",
  transparent = false,
  intent = "muted-dark",
  disabled,
  "data-testid": dataTestId,
  ...props
}) => {
  return (
    <Box
      className={`navi-system-icon-container ${intent}`}
      onClick={props.onClick}
      data-testid={dataTestId}
      {...props}
    >
      <Box
        tabIndex={props.tabIndex || 1}
        className={`${size} navi-systemicon-flex ${intent} ${
          transparent && !disabled
            ? "navi-systemicon-transparent "
            : "navi-systemicon-default-bg"
        } ${disabled ? "navi-systemicon-disabled" : ""}`}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const SystemIcon = React.forwardRef<HTMLDivElement, SystemIconProps>(
  (props, ref) => {
    return <SystemIconComponent {...props} forwardedRef={ref} />;
  }
);
export default SystemIcon;

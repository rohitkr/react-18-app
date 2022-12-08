import * as React from "react";
import MuiTooltip from "@material-ui/core/Tooltip";
import { NaviTooltipProps } from "./Tooltip.types";
import {
  createTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import typography from "../../TokensOld/base-tokens/typography-token.json";
import baseTokens from "../../tokens/build/json/tokens.json";
import "./Tooltip.scss";
import { pxToRem } from "../../helpers/helpers";

const defaultMaxWidth = 30;
const typographyObj = typography.attributes;
let fontStyle = typographyObj["$text-label-medium"];
const getThemeObj = (size: string) => {
  return createTheme({
    typography: {
      fontFamily: fontStyle?.["font-family"],
      fontWeightLight: fontStyle?.["font-weight"],
      fontWeightRegular: fontStyle?.["font-weight"],
      fontWeightMedium: fontStyle?.["font-weight"],
    },
  });
};

const NaviTooltip = (props: NaviTooltipProps) => {
  const {
    position,
    title,
    showArrow = true,
    size = "relaxed",
    children,
    "data-testid": string,
    forwardedRef,
    maxWidth = "280",
    ...rest
  } = props;

  const getArrowStyle = () => {
    if (position.includes("bottom") || position.includes("top")) {
      return {
        "&:before": {
          borderTopLeftRadius: "1px",
          borderBottomRightRadius: "1px",
        },
      };
    } else {
      if (position.includes("left") || position.includes("right"))
        return {
          "&:before": {
            borderTopRightRadius: "1px",
            borderBottomLeftRadius: "1px",
          },
        };
    }
  };

  const tooltipStyles = {
    arrow: {
      fontSize: fontStyle?.["font-size"],
      color: baseTokens["color-secondary-1000"],
      ...getArrowStyle(),
    },
    tooltip: {
      color: "white",
      backgroundColor: baseTokens["color-secondary-1000"],
      padding:
        size === "relaxed"
          ? `${baseTokens["spacing-12"]} ${baseTokens["spacing-16"]}`
          : `${baseTokens["spacing-8"]} ${baseTokens["spacing-12"]}`,
      display: "flex",
      alignItems: "center",
      borderRadius: "4px",
      maxWidth: `${Math.min(pxToRem(Number(maxWidth)), defaultMaxWidth)}rem`,
      boxShadow: baseTokens["elevation-02"],
      ...fontStyle,
    },
    tooltipPlacementTop: {
      margin: "10px 0",
    },
    tooltipPlacementBottom: {
      margin: "10px 0",
    },
    tooltipPlacementLeft: {
      margin: "0 10px",
    },
    tooltipPlacementRight: {
      margin: "0 10px",
    },
  };

  const StyledTooltip = withStyles(tooltipStyles)(MuiTooltip);
  return (
    <div ref={forwardedRef}>
      <ThemeProvider theme={getThemeObj(size || "small")}>
        <StyledTooltip
          title={title}
          arrow={showArrow}
          placement={position}
          {...rest}
        >
          <div style={{ display: "flex", width: "fit-content" }}>
            {children}
          </div>
        </StyledTooltip>
      </ThemeProvider>
    </div>
  );
};

const Tooltip = React.forwardRef<HTMLDivElement, NaviTooltipProps>(
  (props, ref) => {
    return <NaviTooltip {...props} forwardedRef={ref} />;
  }
);

export default Tooltip;

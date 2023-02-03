import React from "react";
import Box from "../Box/Box";
import { DividerProps } from "./Divider.types";
import tokens from "../../tokens/build/json/tokens.json";
import "./Divider.scss";

const tokenObj: { [key: string]: any } = tokens; //@fix

const DividerComponent: React.FC<DividerProps> = (props) => {
  const {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    weight = "1",
    height = "inherit",
    width = "inherit",
    orientation = "horizontal",
    color = "muted",
    opacity,
    "data-testid": dataTestId,
    forwardedRef,
    ...restProps
  } = props;

  const dividerColor = React.useMemo(() => {
    switch (color) {
      case "light": {
        return {
          hexColor: tokenObj["divider-color-light"],
          opacity: tokenObj["divider-opacity-light"],
        };
      }
      case "muted": {
        return {
          hexColor: tokenObj["divider-color-muted"],
          opacity: tokenObj["divider-opacity-muted"],
        };
      }
      case "dark": {
        return {
          hexColor: tokenObj["divider-color-dark"],
          opacity: tokenObj["divider-opacity-dark"],
        };
      }
      default:
        return {
          hexColor: color,
          opacity: opacity || 1,
        };
    }
  }, [opacity, color]);

  const dividerContainerStyles = React.useMemo(() => {
    let finalStyles = {};
    if (padding) {
      finalStyles = { ...finalStyles, padding };
    }
    if (paddingTop) {
      finalStyles = { ...finalStyles, paddingTop };
    }
    if (paddingBottom) {
      finalStyles = { ...finalStyles, paddingBottom };
    }
    if (paddingLeft) {
      finalStyles = { ...finalStyles, paddingLeft };
    }
    if (paddingRight) {
      finalStyles = { ...finalStyles, paddingRight };
    }
    return finalStyles;
  }, [padding, paddingBottom, paddingLeft, paddingRight, paddingTop]);

  const dividerStyleObj = React.useMemo(() => {
    let dividerStyle = {};
    if (orientation === "horizontal") {
      dividerStyle = {
        ...dividerStyle,
        height:
          weight === "1"
            ? tokenObj["divider-weight-1-size"]
            : tokenObj["divider-weight-2-size"],
        width: "100%",
      };
    } else {
      dividerStyle = {
        ...dividerStyle,
        width:
          weight === "1"
            ? tokenObj["divider-weight-1-size"]
            : tokenObj["divider-weight-2-size"],
        height: "100%",
      };
    }
    return dividerStyle;
  }, [orientation, weight]);

  return (
    <Box
      className="navi-divider-container"
      style={{ ...dividerContainerStyles, ...dividerStyleObj }}
      data-testid={dataTestId}
      ref={forwardedRef}
      {...restProps}
    >
      <Box
        backgroundColor={dividerColor.hexColor}
        opacity={dividerColor.opacity}
        height={height}
        width={width}
      />
    </Box>
  );
};

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  return <DividerComponent {...props} forwardedRef={ref} />;
});

export default React.memo(Divider);

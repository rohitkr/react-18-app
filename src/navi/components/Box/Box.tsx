import React from "react";
import { BoxProps } from "./Box.types";
import "./Box.scss";

const BoxComponent: React.FC<BoxProps> = ({
  children,
  component = "div",
  m,
  mt,
  mb,
  mr,
  ml,
  p,
  pt,
  pb,
  pr,
  pl,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  backgroundColor,
  bgColor,
  style,
  forwardedRef,
  "data-value": dataValue,
  "data-testid": dataTestId,
  ...props
}) => {
  const paddings = React.useMemo(() => {
    let finalPaddings = {};
    if (padding || p) {
      finalPaddings = {
        ...finalPaddings,
        padding: padding || p,
      };
    }
    if (paddingTop || pt) {
      finalPaddings = {
        ...finalPaddings,
        paddingTop: paddingTop || pt,
      };
    }
    if (paddingBottom || pb) {
      finalPaddings = {
        ...finalPaddings,
        paddingBottom: paddingBottom || pb,
      };
    }
    if (paddingLeft || pl) {
      finalPaddings = {
        ...finalPaddings,
        paddingLeft: paddingLeft || pl,
      };
    }
    if (paddingRight || pr) {
      finalPaddings = {
        ...finalPaddings,
        paddingRight: paddingRight || pr,
      };
    }
    return finalPaddings;
  }, [
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    p,
    pt,
    pb,
    pl,
    pr,
  ]);
  const margins = React.useMemo(() => {
    let finalmargins = {};
    if (margin || m) {
      finalmargins = {
        ...finalmargins,
        margin: margin || m,
      };
    }
    if (marginTop || mt) {
      finalmargins = {
        ...finalmargins,
        marginTop: marginTop || mt,
      };
    }
    if (marginBottom || mb) {
      finalmargins = {
        ...finalmargins,
        marginBottom: marginBottom || mb,
      };
    }
    if (marginLeft || ml) {
      finalmargins = {
        ...finalmargins,
        marginLeft: marginLeft || ml,
      };
    }
    if (marginRight || mr) {
      finalmargins = {
        ...finalmargins,
        marginRight: marginRight || mr,
      };
    }
    return finalmargins;
  }, [
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    m,
    mt,
    mb,
    ml,
    mr,
  ]);

  const finalStyles = {
    ...props,
    backgroundColor: backgroundColor || bgColor,
    ...margins,
    ...paddings,
    ...style,
  };

  return component === "span" ? (
    <span
      ref={forwardedRef}
      {...props}
      style={{ ...finalStyles }}
      data-testid={dataTestId}
      data-value={dataValue}
    >
      {children}
    </span>
  ) : (
    <div
      ref={forwardedRef}
      {...props}
      style={{ ...finalStyles }}
      data-testid={dataTestId}
      data-value={dataValue}
    >
      {children}
    </div>
  );
};

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <BoxComponent {...props} forwardedRef={ref} />;
});

export default Box;

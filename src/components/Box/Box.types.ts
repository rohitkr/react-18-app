import { ForwardedRef } from "react";
export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement & HTMLSpanElement> {
  className?: string;
  "data-testid"?: string;
  component?: "div" | "span";
  children?: React.ReactNode;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
  backgroundColor?: string | "transparent" | "initial" | "inherit";
  bgColor?: string | "transparent" | "initial" | "inherit";
  border?: string;
  borderColor?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRadius?: string;
  margin?: string;
  m?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  color?: string;
  overflow?: "viible" | "hidden" | "scroll" | "auto";
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  maxWidth?: string;
  height?: string;
  width?: string;
  padding?: string;
  p?: string;
  paddingRight?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
  pr?: string;
  pl?: string;
  pt?: string;
  pb?: string;
  outline?: string;
  display?:
    | "inline"
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "list-item"
    | "run-in"
    | "table"
    | "table-caption"
    | "table-column-group"
    | "table-header-group"
    | "table-footer-group"
    | "table-row-group"
    | "table-cell"
    | "table-column"
    | "table-row"
    | "none"
    | "initial"
    | "inherit";
  flexBasis?: number | "auto" | "initial" | "inherit" | string;
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  flexFlow?: string;
  flexGrow?: number | "initial" | "inherit";
  flexShrink?: number | "initial" | "inherit";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  textOverflow?: "clip" | "ellipsis" | string | "initial" | "inherit";
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
  alignSelf?:
    | "auto"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  justifySelf?:
    | "auto"
    | "normal"
    | "stretch"
    | "start"
    | "end"
    | "center"
    | "left"
    | "right"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "baseline"
    | "first-baseline"
    | "last-baseline"
    | "safe-center"
    | "unsafe-center"
    | "inherit"
    | "initial"
    | "unset";
  letterSpacing?: "normal" | string | "initial" | "inherit";
  background?: string | "initial" | "inherit";
  backgroundAttachment?: "scroll" | "fixed" | "local" | "initial" | "inherit";
  lineHeight?: "normal" | number | string | "initial" | "inherit";

  backgroundClip?:
    | "border-box"
    | "padding-box"
    | "content-box"
    | "initial"
    | "inherit";
  boxShadow?: "none" | string | "inset" | "initial" | "inherit";
  boxSizing?: "content-box" | "border-box" | "initial" | "inherit";
  order?: number | "initial" | "inherit";
  content?:
    | "normal"
    | "none"
    | "counter"
    | "attr"
    | "string"
    | "open-quote"
    | "close-quote"
    | "no-open-quote"
    | "no-close-quote"
    | "url"
    | "initial"
    | "inherit";
  direction?: "ltr" | "rtl" | "initial" | "inherit";
  float?: "none" | "left" | "right" | "initial" | "inherit";
  fontStretch?:
    | " ultra-condensed"
    | "extra-condensed"
    | "condensed"
    | "semi-condensed"
    | "normal"
    | "semi-expanded"
    | "expanded"
    | "extra-expanded"
    | "ultra-expanded"
    | "initial"
    | "inherit";
  opacity?: number | "initial" | "inherit";
  outlineColor?: "invert" | string | "initial" | "inherit";
  outlineOffset?: number | "initial" | "inherit";
  outlineStyle?:
    | "none"
    | "hidden"
    | "dotted"
    | "dashed"
    | "solid"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
    | "initial"
    | "inherit";
  outlineWidth?: "medium" | "thin" | "thick" | number | "initial" | "inherit";
  overflowWrap?: "normal" | "anywhere" | "break-word" | "initial" | "inherit";
  overflowX?: "visible" | "hidden" | "scroll" | "auto" | "initial" | "inherit";
  overflowY?: "visible" | "hidden" | "scroll" | "auto" | "initial" | "inherit";
  position?:
    | "static"
    | "absolute"
    | "fixed"
    | "relative"
    | "sticky"
    | "initial"
    | "inherit";
  resize?: "none" | "both" | "horizontal" | "vertical" | "initial" | "inherit";
  right?: "auto" | string | "initial" | "inherit";
  top?: "auto" | string | "initial" | "inherit";
  left?: "auto" | string | "initial" | "inherit";
  bottom?: "auto" | string | "initial" | "inherit";
  scrollBehavior?: "auto" | "smooth" | "initial" | "inherit";
  visibility?: "visible" | "hidden" | "collapse" | "initial" | "inherit";
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap"
    | "initial"
    | "inherit";
  wordBreak?:
    | "normal"
    | "break-all"
    | "keep-all"
    | "break-word"
    | "initial"
    | "inherit";
  wordSpacing?: "normal" | string | "initial" | "inherit";
  wordWrap?: "normal" | "break-word" | "initial" | "inherit";
  zIndex?: "auto" | number | "initial" | "inherit";
  style?: React.CSSProperties;
}

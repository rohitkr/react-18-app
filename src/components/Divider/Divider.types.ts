import { ForwardedRef, HTMLAttributes } from 'react';
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  orientation: "vertical" | "horizontal";
  weight?: "1" | "2";
  width?: string;
  height?: string;
  color?: "light" | "muted" | "dark" | string;
  opacity?: number;
  "data-testid"?: string;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
}

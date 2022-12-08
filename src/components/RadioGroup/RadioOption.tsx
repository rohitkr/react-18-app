import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import FormControlLabel from "../FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import clsx from "clsx";
import { RadioOptionProps } from "./RadioGroup.types";
import tokens from "../../tokens/build/json/tokens.json";
import { hexToRgb } from "@material-ui/core/styles";

const getFocusColor = (focusColor: string) => {
  if (!/rgb/.test(focusColor)) {
    focusColor = hexToRgb(focusColor);
  }
  return focusColor
    .replace(/(\,\s+\d+)\)/, "$1, 0.4)")
    .replace(/rgb\(/, "rgba(");
};

const tokenObj: { [key: string]: string } = tokens;

const sizeMapObj: { [key: string]: string } = Object.freeze({
  standard: "1.25rem",
  small: "1rem",
});

const labelMarginMapObj: { [key: string]: { [key: string]: string } } =
  Object.freeze({
    standard: {
      start: `0 ${tokenObj["spacing-12"]} 0 0`,
      end: `0 0 0 ${tokenObj["spacing-12"]}`,
      top: `0 0 ${tokenObj["spacing-12"]} 0`,
      bottom: `${tokenObj["spacing-12"]} 0 0 0`,
    },
    small: {
      start: `0 ${tokenObj["spacing-8"]} 0 0`,
      end: `0 0 0 ${tokenObj["spacing-8"]}`,
      top: `0 0 ${tokenObj["spacing-8"]} 0`,
      bottom: `${tokenObj["spacing-8"]} 0 0 0`,
    },
  });

const RadioOption = ({
  label,
  value,
  size = "standard",
  labelPlacement = "end",
  disabled,
  justify,
  spacing,
  orientation,
  ...rest
}: RadioOptionProps) => {
  const formControlLabelStyle: any = (size: string, labelPlacement: string) =>
    createStyles({
      standard: {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["radio-label-font-size-standard"],
        lineHeight: tokenObj["radio-label-line-height-standard"],
        fontFamily: tokenObj["radio-label-font-family"],
        color: tokenObj["radio-color-label-default"],
        "& label": {
          margin: labelMarginMapObj[size][labelPlacement],
          fontSize: tokenObj["radio-label-font-size-standard"],
          lineHeight: tokenObj["radio-label-line-height-standard"],
          fontFamily: tokenObj["radio-label-font-family"],
          color: tokenObj["radio-color-label-default"],
        },
      },
      disabledStandard: {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["radio-label-font-size-standard"],
        lineHeight: tokenObj["radio-label-line-height-standard"],
        fontFamily: tokenObj["radio-label-font-family"],
        color: tokenObj["radio-color-label-disabled"],
      },
      small: {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["radio-label-font-size-small"],
        lineHeight: tokenObj["radio-label-line-height-small"],
        fontFamily: tokenObj["radio-label-font-family"],
        color: tokenObj["radio-color-label-default"],
        "& label": {
          margin: labelMarginMapObj[size][labelPlacement],
          fontSize: tokenObj["radio-label-font-size-small"],
          lineHeight: tokenObj["radio-label-line-height-small"],
          fontFamily: tokenObj["radio-label-font-family"],
          fontWeight: tokenObj["radio-label-font-weight"],
          color: tokenObj["radio-color-label-default"],
        },
      },
      disabledSmall: {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["radio-label-font-size-small"],
        lineHeight: tokenObj["radio-label-line-height-small"],
        fontFamily: tokenObj["radio-label-font-family"],
        color: tokenObj["radio-color-label-disabled"],
      },
    });

  const radioStyles = (size: string) =>
    makeStyles({
      root: {
        padding: "0px",
        boxSizing: "border-box",
        "&:hover": {
          backgroundColor: "transparent",
        },
        "& .Mui-checked": {
          backgroundColor: "transparent",
        },
      },
      colorSecondary: {
        "&:hover": {
          backgroundColor: "transparent",
        },
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
      icon: {
        boxSizing: "border-box",
        borderRadius: "50%",
        width: sizeMapObj[size],
        height: sizeMapObj[size],
        boxShadow: `inset 0 0 0 1px ${tokenObj["radio-color-border-unchecked-default"]}`,
        backgroundColor: "none",
        "$root.Mui-focusVisible &": {
          boxShadow: `0px 0px 0px 4px ${getFocusColor(
            tokenObj["radio-color-shadow-unchecked"]
          )}`,
        },
        "input:hover ~ &": {
          backgroundColor: "transparent",
          boxShadow: `inset 0 0 0 1px ${tokenObj["radio-color-border-unchecked-hover"]}`,
        },
        "input:disabled ~ &": {
          boxShadow: `inset 0 0 0 1px ${tokenObj["radio-color-border-unchecked-disabled"]}`,
        },
      },
      checkedIcon: {
        boxSizing: "border-box",
        backgroundColor: tokenObj["color-primitive-white"],
        display: "block",
        width: sizeMapObj[size],
        height: sizeMapObj[size],
        boxShadow: `inset 0 0 0 ${size === "standard" ? 6 : 4}px ${
          tokenObj["radio-color-border-checked-default"]
        }`,
        content: '""',
        "input:hover ~ &": {
          boxShadow: `inset 0 0 0 ${size === "standard" ? 6 : 4}px ${
            tokenObj["radio-color-border-checked-hover"]
          }`,
        },
        "$root.Mui-focusVisible &": {
          boxShadow:
            `inset 0 0 0 ${size === "standard" ? 6 : 4}px ${
              tokenObj["radio-color-border-checked-default"]
            },` +
            `0px 0px 0px 4px ${getFocusColor(
              tokenObj["radio-color-shadow-checked"]
            )}`,
        },
        "&:focus": {
          boxShadow: `0px 0px 0px 4px ${getFocusColor(
            tokenObj["radio-color-shadow-checked"]
          )}`,
          "& span": {
            boxShadow: `0px 0px 0px 4px ${getFocusColor(
              tokenObj["radio-color-shadow-checked"]
            )}`,
            outline: "none",
          },
        },
        "input:disabled ~ &": {
          boxShadow: `inset 0 0 0 ${size === "standard" ? 6 : 4}px ${
            tokenObj["radio-color-border-checked-disabled"]
          }`,
        },
      },
    });
  const classes = radioStyles(size)();
  let labelStyle = formControlLabelStyle(size, labelPlacement).standard;

  if (size === "standard") {
    labelStyle = disabled
      ? formControlLabelStyle(size, labelPlacement).disabledStandard
      : formControlLabelStyle(size, labelPlacement).standard;
  } else {
    labelStyle = disabled
      ? formControlLabelStyle(size, labelPlacement).disabledSmall
      : formControlLabelStyle(size, labelPlacement).small;
  }

  const radioLabel =
    typeof label === "string" ? (
      <Typography style={labelStyle}>{label}</Typography>
    ) : (
      label
    );

  return (
    <FormControlLabel
      control={
        <Radio
          className={classes.root}
          disableRipple
          checkedIcon={
            <span className={clsx(classes?.icon, classes.checkedIcon)} />
          }
          icon={<span className={classes.icon} />}
          {...rest}
        />
      }
      justify={justify}
      labelPlacement={labelPlacement}
      orientation={orientation}
      spacing={spacing}
      value={value}
      label={radioLabel}
    />
  );
};

export default RadioOption;

import React from "react";
import { CheckboxOptionProps } from "./Checkbox.types";
import MuiCheckbox from "@material-ui/core/Checkbox";
import tokens from "../../tokens/build/json/tokens.json";
import { createStyles, hexToRgb, makeStyles } from "@material-ui/core/styles";
import { UnCheckedIcon, CheckedIcon, IndeterminateIcon } from "./CheckboxIcon";
import "./Checkbox.scss";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "../FormControlLabel/FormControlLabel";

const tokenObj: { [key: string]: any } = tokens; //@fix

const getFocusColor = (focusColor: string) => {
  if (!/rgb/.test(focusColor)) {
    focusColor = hexToRgb(focusColor);
  }
  return focusColor
    .replace(/(\,\s+\d+)\)/, "$1, 0.4)")
    .replace(/rgb\(/, "rgba(");
};

const checkboxStyles = makeStyles({
  root: {
    padding: tokenObj["spacing-0"],
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
      "& span": {
        "& svg": {
          "& path": {
            stroke: tokenObj["checkbox-color-border-unchecked-hover"],
          },
        },
      },
    },
    "&:focus": {
      backgroundColor: "transparent",
      "& span": {
        boxShadow:
          "0px 0px 0px 4px " +
          getFocusColor(tokenObj["checkbox-color-shadow-unchecked"]),
        borderRadius: tokenObj["border-radius-radius-small"],
      },
    },
  },
  checked: {
    "&:hover": {
      backgroundColor: "transparent",
      "& span": {
        "& svg": {
          "& path:nth-child(1)": {
            stroke: "none",
            fill: tokenObj["checkbox-color-background-checked-hover"],
          },
          "& path:nth-child(2)": {
            stroke: "white",
          },
        },
      },
    },
    "&:focus": {
      backgroundColor: "transparent",
      "& span": {
        boxShadow:
          "0px 0px 0px 4px " +
          getFocusColor(tokenObj["checkbox-color-shadow-checked"]),
        borderRadius: tokenObj["border-radius-radius-small"],
      },
    },
  },
  indeterminate: {
    "&:hover": {
      "& span": {
        "& svg": {
          "& path:nth-child(1)": {
            stroke: "none",
            fill: tokenObj["checkbox-color-background-indeterminate-hover"],
          },
          "& path:nth-child(2)": {
            stroke: "white",
          },
        },
      },
    },
    "&:focus": {
      backgroundColor: "transparent",
      "& span": {
        boxShadow:
          "0px 0px 0px 4px " +
          getFocusColor(tokenObj["checkbox-color-shadow-checked"]),
        borderRadius: tokenObj["border-radius-radius-small"],
      },
    },
  },
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

const formControlLabelStyle: any = (size: string, labelPlacement: string) =>
  createStyles({
    standard: {
      margin: labelMarginMapObj[size][labelPlacement],
      fontSize: tokenObj["checkbox-label-font-size-standard"],
      lineHeight: tokenObj["checkbox-label-line-height-standard"],
      fontFamily: tokenObj["checkbox-label-font-family"],
      color: tokenObj["checkbox-color-label-default"],
      "& label": {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["checkbox-label-font-size-standard"],
        lineHeight: tokenObj["checkbox-label-line-height-standard"],
        fontFamily: tokenObj["checkbox-label-font-family"],
        color: tokenObj["checkbox-color-label-default"],
      },
    },
    disabledStandard: {
      margin: labelMarginMapObj[size][labelPlacement],
      fontSize: tokenObj["checkbox-label-font-size-standard"],
      lineHeight: tokenObj["checkbox-label-line-height-standard"],
      fontFamily: tokenObj["checkbox-label-font-family"],
      color: tokenObj["checkbox-color-label-disabled"],
    },
    small: {
      margin: labelMarginMapObj[size][labelPlacement],
      fontSize: tokenObj["checkbox-label-font-size-small"],
      lineHeight: tokenObj["checkbox-label-line-height-small"],
      fontFamily: tokenObj["checkbox-label-font-family"],
      color: tokenObj["checkbox-color-label-default"],
      "& label": {
        margin: labelMarginMapObj[size][labelPlacement],
        fontSize: tokenObj["checkbox-label-font-size-small"],
        lineHeight: tokenObj["checkbox-label-line-height-small"],
        fontFamily: tokenObj["checkbox-label-font-family"],
        fontWeight: tokenObj["checkbox-label-font-weight"],
        color: tokenObj["checkbox-color-label-default"],
      },
    },
    disabledSmall: {
      margin: labelMarginMapObj[size][labelPlacement],
      fontSize: tokenObj["checkbox-label-font-size-small"],
      lineHeight: tokenObj["checkbox-label-line-height-small"],
      fontFamily: tokenObj["checkbox-label-font-family"],
      color: tokenObj["checkbox-color-label-disabled"],
    },
  });

const Checkbox = ({
  label,
  value,
  size = "standard",
  labelPlacement = "end",
  disabled,
  justify,
  spacing,
  orientation = "vertical",
  ...rest
}: CheckboxOptionProps) => {
  const classes = checkboxStyles();

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

  const checkboxLabel =
    typeof label === "string" ? (
      <Typography style={labelStyle}>{label}</Typography>
    ) : (
      label
    );
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          classes={classes}
          disableRipple
          disabled={disabled}
          disableTouchRipple
          disableFocusRipple
          {...rest}
          icon={<UnCheckedIcon size={size} disabled={disabled} />}
          checkedIcon={<CheckedIcon size={size} disabled={disabled} />}
          indeterminateIcon={
            <IndeterminateIcon size={size} disabled={disabled} />
          }
        />
      }
      justify={justify}
      labelPlacement={labelPlacement}
      orientation={orientation}
      spacing={spacing}
      value={value}
      label={checkboxLabel}
    />
  );
};

export default Checkbox;

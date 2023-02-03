import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControlLabelProps } from "./FormControlLabel.types";
import tokens from "../../tokens/build/json/tokens.json";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";

const tokenObj: { [key: string]: string } = tokens;

const optionsSpacingMapObj: { [key: string]: { [key: string]: string } } =
  Object.freeze({
    top: {
      sm: `${tokenObj["spacing-8"]} 0 0 0`,
      md: `${tokenObj["spacing-12"]} 0 0 0`,
      lg: `${tokenObj["spacing-16"]} 0 0 0`,
    },
    right: {
      sm: `0 ${tokenObj["spacing-8"]} 0 0`,
      md: `0 ${tokenObj["spacing-12"]} 0 0`,
      lg: `0 ${tokenObj["spacing-16"]} 0 0`,
    },
    left: {
      sm: `0 0 0 ${tokenObj["spacing-8"]}`,
      md: `0 0 0 ${tokenObj["spacing-12"]}`,
      lg: `0 0 0 ${tokenObj["spacing-16"]}`,
    },
  });

const WithStyleLabel = ({
  control,
  label,
  orientation,
  labelPlacement,
  justify = false,
  spacing = "md",
  ...rest
}: FormControlLabelProps) => {
  const WithStyle = withStyles((theme: Theme) => {
    let marginValue = "";
    if (orientation === "vertical") {
      marginValue = optionsSpacingMapObj["top"][spacing];
    } else if (labelPlacement === "start" && orientation === "horizontal") {
      marginValue = optionsSpacingMapObj["right"][spacing];
    } else {
      marginValue = optionsSpacingMapObj["left"][spacing];
    }

    let justifyValue = justify ? "space-between" : "";

    return createStyles({
      root: {
        margin: marginValue,
        padding: "0",
        justifyContent: justifyValue,
        "&:first-of-type": {
          margin: "0",
        },
      },
    });
  })(({ classes }: FormControlLabelProps) => {
    return (
      <FormControlLabel
        control={control}
        label={label}
        classes={{
          root: classes?.root,
        }}
        labelPlacement={labelPlacement}
        {...rest}
      />
    );
  });

  return <WithStyle label={undefined} control={control} />;
};

export default WithStyleLabel;

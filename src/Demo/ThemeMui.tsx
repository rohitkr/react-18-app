import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import capitalize from "lodash/capitalize";

import MuiButton, {
  ButtonProps as MuiButtonProps
} from "@material-ui/core/Button";
import tokenObj from '../navi/tokens/build/json/tokens.json';

// variant?: 'primary' | 'secondary' | 'tertiary' | 'selected';
// intent?: 'muted' | 'prime' | 'info' | 'critical' | 'warning' | 'success' | 'mutedLight';

export type ColorTypes = 'success' | 'muted' | 'warning' | 'info' | 'prime' | 'critical' | 'mutedLight';

type ButtonProps = { color?: ColorTypes } & Omit<MuiButtonProps, "color">;

const useStyles = makeStyles<Theme>(theme =>
  createStyles({
    primary: {
      main: tokenObj['color-primary-400'],      
    },
    secondary: {
      main: tokenObj['color-secondary-800'],
    },
    success: {
      main: tokenObj['color-success-400'],
    },
    info: {
      main: tokenObj['color-info-400'],
    },
    warning: {
      main: tokenObj['color-warning-300'],
    },
    error: {
      main: tokenObj['color-critical-400'],
    },

    outlinedSuccess: {
      borderColor: theme.palette.success.main,
      color: theme.palette.success.main
    },
    outlinedMuted: {
      borderColor: "blue",
      color: "blue"
    },
    outlinedWarning: {
      borderColor: theme.palette.warning.main,
      color: theme.palette.warning.main
    },
    outlinedInfo: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    outlinedPrime: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    outlinedCritical: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    outlinedMutedLight: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },

    textSuccess: {
      borderColor: theme.palette.success.main,
      color: theme.palette.success.main,
    },
    textMuted: {
      borderColor: "blue",
      color: "blue",
      "&:hover": {
        backgroundColor: "#ffff00"
      }
    },
    textWarning: {
      borderColor: theme.palette.warning.main,
      color: theme.palette.warning.main
    },
    textInfo: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    textPrime: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    textCritical: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },
    textMutedLight: {
      borderColor: theme.palette.info.main,
      color: theme.palette.info.main
    },


    containedSuccess: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.success.dark
      }
    },
    containedMuted: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark
      }
    },
    containedWarning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.warning.dark
      }
    },
    containedInfo: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.info.dark
      }
    },
    containedPrime: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.info.dark
      }
    },
    containedCritical: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.info.dark
      }
    },
    containedMutedLight: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.info.dark
      }
    },
  })
);

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => {
  const classes = useStyles();
  const className = classes?.[`${props.variant}${capitalize(color)}`];
  const colorProp =
    ["default", "inherit", "primary", "secondary"].indexOf(color || "") > -1
      ? (color as "default" | "inherit" | "primary" | "secondary")
      : undefined;
  const variantProp =
    ["contained", "", ""].indexOf(color || "") > -1
      ? (color as "default" | "inherit" | "primary" | "secondary")
      : undefined;

  return (
    <MuiButton {...props} color={colorProp} className={className}>
      {children}
    </MuiButton>
  );
};

Button.displayName = "Button";

export default Button;
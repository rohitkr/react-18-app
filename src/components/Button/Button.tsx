// Generated with src/utility/generate/generate-component.js
import * as React from "react";
import { ButtonProps, MUIButtonProps } from "./Button.types";
import { createTheme, ThemeProvider, hexToRgb, withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import btnColor from '../../Tokens/Button/button-token.json';
import btnColor from '../../tokens/build/json/tokens.json';
import typography from '../../TokensOld/base-tokens/typography-token.json';
import "./Button.scss";

const colorObj = btnColor;
const typographyObj = typography.attributes;
const getFocusColor = (focusColor: string) => {
  if (!/rgb/.test(focusColor)) {
    focusColor = hexToRgb(focusColor);
  }
  return focusColor.replace(/(\,\s+\d+)\)/, '$1, 0.4)').replace(/rgb\(/, 'rgba(');
}
const captilizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
const hexToRgba = (color: string, alpha: string) => {
  return hexToRgb(color).replace(/\)/, `, ${alpha} )`);
}
interface PaletteTypes {
  primary: any;
  secondary: any;
  tertiary: any;
}
interface Palette {
  muted: PaletteTypes;
  mutedLight: PaletteTypes;
  prime: PaletteTypes;
  critical: PaletteTypes;
  info: PaletteTypes;
  success: PaletteTypes;
  warning: PaletteTypes;
}

const palette: Palette = {
  muted: {
    primary: {
      shadow: colorObj["button-color-muted-primary-shadow"],
      text: colorObj["button-color-muted-primary-label"],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-muted-primary-background'],
      backgroundHover: colorObj['button-color-muted-primary-background-hover'],
      backgroundPressed: colorObj['button-color-muted-primary-background-pressed'],
      disabledText: colorObj['button-color-muted-primary-disabled-label'],
      disabled: colorObj['button-color-muted-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-muted-secondary-shadow'],
      text: colorObj['button-color-muted-secondary-label'],
      textHover: colorObj['button-color-muted-secondary-label-hover'],
      textPressed: colorObj['button-color-muted-secondary-label-pressed'],
      border: colorObj['button-color-muted-secondary-border'],
      borderHover: colorObj['button-color-muted-secondary-border-hover'],
      borderPressed: colorObj['button-color-muted-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-muted-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-muted-secondary-background-pressed'],
      disabledText: colorObj['button-color-muted-secondary-disabled-label'],
      disabled: colorObj['button-color-muted-secondary-disabled-border'],
    },
    tertiary: {
      shadow: colorObj['button-color-muted-tertiary-shadow'],
      text: colorObj['button-color-muted-tertiary-label'],
      textHover: colorObj['button-color-muted-tertiary-label-hover'],
      textPressed: colorObj['button-color-muted-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-muted-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-muted-tertiary-background-pressed'],
      disabledText: colorObj['button-color-muted-tertiary-disabled-label']
    },
  },
  mutedLight: {
    primary: {
      shadow: colorObj["button-color-muted-light-primary-shadow"],
      text: colorObj["button-color-muted-light-primary-label"],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-muted-light-primary-background'],
      backgroundHover: colorObj['button-color-muted-light-primary-background-hover'],
      backgroundPressed: colorObj['button-color-muted-light-primary-background-pressed'],
      disabledText: colorObj['button-color-muted-light-primary-disabled-label'],
      disabled: colorObj['button-color-muted-light-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-muted-light-secondary-shadow'],
      text: colorObj['button-color-muted-light-secondary-label'],
      textHover: colorObj['button-color-muted-light-secondary-label-hover'],
      textPressed: colorObj['button-color-muted-light-secondary-label-pressed'],
      border: colorObj['button-color-muted-light-secondary-border'],
      borderHover: colorObj['button-color-muted-light-secondary-border-hover'],
      borderPressed: colorObj['button-color-muted-light-secondary-border-pressed'],
      background: "",
      backgroundHover: hexToRgba(colorObj['button-color-muted-light-secondary-background-hover'],
        colorObj['button-color-muted-light-secondary-background-hover-opacity']),
      backgroundPressed: hexToRgba(colorObj['button-color-muted-light-secondary-background-pressed'],
        colorObj['button-color-muted-light-secondary-background-pressed-opacity']),
      disabledText: colorObj['button-color-muted-light-secondary-disabled-label'],
      disabled: colorObj['button-color-muted-light-secondary-disabled-border'],
    },
    tertiary: {
      shadow: colorObj['button-color-muted-light-tertiary-shadow'],
      text: colorObj['button-color-muted-light-tertiary-label'],
      textHover: colorObj['button-color-muted-light-tertiary-label-hover'],
      textPressed: colorObj['button-color-muted-light-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: hexToRgba(colorObj['button-color-muted-light-tertiary-background-hover'],
        colorObj['button-color-muted-light-tertiary-background-hover-opacity']),
      backgroundPressed: hexToRgba(colorObj['button-color-muted-light-tertiary-background-pressed'],
        colorObj['button-color-muted-light-tertiary-background-pressed-opacity']),
      disabledText: colorObj['button-color-muted-light-tertiary-disabled-label']
    },
  },
  prime: {
    primary: {
      shadow: colorObj['button-color-prime-primary-shadow'],
      text: colorObj['button-color-prime-primary-label'],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-prime-primary-background'],
      backgroundHover: colorObj['button-color-prime-primary-background-hover'],
      backgroundPressed: colorObj['button-color-prime-primary-background-pressed'],
      disabledText: colorObj['button-color-prime-primary-disabled-label'],
      disabled: colorObj['button-color-prime-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-prime-secondary-shadow'],
      text: colorObj['button-color-prime-secondary-label'],
      textHover: colorObj['button-color-prime-secondary-label-hover'],
      textPressed: colorObj['button-color-prime-secondary-label-pressed'],
      border: colorObj['button-color-prime-secondary-border'],
      borderHover: colorObj['button-color-prime-secondary-border-hover'],
      borderPressed: colorObj['button-color-prime-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-prime-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-prime-secondary-background-pressed'],
      disabled: colorObj['button-color-prime-secondary-disabled-border'],
      disabledText: colorObj['button-color-prime-secondary-disabled-label']
    },
    tertiary: {
      shadow: colorObj['button-color-prime-tertiary-shadow'],
      text: colorObj['button-color-prime-tertiary-label'],
      textHover: colorObj['button-color-prime-tertiary-label-hover'],
      textPressed: colorObj['button-color-prime-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-prime-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-prime-tertiary-background-pressed'],
      disabledText: colorObj['button-color-prime-tertiary-disabled-label']
    },
  },
  critical: {
    primary: {
      shadow: colorObj['button-color-critical-primary-shadow'],
      text: colorObj['button-color-critical-primary-label'],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-critical-primary-background'],
      backgroundHover: colorObj['button-color-critical-primary-background-hover'],
      backgroundPressed: colorObj['button-color-critical-primary-background-pressed'],
      disabledText: colorObj['button-color-critical-primary-disabled-label'],
      disabled: colorObj['button-color-critical-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-critical-secondary-shadow'],
      text: colorObj['button-color-critical-secondary-label'],
      textHover: colorObj['button-color-critical-secondary-label-hover'],
      textPressed: colorObj['button-color-critical-secondary-label-pressed'],
      border: colorObj['button-color-critical-secondary-border'],
      borderHover: colorObj['button-color-critical-secondary-border-hover'],
      borderPressed: colorObj['button-color-critical-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-critical-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-critical-secondary-background-pressed'],
      disabled: colorObj['button-color-critical-secondary-disabled-border'],
      disabledText: colorObj['button-color-critical-secondary-disabled-label']
    },
    tertiary: {
      shadow: colorObj['button-color-critical-tertiary-shadow'],
      text: colorObj['button-color-critical-tertiary-label'],
      textHover: colorObj['button-color-critical-tertiary-label-hover'],
      textPressed: colorObj['button-color-critical-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-critical-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-critical-tertiary-background-pressed'],
      disabledText: colorObj['button-color-critical-tertiary-disabled-label']
    },
  },
  info: {
    primary: {
      shadow: colorObj['button-color-info-primary-shadow'],
      text: colorObj['button-color-info-primary-label'],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-info-primary-background'],
      backgroundHover: colorObj['button-color-info-primary-background-hover'],
      backgroundPressed: colorObj['button-color-info-primary-background-pressed'],
      disabledText: colorObj['button-color-info-primary-disabled-label'],
      disabled: colorObj['button-color-info-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-info-secondary-shadow'],
      text: colorObj['button-color-info-secondary-label'],
      textHover: colorObj['button-color-info-secondary-label-hover'],
      textPressed: colorObj['button-color-info-secondary-label-pressed'],
      border: colorObj['button-color-info-secondary-border'],
      borderHover: colorObj['button-color-info-secondary-border-hover'],
      borderPressed: colorObj['button-color-info-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-info-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-info-secondary-background-pressed'],
      disabled: colorObj['button-color-info-secondary-disabled-border'],
      disabledText: colorObj['button-color-info-secondary-disabled-label']
    },
    tertiary: {
      shadow: colorObj['button-color-info-tertiary-shadow'],
      text: colorObj['button-color-info-tertiary-label'],
      textHover: colorObj['button-color-info-tertiary-label-hover'],
      textPressed: colorObj['button-color-info-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-info-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-info-tertiary-background-pressed'],
      disabledText: colorObj['button-color-info-tertiary-disabled-label']
    },
  },
  success: {
    primary: {
      shadow: colorObj['button-color-success-primary-shadow'],
      text: colorObj['button-color-success-primary-label'],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-success-primary-background'],
      backgroundHover: colorObj['button-color-success-primary-background-hover'],
      backgroundPressed: colorObj['button-color-success-primary-background-pressed'],
      disabledText: colorObj['button-color-success-primary-disabled-label'],
      disabled: colorObj['button-color-success-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-success-secondary-shadow'],
      text: colorObj['button-color-success-secondary-label'],
      textHover: colorObj['button-color-success-secondary-label-hover'],
      textPressed: colorObj['button-color-success-secondary-label-pressed'],
      border: colorObj['button-color-success-secondary-border'],
      borderHover: colorObj['button-color-success-secondary-border-hover'],
      borderPressed: colorObj['button-color-success-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-success-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-success-secondary-background-pressed'],
      disabled: colorObj['button-color-success-secondary-disabled-border'],
      disabledText: colorObj['button-color-success-secondary-disabled-label']
    },
    tertiary: {
      shadow: colorObj['button-color-success-tertiary-shadow'],
      text: colorObj['button-color-success-tertiary-label'],
      textHover: colorObj['button-color-success-tertiary-label-hover'],
      textPressed: colorObj['button-color-success-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-success-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-success-tertiary-background-pressed'],
      disabledText: colorObj['button-color-success-tertiary-disabled-label']
    },
  },
  warning: {
    primary: {
      shadow: colorObj['button-color-warning-primary-shadow'],
      text: colorObj['button-color-warning-primary-label'],
      textHover: "",
      textPressed: "",
      border: "",
      borderHover: "",
      borderPressed: "",
      background: colorObj['button-color-warning-primary-background'],
      backgroundHover: colorObj['button-color-warning-primary-background-hover'],
      backgroundPressed: colorObj['button-color-warning-primary-background-pressed'],
      disabledText: colorObj['button-color-warning-primary-disabled-label'],
      disabled: colorObj['button-color-warning-primary-disabled-background'],
    },
    secondary: {
      shadow: colorObj['button-color-warning-secondary-shadow'],
      text: colorObj['button-color-warning-secondary-label'],
      textHover: colorObj['button-color-warning-secondary-label-hover'],
      textPressed: colorObj['button-color-warning-secondary-label-pressed'],
      border: colorObj['button-color-warning-secondary-border'],
      borderHover: colorObj['button-color-warning-secondary-border-hover'],
      borderPressed: colorObj['button-color-warning-secondary-border-pressed'],
      background: "",
      backgroundHover: colorObj['button-color-warning-secondary-background-hover'],
      backgroundPressed: colorObj['button-color-warning-secondary-background-pressed'],
      disabled: colorObj['button-color-warning-secondary-disabled-border'],
      disabledText: colorObj['button-color-warning-secondary-disabled-label']
    },
    tertiary: {
      shadow: colorObj['button-color-warning-tertiary-shadow'],
      text: colorObj['button-color-warning-tertiary-label'],
      textHover: colorObj['button-color-warning-tertiary-label-hover'],
      textPressed: colorObj['button-color-warning-tertiary-label-pressed'],
      border: "",
      borderHover: "",
      borderPressed: "",
      background: "",
      backgroundHover: colorObj['button-color-warning-tertiary-background-hover'],
      backgroundPressed: colorObj['button-color-warning-tertiary-background-pressed'],
      disabledText: colorObj['button-color-warning-tertiary-disabled-label']
    },
  },
};

const reducePadding = (padding: string, reduceBy = 1) => {
  return padding.split(' ').map(v => {
    let padding = Math.max(Number(v.replace(/px/, '')) - reduceBy, 0);
    return `${padding}px `;
  }).join('');
}

// Defining custom button colors using withStyles.
const getStyles = (
  size: string,
  padding: string,
  fontSize: string,
  lineHeight: string,
  borderRadius: string,
  buttonType: string) => () => {
    var resultObj: any = {};
    let keys: keyof Palette;

    for (keys in palette) {
      resultObj['primary' + captilizeFirstLetter(keys)] = {
        color: palette[keys].primary.text,
        backgroundColor: palette[keys].primary.background,
        boxShadow: "none",
        fontSize: fontSize,
        lineHeight: lineHeight,
        padding: padding,
        borderRadius: borderRadius,
        "& svg": {
          width: size === 'large' ? "20px" : "16px",
          height: size === 'large' ? "20px" : "16px",
        },
        "&:hover": {
          backgroundColor: palette[keys].primary.backgroundHover,
          boxShadow: "none",
          "@media (hover: none)": {
            // backgroundColor: palette[keys].primary.light
          }
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 4px " + getFocusColor(palette[keys].primary.shadow),
        },
        '&:active': {
          backgroundColor: palette[keys].primary.backgroundPressed,
        },
        "&:disabled": {
          color: palette[keys].primary.disabledText,
          backgroundColor: palette[keys].primary.disabled,
        }
      }
      resultObj['secondary' + captilizeFirstLetter(keys)] = {
        color: palette[keys].secondary.text,
        border: `1px solid ${palette[keys].secondary.border}`,
        fontSize: fontSize,
        lineHeight: lineHeight,
        padding: reducePadding(padding, 1), // 12px 16px
        boxSizing: "border-box",
        borderRadius: borderRadius,
        "& svg": {
          width: size === 'large' ? "20px" : "16px",
          height: size === 'large' ? "20px" : "16px",
        },
        "&:hover": {
          boxShadow: "none",
          border: `1px solid ${palette[keys].secondary.borderHover}`,
          color: palette[keys].secondary.textHover,
          backgroundColor: palette[keys].secondary.backgroundHover,
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 4px " + getFocusColor(palette[keys].secondary.shadow),
        },
        '&:active': {
          border: `1px solid ${palette[keys].secondary.borderPressed}`,
          backgroundColor: palette[keys].secondary.backgroundPressed,
        },
        "&:disabled": {
          color: palette[keys].secondary.disabledText,
          border: `1px solid ${palette[keys].secondary.disabled}`,
        }
      };

      resultObj['tertiary' + captilizeFirstLetter(keys)] = {
        color: palette[keys].tertiary.text,
        fontSize: fontSize,
        lineHeight: lineHeight,
        padding: padding,
        borderRadius: borderRadius,
        "& svg": {
          width: size === 'large' ? "20px" : "16px",
          height: size === 'large' ? "20px" : "16px",
        },
        "&:hover": {
          boxShadow: "none",
          // backgroundColor: buttonType === 'icon' ? palette[keys].tertiary.backgroundHover : "rgba(255,255,255,0)",
          backgroundColor: palette[keys].tertiary.backgroundHover,
          color: palette[keys].tertiary.textHover,
        },
        '&:focus': {
          boxShadow: "0px 0px 0px 4px " + getFocusColor(palette[keys].tertiary.shadow),
        },
        "&:disabled": {
          color: palette[keys].tertiary.disabledText,
        }
      }
    }

    return resultObj;
  };

const getThemeObj = (size: string) => {
  let fontStyle;
  if (size === "large") {
    fontStyle = typographyObj['$text-button-large'];
  } else if (size == "small") {
    fontStyle = typographyObj['$text-button-small'];
  }
  return createTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true
      }
    },

    typography: {
      button: {
        lineHeight: fontStyle?.['line-height'],
        fontSize: fontStyle?.['font-size'],
        // '@media (min-width:600px)': {
        //   fontSize: '1.5rem',
        // },
        textTransform: "none"
      },
      "fontFamily": fontStyle?.['font-family'],
      "fontWeightLight": fontStyle?.['font-weight'],
      "fontWeightRegular": fontStyle?.['font-weight'],
      "fontWeightMedium": fontStyle?.['font-weight'],
    },
  });
}

const Button = ({
  buttonType = 'button',
  variant = 'primary',
  intent = 'prime',
  size = 'large',
  rounded = true,
  color,
  leadingIcon,
  trailingIcon,
  style,
  ...attrs
}: ButtonProps) => {
  let buttonProps: MUIButtonProps = {};
  buttonProps.variant = 'contained';
  if (variant === 'primary') {
    buttonProps.variant = 'contained';
  } else if (variant === 'secondary') {
    buttonProps.variant = 'outlined';
  } else if (variant === 'tertiary') {
    buttonProps.variant = 'text';
  }

  let borderRadius = '4px';
  if (buttonType === 'icon' && rounded === true) {
    borderRadius = '50%';
  }
  buttonProps.startIcon = leadingIcon;
  buttonProps.endIcon = trailingIcon;
  let padding = '10px 16px';
  let fontSize = typographyObj["$text-button-large"]["font-size"];
  let lineHeight = typographyObj["$text-button-large"]["line-height"];
  if (size === 'large') {
    padding = buttonType === 'icon' ? '12px' : '12px 16px';
    fontSize = typographyObj["$text-button-large"]["font-size"];
    lineHeight = typographyObj["$text-button-large"]["line-height"];
  } else {
    padding = buttonType === 'icon' ? '8px' : '8px 12px';
    fontSize = typographyObj["$text-button-small"]["font-size"];
    lineHeight = typographyObj["$text-button-small"]["line-height"];
  }

  const StyledButton = withStyles(getStyles(size, padding, fontSize, lineHeight, borderRadius, buttonType))(({ classes }: ButtonProps) => {
    let className = classes?.primaryDefault;

    if (variant && intent) {
      className = classes[variant + captilizeFirstLetter(intent)];
    }

    return (
      <ThemeProvider theme={getThemeObj(size || 'small')}>
        {buttonType === 'icon' ? (
          <IconButton {...attrs} className={`${className} ${attrs.className}`} style={{ ...style }}>
            {attrs.children}
          </IconButton>
        ) : (
          <MuiButton {...attrs} className={`${className} ${attrs.className}`} style={{ ...style }} {...buttonProps} size={size}>
            {attrs.children}
          </MuiButton>
        )}
      </ThemeProvider>
    );
  });

  return <StyledButton></StyledButton>
}

export default Button;

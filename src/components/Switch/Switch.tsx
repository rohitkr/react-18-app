import React from "react";
import { SwitchProps, Props } from "./Switch.types";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import MuiSwitch from "@material-ui/core/Switch";
import tokenObj from "../../tokens/build/json/tokens.json";
import Typography from "@material-ui/core/Typography";
import WithStyleLabel from "../FormControlLabel/FormControlLabel";
import "./Switch.scss";

const typographyStyle: any = (labelPlacement: string, disabled: boolean) => {
  let styleObj = {
    large: {
      fontSize: tokenObj["text-body-03-font-size"],
      fontFamily: tokenObj["text-body-03-font-family"],
      "& label": {
        fontSize: tokenObj["text-body-03-font-size"],
        fontFamily: tokenObj["text-body-03-font-family"],
      },
      color: disabled
        ? tokenObj["color-secondary-500"]
        : tokenObj["color-secondary-1000"],
      paddingRight: "0",
      paddingLeft: "0",
    },
    small: {
      fontSize: tokenObj["text-button-small-font-size"],
      fontFamily: tokenObj["text-button-small-font-family"],
      "& label": {
        fontSize: tokenObj["text-button-small-font-size"],
        fontFamily: tokenObj["text-button-small-font-family"],
      },
      color: disabled
        ? tokenObj["color-secondary-500"]
        : tokenObj["color-secondary-1000"],
      paddingRight: "0",
      paddingLeft: "0",
    },
  };
  if (labelPlacement === "end") {
    styleObj.large.paddingLeft = tokenObj["spacing-12"];
    styleObj.small.paddingLeft = tokenObj["spacing-8"];
  } else {
    styleObj.large.paddingRight = tokenObj["spacing-12"];
    styleObj.small.paddingRight = tokenObj["spacing-8"];
  }

  return createStyles(styleObj);
};

const CheckIcon = (isLarge: Boolean) => (
  <svg
    width={isLarge ? 16 : 12}
    height={isLarge ? 16 : 12}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3.37593 7.57577C3.61025 7.34145 3.99014 7.34145 4.22446 7.57577L6.77728 10.1286L11.7542 4.59865C11.9759 4.35234 12.3553 4.33238 12.6016 4.55405C12.8479 4.77573 12.8678 5.1551 12.6462 5.40141L7.24617 11.4014C7.01621 11.6569 6.61901 11.6674 6.37593 11.4243L3.37593 8.42429C3.14162 8.18998 3.14162 7.81008 3.37593 7.57577Z"
      fill="white"
    />
  </svg>
);

const getRootElement = ($ele: any) => {
  let switchRoot = null;
  while ($ele.tagName !== "BODY") {
    if ($ele.classList.contains("MuiSwitch-root")) {
      switchRoot = $ele;
    }
    $ele = $ele.parentElement;
  }
  return switchRoot;
};

let NaviSwitch = ({
  size = "large",
  checkIcon = false,
  ...swProps
}: SwitchProps) => {
  const isLarge = size === "large";
  const isDisabled = !!swProps.disabled;
  const isChecked = !!swProps.checked;
  let switchBGColor = tokenObj["color-secondary-400"];
  if (isDisabled) {
    switchBGColor = isChecked
      ? tokenObj["color-secondary-300"]
      : tokenObj["color-secondary-200"];
  }
  if (checkIcon) {
    swProps.checkedIcon = CheckIcon(isLarge);
  }

  const WithStyleSwitch = withStyles((theme: Theme) => {
    return createStyles({
      root: {
        width: isLarge
          ? tokenObj["switch-type-root-width-large"]
          : tokenObj["switch-type-root-width-small"],
        height: isLarge
          ? tokenObj["switch-type-root-height-large"]
          : tokenObj["switch-type-root-height-small"],
        padding: tokenObj["switch-type-root-padding"],
        margin: "0",
        borderRadius: tokenObj["switch-type-root-border-radius"],
        backgroundColor: switchBGColor,
      },
      switchBase: {
        margin: tokenObj["switch-type-base-margin"],
        "&$disabled": {
          border: tokenObj["switch-type-base-disabled-border"],
          color: tokenObj["color-secondary-0"],
          width: isLarge
            ? tokenObj["switch-type-base-disabled-width-large"]
            : tokenObj["switch-type-base-disabled-width-small"],
          height: isLarge
            ? tokenObj["switch-type-base-disabled-height-large"]
            : tokenObj["switch-type-base-disabled-height-small"],
          boxShadow: "none",
        },
        "&$disabled + $track": {
          backgroundColor: tokenObj["color-secondary-200"],
        },
        padding: 1,
        "&$checked": {
          transform: `translateX(${isLarge ? 0.875 : 0.625}rem)`,
          color: theme.palette.common.white,
          "& + $track": {
            backgroundColor: isDisabled
              ? switchBGColor
              : tokenObj["color-info-400"],
            opacity: 1,
            border: "none",
          },
          "&:hover": {
            "& + $track": {
              backgroundColor: tokenObj["color-info-500"],
            },
          },
        },
        "&:hover": {
          "& + $track": {
            backgroundColor: tokenObj["color-secondary-500"],
          },
        },
      },
      thumb: {
        width: isLarge
          ? tokenObj["switch-type-thumb-width-large"]
          : tokenObj["switch-type-thumb-width-small"],
        height: isLarge
          ? tokenObj["switch-type-thumb-height-large"]
          : tokenObj["switch-type-thumb-height-small"],
        boxShadow: tokenObj["switch-type-box-shadow"],
      },
      track: {
        backgroundColor: tokenObj["color-secondary-400"],
        opacity: 1,
        transition: theme.transitions.create(["background-color", "border"]),
      },
      disabled: {},
      checked: {},
    });
  })(({ classes }: Props) => {
    return (
      <MuiSwitch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
          disabled: classes.disabled,
        }}
        {...swProps}
      />
    );
  });

  return <WithStyleSwitch />;
};

const Switch = (props: SwitchProps) => {
  const { labelPlacement, ...rest } = props;
  const onSwitchChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const { onChange } = props;
    const $ele = getRootElement(e.target);
    if ($ele) {
      if (!$ele.querySelector(".Mui-checked")) {
        $ele.style.boxShadow = tokenObj["switch-type-shadow-checked"];
      } else {
        $ele.style.boxShadow = tokenObj["switch-type-shadow-unchecked"];
      }
    }
    onChange && onChange(e, checked);
  };

  const onSwitchFocus = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    const { onFocus } = props;
    const $ele = getRootElement(e.target);
    if ($ele) {
      if ($ele.querySelector(".Mui-checked")) {
        $ele.style.boxShadow = tokenObj["switch-type-shadow-checked"];
      } else {
        $ele.style.boxShadow = tokenObj["switch-type-shadow-unchecked"];
      }
    }
    onFocus && onFocus(e);
  };

  const onSwitchBlur = (e: React.FocusEvent<HTMLButtonElement, Element>) => {
    const { onBlur } = props;
    const $ele = getRootElement(e.target);
    if ($ele) {
      $ele.style.boxShadow = "";
    }
    onBlur && onBlur(e);
  };

  const switchLabel =
    typeof props.label === "string" ? (
      <Typography
        style={
          props.size === "large"
            ? typographyStyle(labelPlacement, rest.disabled).large
            : typographyStyle(labelPlacement, rest.disabled).small
        }
      >
        {props.label}
      </Typography>
    ) : (
      props.label
    );

  return (
    <WithStyleLabel
      control={
        <NaviSwitch
          color="primary"
          {...rest}
          onChange={onSwitchChange}
          onFocus={onSwitchFocus}
          onBlur={onSwitchBlur}
        />
      }
      label={switchLabel}
      labelPlacement={labelPlacement}
    />
  );
};

export default Switch;
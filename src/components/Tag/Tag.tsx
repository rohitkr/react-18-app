import React from "react";
import Box from "../Box/Box";
import Tooltip from "../Tooltip/Tooltip";
import SystemIcon from "../SystemIcon/SystemIcon";
import {
  TagSizeTypes,
  TagIntentTypes,
  TagVariantTypes,
  TagProps,
  DismissibleCloseIconProps,
} from "./Tag.types";
import tokens from "../../tokens/build/json/tokens.json";
import { X } from "tabler-icons-react";
import "./Tag.scss";

const tokenObj: { [key: string]: any } = tokens;
const labelBaseStyles = (size: TagSizeTypes) => {
  return {
    root: {
      lineHeight: tokenObj[`tag-type-root-label-${size}-line-height`],
      fontFamily: tokenObj[`tag-type-root-label-${size}-font-family`],
      fontWeight: Number(tokenObj[`tag-type-root-label-${size}-font-weight`]),
      fontSize: tokenObj[`tag-type-root-label-${size}-font-size`],
      margin: tokenObj["tag-type-root-label-margin"],
    },
  };
};

const defaultIntentStyles = {
  color: "black",
  backgroundColor: "transparent",
  outline: "none",
  iconColor: "none",
};
const tagIntentStyles = (
  intent: TagIntentTypes,
  variant: TagVariantTypes,
  isHovered: boolean,
  isFocussed: boolean,
  disabled: boolean
) => {
  let intentStyles = { ...defaultIntentStyles };
  if (disabled) {
    intentStyles = {
      ...intentStyles,
      color: tokenObj[`tag-type-${variant}-disabled-color`],
      backgroundColor:
        tokenObj[`tag-type-${variant}-disabled-background-color`],
      outline:
        variant === "outline"
          ? tokenObj[`tag-type-${variant}-disabled-outline`]
          : null,
      iconColor: tokenObj[`tag-type-${variant}-disabled-color`],
    };
  } else if (isHovered && !disabled) {
    if (variant === "outline") {
      intentStyles = {
        ...intentStyles,
        color: tokenObj[`tag-type-${variant}-${intent}-hover-color`],
        backgroundColor:
          tokenObj[`tag-type-${variant}-${intent}-hover-background-color`],
        iconColor: tokenObj[`tag-type-${variant}-${intent}-hover-icon`],
        outline: tokenObj[`tag-type-${variant}-${intent}-hover-outline`],
      };
    } else {
      intentStyles = {
        ...intentStyles,
        color: tokenObj[`tag-type-${variant}-${intent}-hover-color`],
        backgroundColor:
          tokenObj[`tag-type-${variant}-${intent}-hover-background-color`],
        iconColor: tokenObj[`tag-type-${variant}-${intent}-hover-icon`],
      };
    }
  } else {
    intentStyles = {
      ...intentStyles,
      color: tokenObj[`tag-type-${variant}-${intent}-color`],
      backgroundColor:
        tokenObj[`tag-type-${variant}-${intent}-background-color`],
      iconColor: tokenObj[`tag-type-${variant}-${intent}-color`],
    };
  }
  if (variant === "outline" && !isFocussed && !disabled && !isHovered) {
    intentStyles = {
      ...intentStyles,
      outline: tokenObj[`tag-type-${variant}-${intent}-outline`],
    };
  } else if (isFocussed && !disabled) {
    intentStyles = {
      ...intentStyles,
      outline: tokenObj[`tag-type-${variant}-${intent}-focussed-outline`],
    };
  }
  return intentStyles;
};
const tagStyles = (
  size: TagSizeTypes,
  intent: TagIntentTypes,
  variant: TagVariantTypes,
  isHovered: boolean,
  isFocussed: boolean,
  disabled: boolean
) => {
  return {
    root: {
      borderRadius: tokenObj["tag-type-root-border-radius"],
      fontSize:
        size === "large"
          ? tokenObj["tag-type-root-large-font-size"]
          : tokenObj["tag-type-root-small-font-size"],
      display: tokenObj["tag-type-root-display"],
      alignItems: tokenObj["tag-type-root-align-items"],
      padding: tokenObj[`tag-type-root-${size}-padding`],
      lineHeight: tokenObj[`tag-type-root-${size}-line-height`],
      cursor: "pointer",
      "& svg": {
        width: "20px",
        height: "20px",
      },
      ...tagIntentStyles(intent, variant, isHovered, isFocussed, disabled),
    },
  };
};

const DimissibleCloseIcon: React.FC<DismissibleCloseIconProps> = ({
  dismissible,
  size,
  handleDismiss,
  intent,
  variant,
  disabled,
}) => {
  const getDismissibleIntent = () => {
    if (intent === "muted") {
      return variant === "bold" ? "muted-light" : "muted-dark";
    }
    if (variant === "bold") {
      return intent === "warning" ? "muted-dark" : "muted-light";
    }
    return intent;
  };

  if (!dismissible || disabled) {
    return null;
  }
  const dismissibleIntent = getDismissibleIntent();
  return (
    <Box
      style={{
        marginLeft: tokenObj[`tag-type-icon-${size}-trailing-icon-margin-left`],
        display: tokenObj["tag-type-icon-display"],
        alignItems: tokenObj["tag-type-icon-align-items"],
      }}
    >
      <Tooltip position="top" title="Clear" size="compact">
        <SystemIcon
          size={size}
          intent={dismissibleIntent}
          onClick={handleDismiss}
          disabled={disabled}
          transparent
        >
          <X />
        </SystemIcon>
      </Tooltip>
    </Box>
  );
};
const TagComponent: React.FC<TagProps> = ({
  size = "large",
  intent = "muted",
  variant = "bold",
  LeadingIcon,
  TrailingIcon,
  label,
  dismissible,
  onDismiss,
  onClick,
  onHover,
  onFocus,
  tabIndex,
  disabled = false,
  forwardedRef,
  "data-testid": dataTestId,
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocussed, setIsFocussed] = React.useState(false);

  const handleHover = React.useCallback((e: React.MouseEvent) => {
    setIsHovered(true);
  }, []);

  const handleHoverOut = React.useCallback((e: React.MouseEvent) => {
    setIsHovered(false);
    onHover && onHover(e);
  }, []);

  const handleDismiss = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dismissible && onDismiss && onDismiss(e, props.value);
  }, []);

  const handleOnClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onClick && onClick(e);
  }, []);

  const handleFocus = React.useCallback(
    (e: React.FocusEvent<HTMLElement, Element>) => {
      setIsFocussed(true);
      onFocus && onFocus(e);
    },
    []
  );

  const handleBlur = React.useCallback(
    (e: React.FocusEvent<HTMLElement, Element>) => {
      setIsFocussed(false);
      onFocus && onFocus(e);
    },
    []
  );

  const styles = tagStyles(
    size,
    intent,
    variant,
    isHovered,
    isFocussed,
    disabled
  );
  const labelStyles = labelBaseStyles(size).root;

  return (
    <Box
      tabIndex={tabIndex || 1}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
      onClick={handleOnClick}
      onFocus={handleFocus}
      onBlur={handleBlur}
      ref={forwardedRef}
      data-testid={dataTestId}
      data-value={props.value}
      {...props}
      className={`navi-tag-icons-container ${props.className}`}
      style={{ display: "inline-block", width: "max-content", outline: "none", ...props.style }}
    >
      <Box style={{ ...styles.root }}>
        {LeadingIcon && (
          <Box
            display={tokenObj["tag-type-icon-display"]}
            marginRight={
              size === "small"
                ? "none"
                : tokenObj[`tag-type-icon-${size}-leading-icon-margin-right`]
            }
            alignItems={tokenObj["tag-type-icon-align-items"]}
            className={`${size}-tag`}
          >
            {LeadingIcon}
          </Box>
        )}
        <Box style={labelStyles}>{label}</Box>
        {TrailingIcon && (
          <Box
            style={{
              marginLeft:
                size === "small"
                  ? "none"
                  : tokenObj[`tag-type-icon-${size}-trailing-icon-margin-left`],
              display: tokenObj["tag-type-icon-display"],
              alignItems: tokenObj["tag-type-icon-align-items"],
            }}
            className={`${size}-tag`}
          >
            {TrailingIcon}
          </Box>
        )}
        <DimissibleCloseIcon
          size={size}
          variant={variant}
          handleDismiss={handleDismiss}
          dismissible={dismissible}
          intent={intent}
          disabled={disabled}
        />
      </Box>
    </Box>
  );
};

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  return <TagComponent {...props} forwardedRef={ref} />;
});
export default Tag;

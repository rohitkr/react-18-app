import React from "react";
import Box from "../Box/Box";
import {
  BadgeProps,
  BadgeIntentTypes,
  BadgeSizeTypes,
  BadgeVariantTypes,
} from "./Badge.types";
import tokens from "../../tokens/build/json/tokens.json";
import "./Badge.scss";

const tokenObj: { [key: string]: any } = tokens;

const labelBaseStyles = (size: BadgeSizeTypes) => {
  return {
    root: {
      lineHeight: tokenObj[`badge-root-label-${size}-line-height`],
      fontFamily: tokenObj[`badge-root-label-${size}-font-family`],
      fontWeight: Number(tokenObj[`badge-root-label-${size}-font-weight`]),
      fontSize: tokenObj[`badge-root-label-${size}-font-size`],
    },
  };
};

const badgeIntentStyles = (
  intent: BadgeIntentTypes,
  variant: BadgeVariantTypes
) => {
  let intentStyles = {
    color: "black",
    backgroundColor: "transparent",
    outline: "none",
  };
  intentStyles = {
    ...intentStyles,
    color: tokenObj[`badge-${variant}-${intent}-color`],
    backgroundColor:
      tokenObj[`badge-${variant}-${intent}-background-color`],
  };
  if (variant === "outline") {
    intentStyles = {
      ...intentStyles,
      outline: tokenObj[`badge-${variant}-${intent}-outline`],
    };
  }
  return intentStyles;
};

const badgeStyles = (
  size: BadgeSizeTypes,
  intent: BadgeIntentTypes,
  variant: BadgeVariantTypes
) => {
  return {
    root: {
      borderRadius: tokenObj["badge-root-border-radius"],
      fontSize:
        size === "large"
          ? tokenObj["badge-root-large-font-size"]
          : tokenObj["badge-root-small-font-size"],
      height:
        size === "large"
          ? tokenObj["badge-root-large-height"]
          : tokenObj["badge-root-small-height"],
      display: tokenObj["badge-root-display"],
      alignItems: tokenObj["badge-root-align-items"],
      padding: tokenObj["badge-root-padding"],
      ...badgeIntentStyles(intent, variant),
    },
  };
};

const Badge: React.FC<BadgeProps> = ({
  size = "large",
  intent = "muted",
  variant = "bold",
  leadingIconProps = {},
  trailingIconProps = {},
  LeadingIcon,
  TrailingIcon,
  label,
  type = "status",
  dataTestId,
}) => {
  const styles = badgeStyles(size, intent, variant);
  const intentStyles = badgeIntentStyles(intent, variant);
  if (type === "notification") {
    return (
      <Box
        height={tokenObj["badge-notification-height"]}
        width={tokenObj["badge-notification-width"]}
        bgColor={intentStyles.backgroundColor}
        display={tokenObj["badge-notification-display"]}
        borderRadius={tokenObj["badge-notification-border-radius"]}
      />
    );
  }

  const labelStyles = labelBaseStyles(size).root;
  return (
    <Box
      style={{ display: "inline-block", width: "max-content" }}
      data-testid={dataTestId || undefined}
      className="badge-container"
    >
      <Box style={{ ...styles.root }}>
        {LeadingIcon && (
          <Box
            style={{
              marginRight:
                size === "large"
                  ? tokenObj[
                      "badge-icon-large-leading-icon-margin-right"
                    ]
                  : tokenObj["badge-icon-small-leading-icon-margin-right"],
              display: tokenObj["badge-icon-display"],
              alignItems: tokenObj["badge-icon-align-items"],
            }}
          >
            <LeadingIcon
              stroke={intentStyles.color}
              size={
                size === "large"
                  ? Number(tokenObj["badge-icon-large-size"])
                  : Number(tokenObj["badge-icon-small-size"])
              }
              {...leadingIconProps}
            />
          </Box>
        )}
        <Box style={labelStyles}>{label}</Box>
        {TrailingIcon && (
          <Box
            style={{
              marginLeft:
                size === "large"
                  ? tokenObj[
                      "badge-icon-large-trailing-icon-margin-left"
                    ]
                  : tokenObj["badge-icon-small-trailing-icon-margin-left"],
              display: tokenObj["badge-icon-display"],
              alignItems: tokenObj["badge-icon-align-items"],
            }}
          >
            <TrailingIcon
              stroke={intentStyles.color}
              size={
                size === "large"
                  ? tokenObj["badge-icon-large-size"]
                  : tokenObj["badge-icon-small-size"]
              }
              {...trailingIconProps}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Badge;

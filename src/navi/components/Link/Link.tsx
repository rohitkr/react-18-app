import * as React from "react";
import { LinkProps } from "./Link.types";
import tokens from "../../tokens/build/json/tokens.json";
import { hexToRgb } from "@material-ui/core/styles";
import MuiLink from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core";
import { ExternalLink } from "tabler-icons-react";

const tokenObj: { [key: string]: any } = tokens; //@fix

const getFocusColor = (focusColor: string) => {
  if (!/rgb/.test(focusColor)) {
    focusColor = hexToRgb(focusColor);
  }
  return focusColor
    .replace(/(\,\s+\d+)\)/, "$1, 0.4)")
    .replace(/rgb\(/, "rgba(");
};

const svgSizeMapObj: { [key: string]: string } = Object.freeze({
  large: "1.5rem",
  medium: "1.2rem",
  small: "1rem",
  xsmall: "1rem",
});

const createStyles = (size: string) => ({
  linkStyle: {
    fontFamily: tokenObj["text-link-" + size + "-font-family"],
    fontSize: tokenObj["text-link-" + size + "-font-size"],
    fontWeight: tokenObj["text-link-" + size + "-font-weight"],
    textDecoration: tokenObj["text-link-" + size + "-text-decoration"],
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${tokenObj["spacing-0"]} ${tokenObj["spacing-2"]}`,
    gap:
      size === "large"
        ? tokenObj["spacing-8"]
        : size === "medium"
        ? tokenObj["spacing-4"]
        : tokenObj["spacing-2"],
    borderRadius: tokenObj["border-radius-radius-small"],
    color: tokenObj["link-color-label-default"],
    "& svg": {
      width: svgSizeMapObj[size],
      height: svgSizeMapObj[size],
    },
    "&:hover": {
      color: tokenObj["link-color-label-hover"],
    },
    "&:active": {
      color: tokenObj["link-color-label-pressed"],
    },
    "&:focus-visible": {
      outline: "none",
    },
    "&:focus": {
      boxShadow:
        "0px 0px 0px 4px " + getFocusColor(tokenObj["link-color-shadow"]),
    },
  },
  //keeping this for future requirements, should we need a disabled state for link component
  disabledLinkStyle: {
    fontFamily: tokenObj["text-link-" + size + "-font-family"],
    fontSize: tokenObj["text-link-" + size + "-font-size"],
    fontWeight: tokenObj["text-link-" + size + "-font-weight"],
    textDecoration: tokenObj["text-link-" + size + "-text-decoration"],
    color: tokenObj["link-color-label-disabled"],
    cursor: "not-allowed",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: `${tokenObj["spacing-0"]} ${tokenObj["spacing-2"]}`,
    gap:
      size === "large"
        ? tokenObj["spacing-8"]
        : size === "medium"
        ? tokenObj["spacing-4"]
        : tokenObj["spacing-2"],
    "& svg": {
      width: svgSizeMapObj[size],
      height: svgSizeMapObj[size],
    },
  },
});

const LinkContent = (LinkContentProps: LinkProps) => {
  const { leadingIcon, trailingIcon, children } = LinkContentProps;
  return (
    <>
      {leadingIcon ? (
        typeof leadingIcon === "boolean" ? (
          <ExternalLink />
        ) : (
          leadingIcon
        )
      ) : null}
      {children}
      {trailingIcon ? (
        typeof trailingIcon === "boolean" ? (
          <ExternalLink />
        ) : (
          trailingIcon
        )
      ) : null}
    </>
  );
};

const LinkComponent = ({
  size = "small",
  style,
  href,
  target,
  forwardedRef,
  translate,
  ...rest
}: LinkProps) => {
  const StyledLink = withStyles(createStyles(size))(
    ({ classes }: LinkProps) => {
      return (
        <MuiLink
          className={classes.linkStyle}
          href={href}
          target={target}
          ref={forwardedRef}
          {...rest}
        >
          <LinkContent {...rest} />
        </MuiLink>
      );
    }
  );

  return <StyledLink />;
};

const Link = React.forwardRef<HTMLLinkElement, LinkProps>((props, ref) => {
  return <LinkComponent {...props} forwardedRef={ref} />;
});

export default React.memo(Link);

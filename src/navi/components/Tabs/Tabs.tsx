import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiTabs from "@material-ui/core/Tabs";
import { TabsProps } from "./Tabs.types";
import tokens from "../../tokens/build/json/tokens.json";

const tokenObj: { [key: string]: any } = tokens;

const Tabs: React.FC<TabsProps> = ({
  size = "large",
  intent = "info",
  ...props
}) => {
  const StyledTabs = withStyles({
    root: {
      display: "inline-flex",
    },
    flexContainer: {
      gap: `${
        size === "large" ? tokenObj["spacing-24"] : tokenObj["spacing-16"]
      }`,
    },
    indicator: {
      backgroundColor:
        tokenObj[
          `tab-color-indicator-${
            intent === "mutedLight" ? "muted-light" : intent
          }`
        ],
      height: tokenObj["spacing-4"],
      borderRadius:
        props.orientation === "vertical"
          ? `${tokenObj["border-radius-radius-small"]} 0 0 ${tokenObj["border-radius-radius-small"]}`
          : `${tokenObj["border-radius-radius-small"]} ${tokenObj["border-radius-radius-small"]} 0 0`,
      width: props.orientation === "vertical" ? `${tokenObj["spacing-4"]}` : "",
    },
  })(MuiTabs);

  const updatedChildren =
    props.children &&
    React.Children.map(props.children, (child: any) => {
      return React.cloneElement(child, { intent, size });
    });

  return (
    <StyledTabs {...props} aria-label="an example">
      {updatedChildren}
    </StyledTabs>
  );
};

export default Tabs;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiTab from "@material-ui/core/Tab";
import { TabProps } from "./Tab.types";
import { TabProps as MuiTabProps } from "@material-ui/core";
import tokens from "../../tokens/build/json/tokens.json";
import Box from "../Box/Box";
const tokenObj: { [key: string]: any } = tokens;

const Tab: React.FC<TabProps> = (props) => {
  const StyledTab = withStyles({
    root: {
      display: "inline-flex",
      flexGrow: 0,
      minWidth: "0px",
      padding: tokenObj[`tab-padding-${props.size}`],
      alignItems: "center",
      borderRadius: tokenObj["border-radius-radius-small"],
      textTransform: "none",
      letterSpacing: "0",
      transition: "all 0.120s ease-in",
      font: tokenObj[
        `tab-font-label-${props.selected ? "selected" : "unselected"}`
      ],
      color:
        tokenObj[
          `tab-color-label-unselected-${
            props.intent === "mutedLight" ? "muted-light" : "muted-dark"
          }-default`
        ],
      "&:hover": {
        backgroundColor:
          tokenObj[
            `${
              props.selected
                ? "none"
                : `tab-color-background-${
                    props.intent === "mutedLight" ? "muted-light" : "muted-dark"
                  }-hover`
            }`
          ],
        color:
          tokenObj[
            `tab-color-label-unselected-${
              props.intent === "mutedLight" ? "muted-light" : "muted-dark"
            }-hover`
          ],
        opacity: 1,
      },
      "&:focus": {
        color: tokenObj[`tab-color-label-selected-${props.intent}`],
      },
      "&:focus-visible": {
        boxShadow: tokenObj[`tab-shadow-${props.intent}`],
      },
    },
    selected: {
      color: tokenObj[`tab-color-label-selected-${props.intent}`],
      "&:hover": {
        color: tokenObj[`tab-color-label-selected-${props.intent}`],
        opacity: 1,
      },
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexGrow: 0,
      gap: tokenObj["tab-gap"],
    },
  })((props: MuiTabProps) => <MuiTab disableRipple {...props} />);
  return (
    <StyledTab
      {...props}
      aria-selected={props.selectedValue === props.value}
      selected={props.selectedValue === props.value}
      label={
        <>
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            component="span"
          >
            {props.leadingIcon}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            component="span"
          >
            {props.labeltext}
          </Box>

          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            component="span"
          >
            {props.trailingIcon}
          </Box>
        </>
      }
    />
  );
};

export default Tab;

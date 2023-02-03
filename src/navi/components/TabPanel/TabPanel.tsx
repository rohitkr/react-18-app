import React, { useMemo } from "react";
import Box from "../Box/Box";
import { TabPanelProps } from "./TabPanel.types";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, selectedValue, ...other } = props;
  const panelStyles = useMemo(() => {
    let finalTabStyle = {};
    if (props.width) {
      finalTabStyle = {
        ...finalTabStyle,
        maxWidth: props.width,
        overflowX: "scroll",
      };
    }
    if (props.height) {
      finalTabStyle = {
        ...finalTabStyle,
        maxHeight: props.height,
        overflowY: "scroll",
      };
    }
    return finalTabStyle;
  }, [props.height, props.width]);
  return (
    <Box
      role="tabpanel"
      hidden={selectedValue !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      style={panelStyles}
      {...other}
    >
      {selectedValue === index && <Box>{children}</Box>}
    </Box>
  );
}

export default TabPanel;

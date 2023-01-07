import React from "react";
import Box from "../Box/Box";
import Divider from "../Divider/Divider";

const GroupHeadingMenuItem: React.FC<any> = ({ heading }) => {
  return (
    <Box display="flex" width="100%" alignItems="center" paddingTop="8px" marginLeft="8px">
      {heading}
      <Divider orientation="horizontal" paddingLeft="8px" />
    </Box>
  );
};

export default GroupHeadingMenuItem;

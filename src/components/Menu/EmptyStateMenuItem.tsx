import React from "react";
import Box from "../Box/Box";
import { MoodSad } from "tabler-icons-react";

const EmptyStateMenuItem: React.FC<any> = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" width="100%">
      <MoodSad size="16px" style={{padding: '8px'}}/> No results found
    </Box>
  );
};

export default EmptyStateMenuItem;

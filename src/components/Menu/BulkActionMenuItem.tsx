import React from "react";
import Button from "../Button/Button";

const BulkActionMenuItem: React.FC<any> = ({ title, size }) => {
  return (
    <Button variant="tertiary" intent="info" size={size}>
      {title}
    </Button>
  );
};

export default BulkActionMenuItem;

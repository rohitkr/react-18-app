import * as React from "react";
import { IconButtonProps } from "./IconButton.types";
import Tooltip from "../Tooltip/Tooltip";
import Button from '../Button/Button';
import "./IconButton.scss";

enum tooltipSize {
  large = 'relaxed',
  small = 'compact'
}

const IconButton = ({
  buttonType = 'button',
  tooltipPosition = 'top',
  size = 'large',
  title,
  ...attrs
}: IconButtonProps) => {

  return (
    attrs.disabled ?
      <Button buttonType='icon' size={size} {...attrs}>
        {attrs.children}
      </Button>
      :
      <Tooltip title={title} position={tooltipPosition} size={tooltipSize[size]}>
        <Button buttonType='icon' size={size} {...attrs}>
          {attrs.children}
        </Button>
      </Tooltip>
  );
}

export default IconButton;
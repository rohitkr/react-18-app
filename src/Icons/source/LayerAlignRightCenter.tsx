
import React from 'react';

export const LayerAlignRightCenter: React.FunctionComponent<any> = ({
  size="20px",
  color="currentColor",
  ...props
}) => {
  return (
    <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
  <path d="M19 4C18.4477 4 18 4.44772 18 5V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4ZM6 9C4.89543 9 4 9.89543 4 11V13C4 14.1046 4.89543 15 6 15H14C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9H6Z" />
</svg>
  )
};

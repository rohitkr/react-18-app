
import React from 'react';

export const LayerAlignBottomCenter: React.FunctionComponent<any> = ({
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
  <path d="M20 19C20 18.4477 19.5523 18 19 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19ZM15 6C15 4.89543 14.1046 4 13 4H11C9.89543 4 9 4.89543 9 6V14C9 15.1046 9.89543 16 11 16H13C14.1046 16 15 15.1046 15 14V6Z" />
</svg>
  )
};

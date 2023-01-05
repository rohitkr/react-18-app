
import React from 'react';

export const LayerAlignTopCenter: React.FunctionComponent<any> = ({
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
  <path d="M20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5ZM15 18C15 19.1046 14.1046 20 13 20H11C9.89543 20 9 19.1046 9 18V10C9 8.89543 9.89543 8 11 8H13C14.1046 8 15 8.89543 15 10V18Z" />
</svg>
  )
};

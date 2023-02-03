
import React from 'react';

export const LayerAlignHorizontal: React.FunctionComponent<any> = ({
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
  <path d="M20 12C20 12.5523 19.5523 13 19 13H17C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11H19C19.5523 11 20 11.4477 20 12ZM8 12C8 12.5523 7.55228 13 7 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H7C7.55228 11 8 11.4477 8 12ZM15 18C15 19.1046 14.1046 20 13 20H11C9.89543 20 9 19.1046 9 18V6C9 4.89543 9.89543 4 11 4H13C14.1046 4 15 4.89543 15 6V18Z" />
</svg>
  )
};

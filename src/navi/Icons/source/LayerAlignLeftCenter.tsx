
import React from 'react';

export const LayerAlignLeftCenter: React.FunctionComponent<any> = ({
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
  <path d="M5 4C5.55228 4 6 4.44772 6 5V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4ZM18 9C19.1046 9 20 9.89543 20 11V13C20 14.1046 19.1046 15 18 15H10C8.89543 15 8 14.1046 8 13V11C8 9.89543 8.89543 9 10 9H18Z" />
</svg>
  )
};

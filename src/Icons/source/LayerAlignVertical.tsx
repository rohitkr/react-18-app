
import React from 'react';

export const LayerAlignVertical: React.FunctionComponent<any> = ({
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
  <path d="M12 4C12.5523 4 13 4.44772 13 5V7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7V5C11 4.44772 11.4477 4 12 4ZM12 16C12.5523 16 13 16.4477 13 17V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V17C11 16.4477 11.4477 16 12 16ZM18 9C19.1046 9 20 9.89543 20 11V13C20 14.1046 19.1046 15 18 15H6C4.89543 15 4 14.1046 4 13V11C4 9.89543 4.89543 9 6 9H18Z" />
</svg>
  )
};

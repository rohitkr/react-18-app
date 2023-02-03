
import React from 'react';

export const GateOr: React.FunctionComponent<any> = ({
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
  <path d="M10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5V19C8 19.5523 8.44772 20 9 20C9.55228 20 10 19.5523 10 19V5Z" />
  <path d="M16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5V19C14 19.5523 14.4477 20 15 20C15.5523 20 16 19.5523 16 19V5Z" />
</svg>
  )
};

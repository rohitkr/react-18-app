
import React from 'react';

export const Dashboard: React.FunctionComponent<any> = ({
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
  <path d="M10 14C10.5523 14 11 14.4477 11 15V19C11 19.5523 10.5523 20 10 20H5C4.44772 20 4 19.5523 4 19V15C4 14.4477 4.44772 14 5 14H10ZM19 9C19.5523 9 20 9.44772 20 10V19C20 19.5523 19.5523 20 19 20H14C13.4477 20 13 19.5523 13 19V10C13 9.44772 13.4477 9 14 9H19ZM10 4C10.5523 4 11 4.44772 11 5V11C11 11.5523 10.5523 12 10 12H5C4.44772 12 4 11.5523 4 11V5C4 4.44772 4.44772 4 5 4H10ZM19 4C19.5523 4 20 4.44772 20 5V6C20 6.55228 19.5523 7 19 7H14C13.4477 7 13 6.55228 13 6V5C13 4.44772 13.4477 4 14 4H19Z" />
</svg>
  )
};

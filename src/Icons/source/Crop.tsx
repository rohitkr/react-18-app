
import React from 'react';

export const Crop: React.FunctionComponent<any> = ({
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
  <path d="M7.99327 4.88338C7.93551 4.38604 7.51284 4 7 4C6.44772 4 6 4.44772 6 5V6H5C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8H6V17L6.00673 17.1166C6.06449 17.614 6.48716 18 7 18H16V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V18H19L19.1166 17.9933C19.614 17.9355 20 17.5128 20 17L19.9933 16.8834C19.9355 16.386 19.5128 16 19 16H8V5L7.99327 4.88338ZM18 7C18 6.44772 17.5523 6 17 6H11C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8H16V13C16 13.5523 16.4477 14 17 14C17.5523 14 18 13.5523 18 13V7Z" />
</svg>
  )
};

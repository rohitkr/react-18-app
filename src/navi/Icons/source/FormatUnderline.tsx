
import React from 'react';

export const FormatUnderline: React.FunctionComponent<any> = ({
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
  <path d="M16.9933 4.88338C16.9355 4.38604 16.5128 4 16 4C15.4477 4 15 4.44772 15 5V11L14.9949 11.1763C14.9037 12.7511 13.5977 14 12 14C10.3431 14 9 12.6569 9 11V5L8.99327 4.88338C8.93551 4.38604 8.51284 4 8 4C7.44772 4 7 4.44772 7 5V11L7.00462 11.2169C7.11818 13.8777 9.31125 16 12 16C14.7614 16 17 13.7614 17 11V5L16.9933 4.88338ZM17 19C17 18.4477 16.5523 18 16 18H8C7.44772 18 7 18.4477 7 19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19Z" />
</svg>
  )
};

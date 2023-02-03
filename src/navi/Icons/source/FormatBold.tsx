
import React from 'react';

export const FormatBold: React.FunctionComponent<any> = ({
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
  <path d="M7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4H12C14.2463 4 16 6.04599 16 8.5C16 9.50829 15.7039 10.4477 15.1993 11.2046C16.8407 11.7792 18 13.5047 18 15.5C18 17.8818 16.3479 19.8793 14.1969 19.9947L14 20H7ZM14.1327 13.0056L14 13H8V18H14C15.0674 18 16 16.912 16 15.5C16 14.1468 15.1435 13.0912 14.1327 13.0056ZM12 6H8V11H12C13.0674 11 14 9.91199 14 8.5C14 7.14685 13.1435 6.09123 12.1327 6.00561L12 6Z" />
</svg>
  )
};

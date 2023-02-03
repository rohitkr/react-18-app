
import React from 'react';

export const Ruble: React.FunctionComponent<any> = ({
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
  <path d="M14 4C16.7614 4 19 6.23858 19 9C19 11.6888 16.8777 13.8818 14.2169 13.9954L14 14H10V15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H10V19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V17H6C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15H8V14H6C5.44772 14 5 13.5523 5 13C5 12.4872 5.38604 12.0645 5.88338 12.0067L6 12H8V5C8 4.44772 8.44772 4 9 4H14ZM14 6H10V12H14C15.6569 12 17 10.6569 17 9C17 7.40232 15.7511 6.09634 14.1763 6.00509L14 6Z" />
</svg>
  )
};

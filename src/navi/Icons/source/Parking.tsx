
import React from 'react';

export const Parking: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17ZM17 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6ZM12 8C13.6569 8 15 9.34315 15 11C15 12.5977 13.7511 13.9037 12.1763 13.9949L12 14H11V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9C9 8.44771 9.44772 8 10 8H12ZM12 10H11V12H12C12.5523 12 13 11.5523 13 11C13 10.4872 12.614 10.0645 12.1166 10.0067L12 10Z" />
</svg>
  )
};

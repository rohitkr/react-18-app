
import React from 'react';

export const Delete: React.FunctionComponent<any> = ({
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
  <path d="M17 10C17.5523 10 18 10.4477 18 11V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V11C6 10.4477 6.44772 10 7 10H17ZM16 12H8V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V12ZM9 5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V6H18C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H6C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6H9V5Z" />
</svg>
  )
};

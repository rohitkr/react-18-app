
import React from 'react';

export const Mouse: React.FunctionComponent<any> = ({
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
  <path d="M12 4C14.7614 4 17 6.14903 17 8.8V15.2C17 17.851 14.7614 20 12 20C9.23858 20 7 17.851 7 15.2V8.8C7 6.14903 9.23858 4 12 4ZM12 6C10.3431 6 9 7.34315 9 9V15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15V9C15 7.34315 13.6569 6 12 6ZM12 8C12.5523 8 13 8.44772 13 9V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V9C11 8.44772 11.4477 8 12 8Z" />
</svg>
  )
};

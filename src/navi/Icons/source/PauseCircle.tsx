
import React from 'react';

export const PauseCircle: React.FunctionComponent<any> = ({
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
  <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12ZM10 8C10.5523 8 11 8.44771 11 9V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V9C9 8.44771 9.44772 8 10 8ZM15 9C15 8.44771 14.5523 8 14 8C13.4477 8 13 8.44771 13 9V15C13 15.5523 13.4477 16 14 16C14.5523 16 15 15.5523 15 15V9Z" />
</svg>
  )
};

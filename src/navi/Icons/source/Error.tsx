
import React from 'react';

export const Error: React.FunctionComponent<any> = ({
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
  <path d="M9.51472 6L6 9.51472V14.4853L9.51472 18H14.4853L18 14.4853L18 9.51472L14.4853 6H9.51472ZM15.3137 4H8.68629L4 8.68629V15.3137L8.68629 20H15.3137L20 15.3137V8.68629L15.3137 4ZM12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15ZM11.0067 7.88338C11.0645 7.38604 11.4872 7 12 7C12.5523 7 13 7.44772 13 8V12L12.9933 12.1166C12.9355 12.614 12.5128 13 12 13C11.4477 13 11 12.5523 11 12V8L11.0067 7.88338Z" />
</svg>
  )
};


import React from 'react';

export const Email: React.FunctionComponent<any> = ({
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
  <path d="M17 6C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17ZM18 9.3L12.6585 13.7526C12.3129 14.055 11.8111 14.0802 11.4394 13.8282L11.3415 13.7526L6 9.301V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V9.3ZM16.432 8H7.567L12 11.6712L16.432 8Z" />
</svg>
  )
};

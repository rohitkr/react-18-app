
import React from 'react';

export const PlayCircle: React.FunctionComponent<any> = ({
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
  <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM11.5039 8.13622L15.5039 11.1362C16.1265 11.4994 16.1631 12.3674 15.6137 12.79L11.5039 15.8638C10.8372 16.2527 10 15.7718 10 15V9C10 8.22821 10.8372 7.74734 11.5039 8.13622Z" />
</svg>
  )
};

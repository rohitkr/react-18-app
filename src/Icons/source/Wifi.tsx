
import React from 'react';

export const Wifi: React.FunctionComponent<any> = ({
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
  <path d="M13.4 15.6C14.2 16.4 14.2 17.6 13.4 18.4C13 18.8 12.5 19 12 19C11.5 19 11 18.8 10.6 18.4C9.8 17.6 9.8 16.4 10.6 15.6C11.4 14.8 12.6 14.8 13.4 15.6ZM12 11.8C13.3 11.8 14.5 12.4 15.4 13.4C15.8 13.8 15.7 14.4 15.3 14.8C15.2 14.9 14.9 15 14.7 15C14.4 15 14.2 14.9 14 14.7C12.9 13.5 11.2 13.5 10.1 14.7C9.7 15.1 9.1 15.1 8.7 14.8C8.3 14.4 8.3 13.8 8.6 13.4C9.5 12.4 10.7 11.8 12 11.8ZM12 8.4C14.0045 8.4 15.918 9.22004 17.3924 10.7731L17.6 11C18 11.4 17.9 12 17.5 12.4C17.3 12.5 17.1 12.6 16.8 12.6C16.5 12.6 16.3 12.5 16.1 12.3C15 11.1 13.5 10.4 12 10.4C10.5 10.4 9 11.1 7.9 12.3C7.5 12.7 6.9 12.7 6.5 12.4C6.1 12 6.1 11.4 6.4 11C7.9 9.3 9.9 8.4 12 8.4ZM12 5C14.9 5 17.7 6.3 19.7 8.5C20.1 8.9 20 9.5 19.6 9.9C19.5 10.1 19.2 10.2 19 10.2C18.7 10.2 18.5 10.1 18.3 9.9C16.6 8 14.4 7 12 7C9.6 7 7.4 8 5.7 9.9C5.3 10.3 4.7 10.3 4.3 10C3.9 9.6 3.9 9 4.3 8.5C6.3 6.3 9.1 5 12 5Z" />
</svg>
  )
};

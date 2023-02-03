
import React from 'react';

export const Mic: React.FunctionComponent<any> = ({
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
  <path d="M18 10C18.5523 10 19 10.4477 19 11C19 14.5261 16.3928 17.4433 13.001 17.929L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11 17.9291C7.6077 17.4439 5 14.5265 5 11C5 10.4477 5.44772 10 6 10C6.55228 10 7 10.4477 7 11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11C17 10.4477 17.4477 10 18 10ZM12 4C13.6569 4 15 5.34315 15 7V11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11V7C9 5.34315 10.3431 4 12 4ZM12 6C11.4477 6 11 6.44772 11 7V11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11V7C13 6.44772 12.5523 6 12 6Z" />
</svg>
  )
};

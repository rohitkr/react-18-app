
import React from 'react';

export const User: React.FunctionComponent<any> = ({
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
  <path d="M9 14H15C17.7614 14 20 16.2386 20 19C20 19.5523 19.5523 20 19 20C18.4872 20 18.0645 19.614 18.0067 19.1166L17.9949 18.8237C17.907 17.3072 16.6928 16.093 15.1763 16.0051L15 16H9C7.34315 16 6 17.3431 6 19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19C4 16.3112 6.12231 14.1182 8.78311 14.0046L9 14H15H9ZM12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4ZM12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6Z" />
</svg>
  )
};

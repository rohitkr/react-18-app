
import React from 'react';

export const Share: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7C20 8.65685 18.6569 10 17 10C16.1893 10 15.4538 9.67845 14.9139 9.15593L10 11.5803V12.4197L14.9139 14.8441C15.4538 14.3215 16.1893 14 17 14C18.6569 14 20 15.3431 20 17C20 18.6569 18.6569 20 17 20C15.3431 20 14 18.6569 14 17C14 16.8733 14.0078 16.7485 14.0231 16.626L9.1038 14.1387C8.56235 14.6714 7.81955 15 7 15C5.34315 15 4 13.6569 4 12C4 10.3431 5.34315 9 7 9C7.81955 9 8.56235 9.32863 9.1038 9.8613L14.0231 7.374C14.0078 7.25147 14 7.12665 14 7C14 5.34315 15.3431 4 17 4Z" />
</svg>
  )
};

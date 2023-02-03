
import React from 'react';

export const FullscreenExit: React.FunctionComponent<any> = ({
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
  <path d="M9 4C9.51284 4 9.93551 4.38604 9.99327 4.88338L10 5V9C10 9.51284 9.61396 9.93551 9.11662 9.99327L9 10H5C4.44772 10 4 9.55228 4 9C4 8.48716 4.38604 8.06449 4.88338 8.00673L5 8H8V5C8 4.48716 8.38604 4.06449 8.88338 4.00673L9 4ZM9.11662 14.0067L9 14H5L4.88338 14.0067C4.38604 14.0645 4 14.4872 4 15C4 15.5128 4.38604 15.9355 4.88338 15.9933L5 16H8V19L8.00673 19.1166C8.06005 19.5757 8.4243 19.94 8.88338 19.9933L9 20L9.11662 19.9933C9.5757 19.94 9.93995 19.5757 9.99327 19.1166L10 19V15L9.99327 14.8834C9.93995 14.4243 9.5757 14.06 9.11662 14.0067ZM20 15C20 14.4477 19.5523 14 19 14H15L14.8834 14.0067C14.386 14.0645 14 14.4872 14 15V19L14.0067 19.1166C14.0645 19.614 14.4872 20 15 20L15.1166 19.9933C15.614 19.9355 16 19.5128 16 19V16H19L19.1166 15.9933C19.614 15.9355 20 15.5128 20 15ZM15.1166 4.00673L15 4L14.8834 4.00673C14.4243 4.06005 14.06 4.4243 14.0067 4.88338L14 5V9L14.0067 9.11662C14.06 9.5757 14.4243 9.93995 14.8834 9.99327L15 10H19L19.1166 9.99327C19.614 9.93551 20 9.51284 20 9C20 8.48716 19.614 8.06449 19.1166 8.00673L19 8H16V5L15.9933 4.88338C15.94 4.4243 15.5757 4.06005 15.1166 4.00673Z" />
</svg>
  )
};
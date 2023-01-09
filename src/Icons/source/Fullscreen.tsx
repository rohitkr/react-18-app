
import React from 'react';

export const Fullscreen: React.FunctionComponent<any> = ({
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
  <path d="M9 4C9.55228 4 10 4.44772 10 5C10 5.51284 9.61396 5.93551 9.11662 5.99327L9 6H6V9C6 9.51284 5.61396 9.93551 5.11662 9.99327L5 10C4.48716 10 4.06449 9.61396 4.00673 9.11662L4 9V5C4 4.48716 4.38604 4.06449 4.88338 4.00673L5 4H9ZM5.11662 14.0067L5 14L4.88338 14.0067C4.4243 14.06 4.06005 14.4243 4.00673 14.8834L4 15V19L4.00673 19.1166C4.06005 19.5757 4.4243 19.94 4.88338 19.9933L5 20H9L9.11662 19.9933C9.61396 19.9355 10 19.5128 10 19C10 18.4872 9.61396 18.0645 9.11662 18.0067L9 18H6V15L5.99327 14.8834C5.93995 14.4243 5.5757 14.06 5.11662 14.0067ZM19.9933 14.8834C19.9355 14.386 19.5128 14 19 14L18.8834 14.0067C18.386 14.0645 18 14.4872 18 15V18H15L14.8834 18.0067C14.386 18.0645 14 18.4872 14 19C14 19.5523 14.4477 20 15 20H19L19.1166 19.9933C19.614 19.9355 20 19.5128 20 19V15L19.9933 14.8834ZM19.1166 4.00673L19 4H15L14.8834 4.00673C14.386 4.06449 14 4.48716 14 5C14 5.51284 14.386 5.93551 14.8834 5.99327L15 6H18V9L18.0067 9.11662C18.06 9.5757 18.4243 9.93995 18.8834 9.99327L19 10L19.1166 9.99327C19.5757 9.93995 19.94 9.5757 19.9933 9.11662L20 9V5L19.9933 4.88338C19.94 4.4243 19.5757 4.06005 19.1166 4.00673Z" />
</svg>
  )
};

import React from 'react';

export const ChartBar: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17ZM12 8C11.4872 8 11.0645 8.38604 11.0067 8.88338L11 9V15C11 15.5523 11.4477 16 12 16C12.5128 16 12.9355 15.614 12.9933 15.1166L13 15V9C13 8.44772 12.5523 8 12 8ZM16 10C15.4872 10 15.0645 10.386 15.0067 10.8834L15 11V15C15 15.5523 15.4477 16 16 16C16.5128 16 16.9355 15.614 16.9933 15.1166L17 15V11C17 10.4477 16.5523 10 16 10ZM8 12C7.48716 12 7.06449 12.386 7.00673 12.8834L7 13V15C7 15.5523 7.44772 16 8 16C8.51284 16 8.93551 15.614 8.99327 15.1166L9 15V13C9 12.4477 8.55228 12 8 12Z" />
</svg>
  )
};

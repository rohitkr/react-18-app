
import React from 'react';

export const Column2Vertical: React.FunctionComponent<any> = ({
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
  <path d="M8 4C9.65685 4 11 5.34315 11 7V17C11 18.6569 9.65685 20 8 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H8ZM17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H16C14.3431 20 13 18.6569 13 17V7C13 5.34315 14.3431 4 16 4H17ZM8 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H8C8.55228 18 9 17.5523 9 17V7C9 6.44772 8.55228 6 8 6ZM17 6H16C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

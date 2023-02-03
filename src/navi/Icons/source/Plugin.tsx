
import React from 'react';

export const Plugin: React.FunctionComponent<any> = ({
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
  <path d="M14 4C14.5523 4 15 4.44772 15 5V7H16C17.6569 7 19 8.34315 19 10V12C19 15.3137 16.3137 18 13 18V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V18C7.68629 18 5 15.3137 5 12V10C5 8.34315 6.34315 7 8 7H9V5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V7H13V5C13 4.44772 13.4477 4 14 4ZM16 9H8C7.44772 9 7 9.44772 7 10V12C7 14.2091 8.79086 16 11 16H13C15.2091 16 17 14.2091 17 12V10C17 9.44772 16.5523 9 16 9Z" />
</svg>
  )
};


import React from 'react';

export const Calendar: React.FunctionComponent<any> = ({
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
  <path d="M16 4C16.5523 4 17 4.44772 17 5V6C18.6569 6 20 7.34315 20 9V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V9C4 7.34315 5.34315 6 7 6V5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5V6H15V5C15 4.44772 15.4477 4 16 4ZM18 12H6V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V12ZM17 8H7C6.44772 8 6 8.44772 6 9V10H18V9C18 8.44772 17.5523 8 17 8Z" />
</svg>
  )
};

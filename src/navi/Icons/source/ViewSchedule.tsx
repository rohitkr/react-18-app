
import React from 'react';

export const ViewSchedule: React.FunctionComponent<any> = ({
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
  <path d="M17 13C18.6569 13 20 14.3431 20 16V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V16C4 14.3431 5.34315 13 7 13H17ZM17 15H7C6.44772 15 6 15.4477 6 16V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16C18 15.4477 17.5523 15 17 15ZM17 4C18.6569 4 20 5.34315 20 7V8C20 9.65685 18.6569 11 17 11H7C5.34315 11 4 9.65685 4 8V7C4 5.34315 5.34315 4 7 4H17ZM17 6H7C6.44772 6 6 6.44772 6 7V8C6 8.55228 6.44772 9 7 9H17C17.5523 9 18 8.55228 18 8V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

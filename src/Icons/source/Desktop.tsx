
import React from 'react';

export const Desktop: React.FunctionComponent<any> = ({
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
  <path d="M11 16H7C5.34315 16 4 14.6569 4 13V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V13C20 14.6569 18.6569 16 17 16H13V18H15C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H11V16ZM17 6H7C6.44772 6 6 6.44772 6 7V13C6 13.5523 6.44772 14 7 14H17C17.5523 14 18 13.5523 18 13V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

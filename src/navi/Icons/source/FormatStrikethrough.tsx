
import React from 'react';

export const FormatStrikethrough: React.FunctionComponent<any> = ({
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
  <path d="M13 15V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V15H13ZM5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5ZM17 4C17.5523 4 18 4.44772 18 5C18 5.55228 17.5523 6 17 6H13V9H11V6H7C6.44772 6 6 5.55228 6 5C6 4.44772 6.44772 4 7 4H17Z" />
</svg>
  )
};

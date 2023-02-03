
import React from 'react';

export const ViewDay: React.FunctionComponent<any> = ({
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
  <path d="M19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18H19ZM17 8C18.6569 8 20 9.34315 20 11V13C20 14.6569 18.6569 16 17 16H7C5.34315 16 4 14.6569 4 13V11C4 9.34315 5.34315 8 7 8H17ZM17 10H7C6.44772 10 6 10.4477 6 11V13C6 13.5523 6.44772 14 7 14H17C17.5523 14 18 13.5523 18 13V11C18 10.4477 17.5523 10 17 10ZM19 4C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H19Z" />
</svg>
  )
};

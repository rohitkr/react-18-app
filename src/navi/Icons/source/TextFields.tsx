
import React from 'react';

export const TextFields: React.FunctionComponent<any> = ({
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
  <path d="M19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H17V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V13H13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11H19ZM15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H15Z" />
</svg>
  )
};

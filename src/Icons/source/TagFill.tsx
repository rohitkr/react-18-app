
import React from 'react';

export const TagFill: React.FunctionComponent<any> = ({
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
  <path d="M10.8342 4C11.4653 4 12.0705 4.25071 12.5168 4.69696L19.303 11.4832C20.2323 12.4125 20.2323 13.9191 19.303 14.8484L14.8484 19.303C13.9191 20.2323 12.4125 20.2323 11.4832 19.303L4.69696 12.5168C4.25071 12.0705 4 11.4653 4 10.8342V6.37959C4 5.06538 5.06538 4 6.37959 4H10.8342ZM9.5 8C10.3284 8 11 8.67157 11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8Z" />
</svg>
  )
};

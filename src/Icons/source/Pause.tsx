
import React from 'react';

export const Pause: React.FunctionComponent<any> = ({
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
  <path d="M11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17V7ZM15 7C15 6.44772 14.5523 6 14 6C13.4477 6 13 6.44772 13 7V17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17V7Z" />
</svg>
  )
};

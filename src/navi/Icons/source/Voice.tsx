
import React from 'react';

export const Voice: React.FunctionComponent<any> = ({
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
  <path d="M6 4C6.55228 4 7 4.44772 7 5V19C7 19.5523 6.55228 20 6 20C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM18 6C18.5523 6 19 6.44772 19 7V17C19 17.5523 18.5523 18 18 18C17.4477 18 17 17.5523 17 17V7C17 6.44772 17.4477 6 18 6ZM10 7C10.5523 7 11 7.44772 11 8V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V8C9 7.44772 9.44772 7 10 7ZM14 10C14.5523 10 15 10.4477 15 11V13C15 13.5523 14.5523 14 14 14C13.4477 14 13 13.5523 13 13V11C13 10.4477 13.4477 10 14 10Z" />
</svg>
  )
};

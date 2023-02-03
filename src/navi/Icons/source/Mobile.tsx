
import React from 'react';

export const Mobile: React.FunctionComponent<any> = ({
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
  <path d="M15 4C16.6569 4 18 5.34315 18 7V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H15ZM15 6H9C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V7C16 6.44772 15.5523 6 15 6ZM12 14C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14Z" />
</svg>
  )
};

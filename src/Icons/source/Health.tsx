
import React from 'react';

export const Health: React.FunctionComponent<any> = ({
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
  <path d="M9 9V6C9 4.89543 9.89543 4 11 4H13C14.1046 4 15 4.89543 15 6V9H18C19.1046 9 20 9.89543 20 11V13C20 14.1046 19.1046 15 18 15H15V18C15 19.1046 14.1046 20 13 20H11C9.89543 20 9 19.1046 9 18V15H6C4.89543 15 4 14.1046 4 13V11C4 9.89543 4.89543 9 6 9H9ZM11 6V10C11 10.5523 10.5523 11 10 11H6V13H10C10.5523 13 11 13.4477 11 14V18H13V14C13 13.4477 13.4477 13 14 13H18V11H14C13.4477 11 13 10.5523 13 10V6H11Z" />
</svg>
  )
};

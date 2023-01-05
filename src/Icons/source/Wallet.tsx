
import React from 'react';

export const Wallet: React.FunctionComponent<any> = ({
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
  <path d="M18 15H16V16C16 16.5523 15.5523 17 15 17H7C6.44772 17 6 16.5523 6 16V8C6 7.44772 6.44772 7 7 7H15C15.5523 7 16 7.44772 16 8V9H18V8C18 6.34315 16.6569 5 15 5H7C5.34315 5 4 6.34315 4 8V16C4 17.6569 5.34315 19 7 19H15C16.6569 19 18 17.6569 18 16V15ZM15 9H18C19.1046 9 20 9.89543 20 11V13C20 14.1046 19.1046 15 18 15H15C13.8954 15 13 14.1046 13 13V11C13 9.89543 13.8954 9 15 9ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" />
</svg>
  )
};


import React from 'react';

export const CreditCard: React.FunctionComponent<any> = ({
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
  <path d="M17 6C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17ZM6 12V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V12H6ZM6 10H18V9C18 8.44772 17.5523 8 17 8H7C6.44772 8 6 8.44772 6 9V10Z" />
</svg>
  )
};

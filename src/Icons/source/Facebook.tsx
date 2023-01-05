
import React from 'react';

export const Facebook: React.FunctionComponent<any> = ({
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
  <path d="M14.5394 6.65625H16V4.1125C15.7485 4.07812 14.8818 4 13.8727 4C11.7667 4 10.3242 5.325 10.3242 7.75938V10H8V12.8438H10.3242V20H13.1727V12.8438H15.403L15.7576 10H13.1727V8.04063C13.1727 7.21875 13.3939 6.65625 14.5394 6.65625Z" />
</svg>
  )
};


import React from 'react';

export const Users: React.FunctionComponent<any> = ({
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
  <path d="M9.5 12C10.8739 12 12.1301 12.5129 13.0941 13.361C13.6809 13.1285 14.3248 13 15 13C17.7614 13 20 15.149 20 17.8C20 18.4627 19.4404 19 18.75 19H5.375C4.61561 19 4 18.3732 4 17.6C4 14.5072 6.46243 12 9.5 12ZM9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8C6 6.34315 7.34315 5 9 5ZM16 7C17.1046 7 18 7.89543 18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7Z" />
</svg>
  )
};

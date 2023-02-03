
import React from 'react';

export const Attachment: React.FunctionComponent<any> = ({
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
  <path d="M15 5C17.7614 5 20 7.23858 20 10C20 12.7614 17.7614 15 15 15H11C9.34315 15 8 13.6569 8 12C8 10.3431 9.34315 9 11 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H11L10.8834 11.0067C10.386 11.0645 10 11.4872 10 12C10 12.5128 10.386 12.9355 10.8834 12.9933L11 13H15C16.6569 13 18 11.6569 18 10C18 8.34315 16.6569 7 15 7H11C8.23858 7 6 9.23858 6 12C6 14.6888 8.12231 16.8818 10.7831 16.9954L11 17H15C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H11C7.13401 19 4 15.866 4 12C4 8.13401 7.13401 5 11 5H15Z" />
</svg>
  )
};

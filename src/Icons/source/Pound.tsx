
import React from 'react';

export const Pound: React.FunctionComponent<any> = ({
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
  <path d="M13 4C15.2091 4 17 5.79086 17 8C17 8.55228 16.5523 9 16 9C15.4872 9 15.0645 8.61396 15.0067 8.11662L15 8C15 6.89543 14.1046 6 13 6C11.9456 6 11.0818 6.81588 11.0055 7.85074L11 8V13H14C14.5128 13 14.9355 13.386 14.9933 13.8834L15 14C15 14.5128 14.614 14.9355 14.1166 14.9933L14 15H11V18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18H9V15H8C7.48716 15 7.06449 14.614 7.00673 14.1166L7 14C7 13.4872 7.38604 13.0645 7.88338 13.0067L8 13H9V8C9 5.79086 10.7909 4 13 4Z" />
</svg>
  )
};

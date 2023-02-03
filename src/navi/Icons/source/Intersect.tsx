
import React from 'react';

export const Intersect: React.FunctionComponent<any> = ({
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
  <path d="M13 4C14.5977 4 15.9037 5.24892 15.9949 6.82373L16 7V8H17C18.5977 8 19.9037 9.24892 19.9949 10.8237L20 11V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H11C9.40232 20 8.09634 18.7511 8.00509 17.1763L8 17V16H7C5.40232 16 4.09634 14.7511 4.00509 13.1763L4 13V7C4 5.40232 5.24892 4.09634 6.82373 4.00509L7 4H13ZM14 10H11C10.4872 10 10.0645 10.386 10.0067 10.8834L10 11V14H13C13.5128 14 13.9355 13.614 13.9933 13.1166L14 13V10Z" />
</svg>
  )
};

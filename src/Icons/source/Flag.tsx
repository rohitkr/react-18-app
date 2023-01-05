
import React from 'react';

export const Flag: React.FunctionComponent<any> = ({
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
  <path d="M5 4H10C11.3063 4 12.4175 4.83485 12.8293 6.00009L17 6C18.5977 6 19.9037 7.24892 19.9949 8.82373L20 9V15C20 16.5977 18.7511 17.9037 17.1763 17.9949L17 18H14C12.6941 18 11.5831 17.1656 11.171 16.0009L6 16V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4ZM13 8V15C13 15.5128 13.386 15.9355 13.8834 15.9933L14 16H17C17.5128 16 17.9355 15.614 17.9933 15.1166L18 15V9C18 8.48716 17.614 8.06449 17.1166 8.00673L17 8H13ZM10 6H6V14H11V7C11 6.48716 10.614 6.06449 10.1166 6.00673L10 6Z" />
</svg>
  )
};

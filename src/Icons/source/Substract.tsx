
import React from 'react';

export const Substract: React.FunctionComponent<any> = ({
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
  <path d="M13 4C14.5977 4 15.9037 5.24892 15.9949 6.82373L16 7V8H17C18.5977 8 19.9037 9.24892 19.9949 10.8237L20 11V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H11C9.40232 20 8.09634 18.7511 8.00509 17.1763L8 17V16H7C5.40232 16 4.09634 14.7511 4.00509 13.1763L4 13V7C4 5.40232 5.24892 4.09634 6.82373 4.00509L7 4H13ZM17 10H16V13C16 14.5977 14.7511 15.9037 13.1763 15.9949L13 16H10V17C10 17.5128 10.386 17.9355 10.8834 17.9933L11 18H17C17.5128 18 17.9355 17.614 17.9933 17.1166L18 17V11C18 10.4872 17.614 10.0645 17.1166 10.0067L17 10Z" />
</svg>
  )
};

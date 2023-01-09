
import React from 'react';

export const AspectRatio: React.FunctionComponent<any> = ({
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
  <path d="M19.9949 7.82373C19.9037 6.24892 18.5977 5 17 5H7L6.82373 5.00509C5.24892 5.09634 4 6.40232 4 8V16L4.00509 16.1763C4.09634 17.7511 5.40232 19 7 19H17L17.1763 18.9949C18.7511 18.9037 20 17.5977 20 16V8L19.9949 7.82373ZM7 7H17L17.1166 7.00673C17.614 7.06449 18 7.48716 18 8V16L17.9933 16.1166C17.9355 16.614 17.5128 17 17 17H7L6.88338 16.9933C6.38604 16.9355 6 16.5128 6 16V8L6.00673 7.88338C6.06449 7.38604 6.48716 7 7 7ZM16 12C16.5128 12 16.9355 12.386 16.9933 12.8834L17 13V15C17 15.5128 16.614 15.9355 16.1166 15.9933L16 16H14C13.4477 16 13 15.5523 13 15C13 14.4872 13.386 14.0645 13.8834 14.0067L14 14H15V13C15 12.4872 15.386 12.0645 15.8834 12.0067L16 12ZM11 9C11 8.44772 10.5523 8 10 8H8L7.88338 8.00673C7.38604 8.06449 7 8.48716 7 9V11L7.00673 11.1166C7.06449 11.614 7.48716 12 8 12L8.11662 11.9933C8.61396 11.9355 9 11.5128 9 11V10H10L10.1166 9.99327C10.614 9.93551 11 9.51284 11 9Z" />
</svg>
  )
};
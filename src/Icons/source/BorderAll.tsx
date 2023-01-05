
import React from 'react';

export const BorderAll: React.FunctionComponent<any> = ({
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
  <path d="M7 20C5.40232 20 4.09634 18.7511 4.00509 17.1763L4 17V7C4 5.40232 5.24892 4.09634 6.82373 4.00509L7 4H17C18.5977 4 19.9037 5.24892 19.9949 6.82373L20 7V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H7ZM11 13H6V17C6 17.5128 6.38604 17.9355 6.88338 17.9933L7 18H11V13ZM13 13H18V17L17.9933 17.1166C17.9355 17.614 17.5128 18 17 18H13V13ZM11 6H7C6.48716 6 6.06449 6.38604 6.00673 6.88338L6 7V11H11V6ZM13 6H17L17.1166 6.00673C17.614 6.06449 18 6.48716 18 7V11H13V6Z" />
</svg>
  )
};

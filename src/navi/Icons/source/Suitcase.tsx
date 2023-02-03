
import React from 'react';

export const Suitcase: React.FunctionComponent<any> = ({
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
  <path d="M11 4H13C14.5977 4 15.9037 5.24892 15.9949 6.82373L16 7V8H17C18.6569 8 20 9.34315 20 11V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V11C4 9.34315 5.34315 8 7 8H8V7C8 5.40232 9.24892 4.09634 10.8237 4.00509L11 4H13H11ZM18 16H6V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V16ZM17 10H7C6.44772 10 6 10.4477 6 11V14H18V11C18 10.4477 17.5523 10 17 10ZM13 6H11C10.4872 6 10.0645 6.38604 10.0067 6.88338L10 7V8H14V7C14 6.48716 13.614 6.06449 13.1166 6.00673L13 6Z" />
</svg>
  )
};

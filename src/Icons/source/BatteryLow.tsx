
import React from 'react';

export const BatteryLow: React.FunctionComponent<any> = ({
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
  <path d="M15 6C16.2181 6 17.274 6.72834 17.7434 7.79884L17.8125 7.97065L17.864 8.126L18.0118 8.1749C19.0567 8.54915 19.8335 9.48664 19.9763 10.6215L19.9949 10.8237L20 11V13C20 14.2181 19.2717 15.274 18.2012 15.7434L18.0293 15.8125L17.873 15.864L17.8251 16.0118C17.4508 17.0567 16.5134 17.8335 15.3785 17.9763L15.1763 17.9949L15 18H7C5.40232 18 4.09634 16.7511 4.00509 15.1763L4 15V9C4 7.40232 5.24892 6.09634 6.82373 6.00509L7 6H15ZM15 8H7C6.48716 8 6.06449 8.38604 6.00673 8.88338L6 9V15C6 15.5128 6.38604 15.9355 6.88338 15.9933L7 16H15C15.5128 16 15.9355 15.614 15.9933 15.1166L16.0064 14.8863C16.0571 14.4384 16.4042 14.0784 16.8499 14.0112L16.9633 14.0007L17.0757 13.9972C17.5546 13.9619 17.9369 13.5888 17.9929 13.1193L18 13V11C18 10.4872 17.614 10.0645 17.1166 10.0067L16.8863 9.9936C16.4384 9.94285 16.0784 9.59585 16.0112 9.15011L16.0007 9.03673L15.9972 8.92431C15.9619 8.44538 15.5888 8.06305 15.1193 8.00706L15 8ZM8 9C8.55228 9 9 9.44772 9 10V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V10C7 9.44772 7.44772 9 8 9Z" />
</svg>
  )
};

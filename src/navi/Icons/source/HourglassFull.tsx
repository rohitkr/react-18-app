
import React from 'react';

export const HourglassFull: React.FunctionComponent<any> = ({
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
  <path d="M14 4C15.5977 4 16.9037 5.24892 16.9949 6.82373L17 7V9C17 9.27541 16.8865 9.53676 16.6895 9.72431L16.6 9.8L13.667 12L16.6 14.2C16.8518 14.3889 17 14.6852 17 15V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V15C7 14.6852 7.14819 14.3889 7.4 14.2L10.333 12L7.4 9.8C7.17967 9.63475 7.03867 9.38717 7.00686 9.117L7 9V7C7 5.40232 8.24892 4.09634 9.82373 4.00509L10 4H14Z" />
</svg>
  )
};

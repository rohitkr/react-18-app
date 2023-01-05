
import React from 'react';

export const Reply: React.FunctionComponent<any> = ({
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
  <path d="M11 18C11 18.8963 9.92597 19.3225 9.30947 18.7241L9.23178 18.6402L4.23178 12.6402C3.95083 12.3031 3.92529 11.8272 4.15516 11.4649L4.23178 11.3598L9.23178 5.35982C9.80559 4.67124 10.9035 5.0314 10.994 5.8858L11 6V9C15.8818 9 19.8558 12.8868 19.9962 17.7346L20 18C17.5117 16.1338 14.5077 15.0893 11.4052 15.0055L11 15V18Z" />
</svg>
  )
};

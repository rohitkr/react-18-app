
import React from 'react';

export const AudioNext: React.FunctionComponent<any> = ({
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
  <path d="M7.53 6.15201L15.53 11.152C16.1567 11.5437 16.1567 12.4563 15.53 12.848L7.53 17.848C6.86395 18.2643 6 17.7854 6 17V7.00001C6 6.21458 6.86395 5.73573 7.53 6.15201ZM17 6.00001C17.5523 6.00001 18 6.44773 18 7.00001V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7.00001C16 6.44773 16.4477 6.00001 17 6.00001ZM8 8.80426V15.1958L13.1132 12L8 8.80426Z" />
</svg>
  )
};

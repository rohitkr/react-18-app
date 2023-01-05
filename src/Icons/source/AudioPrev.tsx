
import React from 'react';

export const AudioPrev: React.FunctionComponent<any> = ({
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
  <path d="M16.47 6.15201L8.47 11.152C7.84333 11.5437 7.84333 12.4563 8.47 12.848L16.47 17.848C17.136 18.2643 18 17.7854 18 17V7.00001C18 6.21458 17.136 5.73573 16.47 6.15201ZM7 6.00001C6.44772 6.00001 6 6.44773 6 7.00001V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V7.00001C8 6.44773 7.55228 6.00001 7 6.00001ZM16 8.80426V15.1958L10.8868 12L16 8.80426Z" />
</svg>
  )
};

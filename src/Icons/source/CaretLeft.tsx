
import React from 'react';

export const CaretLeft: React.FunctionComponent<any> = ({
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
  <path d="M9.13787 11.6657C8.95404 11.8444 8.95404 12.1556 9.13787 12.3343L13.3049 16.3837C13.5729 16.6441 14 16.4388 14 16.0494L14 7.95059C14 7.56125 13.5729 7.35587 13.3049 7.61632L9.13787 11.6657Z" />
</svg>
  )
};

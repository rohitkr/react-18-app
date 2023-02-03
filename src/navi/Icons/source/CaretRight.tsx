
import React from 'react';

export const CaretRight: React.FunctionComponent<any> = ({
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
  <path d="M14.8621 11.6657C15.046 11.8444 15.046 12.1556 14.8621 12.3343L10.6951 16.3837C10.4271 16.6441 10 16.4388 10 16.0494L10 7.95059C10 7.56125 10.4271 7.35587 10.6951 7.61632L14.8621 11.6657Z" />
</svg>
  )
};

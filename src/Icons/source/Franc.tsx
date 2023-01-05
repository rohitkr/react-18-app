
import React from 'react';

export const Franc: React.FunctionComponent<any> = ({
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
  <path d="M18 4C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H10V9.999L18 10C18.5523 10 19 10.4477 19 11C19 11.5523 18.5523 12 18 12L10 11.999V15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H10V19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V17H6C5.44772 17 5 16.5523 5 16C5 15.4477 5.44772 15 6 15H8V5C8 4.44772 8.44772 4 9 4L18 4Z" />
</svg>
  )
};

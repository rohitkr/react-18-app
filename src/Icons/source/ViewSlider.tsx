
import React from 'react';

export const ViewSlider: React.FunctionComponent<any> = ({
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
  <path d="M13 4C14.6569 4 16 5.34315 16 7V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V7C8 5.34315 9.34315 4 11 4H13ZM13 6H11C10.4477 6 10 6.44772 10 7V17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17V7C14 6.44772 13.5523 6 13 6ZM5 6C5.55228 6 6 6.44772 6 7V17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6ZM19 6C19.5523 6 20 6.44772 20 7V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V7C18 6.44772 18.4477 6 19 6Z" />
</svg>
  )
};

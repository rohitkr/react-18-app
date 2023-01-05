
import React from 'react';

export const ViewWeek: React.FunctionComponent<any> = ({
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
  <path d="M13 4C14.6569 4 16 5.34315 16 7V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V7C8 5.34315 9.34315 4 11 4H13ZM5 4C5.55228 4 6 4.44772 6 5V19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4ZM19 4C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20C18.4477 20 18 19.5523 18 19V5C18 4.44772 18.4477 4 19 4ZM13 6H11C10.4477 6 10 6.44772 10 7V17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17V7C14 6.44772 13.5523 6 13 6Z" />
</svg>
  )
};

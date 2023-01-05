
import React from 'react';

export const Rule: React.FunctionComponent<any> = ({
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
  <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12V13V19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19V13H18V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V13V12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" />
</svg>
  )
};


import React from 'react';

export const ViewTwoColumns: React.FunctionComponent<any> = ({
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
  <path d="M7 20C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7ZM11 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H11V6ZM17 6H13V18H17C17.5523 18 18 17.5523 18 17V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

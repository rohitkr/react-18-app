
import React from 'react';

export const CaretDown: React.FunctionComponent<any> = ({
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
  <path d="M12.3343 14.8621C12.1556 15.046 11.8444 15.046 11.6657 14.8621L7.61632 10.6951C7.35587 10.4271 7.56125 10 7.95059 10L16.0494 10C16.4388 10 16.6441 10.4271 16.3837 10.6951L12.3343 14.8621Z" />
</svg>
  )
};

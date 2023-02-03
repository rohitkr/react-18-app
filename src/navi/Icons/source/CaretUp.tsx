
import React from 'react';

export const CaretUp: React.FunctionComponent<any> = ({
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
  <path d="M12.3343 9.13787C12.1556 8.95404 11.8444 8.95404 11.6657 9.13787L7.61632 13.3049C7.35587 13.5729 7.56125 14 7.95059 14L16.0494 14C16.4388 14 16.6441 13.5729 16.3837 13.3049L12.3343 9.13787Z" />
</svg>
  )
};


import React from 'react';

export const Tv: React.FunctionComponent<any> = ({
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
  <path d="M7 18C5.34315 18 4 16.6569 4 15V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V15C20 16.6569 18.6569 18 17 18H15V19C15 19.5523 14.5523 20 14 20H10C9.44772 20 9 19.5523 9 19V18H7ZM17 6H7C6.44772 6 6 6.44772 6 7V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};


import React from 'react';

export const Label: React.FunctionComponent<any> = ({
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
  <path d="M7 6L14.0801 6C14.9559 6 15.788 6.38269 16.3579 7.04763L19.7593 11.3492C20.0802 11.7237 20.0802 12.2763 19.7593 12.6508L16.3579 16.9524C15.788 17.6173 14.9559 18 14.0801 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6ZM17.6829 12L14.8394 8.34921C14.6494 8.12756 14.3721 8 14.0801 8H7C6.44772 8 6 8.44772 6 9V15C6 15.5523 6.44772 16 7 16H14.0801C14.3721 16 14.6494 15.8724 14.8394 15.6508L17.6829 12Z" />
</svg>
  )
};

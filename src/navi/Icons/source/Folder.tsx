
import React from 'react';

export const Folder: React.FunctionComponent<any> = ({
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
  <path d="M12.4776 8H17C18.6569 8 20 9.34315 20 11V15C20 16.6569 18.6569 18 17 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H10.3837C10.6857 6 10.9716 6.13652 11.1614 6.37144L12.4776 8ZM9.90609 8H7C6.44772 8 6 8.44772 6 9V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V11C18 10.4477 17.5523 10 17 10H12C11.698 10 11.4121 9.86348 11.2222 9.62856L9.90609 8Z" />
</svg>
  )
};

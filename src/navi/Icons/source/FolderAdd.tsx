
import React from 'react';

export const FolderAdd: React.FunctionComponent<any> = ({
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
  <path d="M10.3837 6C10.6857 6 10.9716 6.13652 11.1614 6.37144L12.4776 8H19C19.5523 8 20 8.44772 20 9C20 9.55228 19.5523 10 19 10H12C11.698 10 11.4121 9.86348 11.2222 9.62856L9.90609 8H7C6.44772 8 6 8.44772 6 9V15C6 15.5523 6.44772 16 7 16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H10.3837ZM17 12C17.5523 12 18 12.4477 18 13V14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H18V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V16H15C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14H16V13C16 12.4477 16.4477 12 17 12Z" />
</svg>
  )
};

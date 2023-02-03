
import React from 'react';

export const FilterBar: React.FunctionComponent<any> = ({
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
  <path d="M5 5C4.44772 5 4 5.44772 4 6C4 6.55228 4.44772 7 5 7H19C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5H5ZM7 9C6.44772 9 6 9.44772 6 10C6 10.5523 6.44772 11 7 11H17C17.5523 11 18 10.5523 18 10C18 9.44772 17.5523 9 17 9H7ZM8 14C8 13.4477 8.44772 13 9 13H15C15.5523 13 16 13.4477 16 14C16 14.5523 15.5523 15 15 15H9C8.44772 15 8 14.5523 8 14ZM11 17C10.4477 17 10 17.4477 10 18C10 18.5523 10.4477 19 11 19H13C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17H11Z" />
</svg>
  )
};

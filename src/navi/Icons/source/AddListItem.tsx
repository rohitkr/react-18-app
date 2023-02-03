
import React from 'react';

export const AddListItem: React.FunctionComponent<any> = ({
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
  <path d="M8 6C8.55228 6 9 6.44772 9 7V9H11C11.5523 9 12 9.44772 12 10C12 10.5523 11.5523 11 11 11H9V13C9 13.5523 8.55228 14 8 14C7.44771 14 7 13.5523 7 13V11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H7V7C7 6.44772 7.44772 6 8 6ZM13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H19C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6H13ZM13 12C13 11.4477 13.4477 11 14 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H14C13.4477 13 13 12.5523 13 12ZM5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18H19C19.5523 18 20 17.5523 20 17C20 16.4477 19.5523 16 19 16H5Z" />
</svg>
  )
};


import React from 'react';

export const AlignLeft: React.FunctionComponent<any> = ({
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
  <path d="M15 17C15.5523 17 16 17.4477 16 18C16 18.5523 15.5523 19 15 19H5C4.44772 19 4 18.5523 4 18C4 17.4477 4.44772 17 5 17H15ZM19 13C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H5C4.44772 15 4 14.5523 4 14C4 13.4477 4.44772 13 5 13H19ZM15 9C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15ZM19 5C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H19Z" />
</svg>
  )
};

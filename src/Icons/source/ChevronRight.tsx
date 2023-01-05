
import React from 'react';

export const ChevronRight: React.FunctionComponent<any> = ({
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
  <path d="M9.70713 18.7074L15.7071 12.7074C16.0981 12.3164 16.0981 11.6844 15.7071 11.2934L9.70713 5.29337C9.31613 4.90237 8.68413 4.90237 8.29313 5.29337C7.90213 5.68437 7.90213 6.31637 8.29313 6.70737L13.5861 12.0004L8.29313 17.2934C7.90213 17.6844 7.90213 18.3164 8.29313 18.7074C8.48813 18.9024 8.74413 19.0004 9.00013 19.0004C9.25613 19.0004 9.51213 18.9024 9.70713 18.7074Z" />
</svg>
  )
};

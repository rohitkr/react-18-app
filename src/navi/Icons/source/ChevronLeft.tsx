
import React from 'react';

export const ChevronLeft: React.FunctionComponent<any> = ({
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
  <path d="M14.2931 18.7074L8.29313 12.7074C7.90213 12.3164 7.90213 11.6844 8.29313 11.2934L14.2931 5.29337C14.6841 4.90237 15.3161 4.90237 15.7071 5.29337C16.0981 5.68437 16.0981 6.31637 15.7071 6.70737L10.4141 12.0004L15.7071 17.2934C16.0981 17.6844 16.0981 18.3164 15.7071 18.7074C15.5121 18.9024 15.2561 19.0004 15.0001 19.0004C14.7441 19.0004 14.4881 18.9024 14.2931 18.7074Z" />
</svg>
  )
};

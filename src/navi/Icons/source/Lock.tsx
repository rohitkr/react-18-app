
import React from 'react';

export const Lock: React.FunctionComponent<any> = ({
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
  <path d="M12 4C14.1422 4 15.8911 5.68397 15.9951 7.80036L16 8L16.0009 10.171C17.1656 10.5831 18 11.6941 18 13V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V13C6 11.6937 6.83485 10.5825 8.00009 10.1707L8 8C8 5.79086 9.79086 4 12 4ZM15 12H9C8.44772 12 8 12.4477 8 13V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V13C16 12.4477 15.5523 12 15 12ZM12.1493 6.00549L12 6C10.9456 6 10.0818 6.81588 10.0055 7.85074L10 8V10H14V8C14 6.94564 13.1841 6.08183 12.1493 6.00549L12 6L12.1493 6.00549Z" />
</svg>
  )
};

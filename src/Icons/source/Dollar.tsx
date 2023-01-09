
import React from 'react';

export const Dollar: React.FunctionComponent<any> = ({
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
  <path d="M8 9.5C8 7.83345 9.29774 6.48999 11.0065 6.10875L11.0016 6.05512L11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V6L12.9935 6.10875C14.7023 6.48999 16 7.83345 16 9.5C16 10.0523 15.5523 10.5 15 10.5C14.4872 10.5 14.0645 10.114 14.0067 9.61662L14 9.5C14 8.71601 13.1408 8 12 8C10.8592 8 10 8.71601 10 9.5C10 10.2448 10.7754 10.9282 11.8311 10.9947L12 11C14.1729 11 16 12.5226 16 14.5C16 16.1643 14.7058 17.5064 13.0004 17.8897L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11.0006 17.8899C9.29473 17.5069 8 16.1646 8 14.5C8 13.9477 8.44772 13.5 9 13.5C9.51284 13.5 9.93551 13.886 9.99327 14.3834L10 14.5C10 15.284 10.8592 16 12 16C13.1408 16 14 15.284 14 14.5C14 13.7552 13.2246 13.0718 12.1689 13.0053L12 13C9.82708 13 8 11.4774 8 9.5Z" />
</svg>
  )
};
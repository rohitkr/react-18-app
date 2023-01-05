
import React from 'react';

export const ZoomIn: React.FunctionComponent<any> = ({
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
  <path d="M11 4C14.866 4 18 7.13401 18 11C18 12.5764 17.4789 14.0311 16.5996 15.2012L16.6545 15.2441L16.7071 15.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3466 20.0676 18.7794 20.0953 18.3871 19.7903L18.2929 19.7071L15.2929 16.7071C15.2587 16.6729 15.2275 16.6368 15.1993 16.5992C14.031 17.4789 12.5764 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4ZM11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6ZM11 8C11.5523 8 12 8.44772 12 9V10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H12V13C12 13.5523 11.5523 14 11 14C10.4477 14 10 13.5523 10 13V12H9C8.44772 12 8 11.5523 8 11C8 10.4477 8.44772 10 9 10H10V9C10 8.44772 10.4477 8 11 8Z" />
</svg>
  )
};

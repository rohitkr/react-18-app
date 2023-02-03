
import React from 'react';

export const Inbox: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17ZM6 17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V13H15.874C15.4464 14.6613 13.9783 15.905 12.2058 15.9948L12 16C10.2052 16 8.68648 14.8179 8.17993 13.1898L8.12602 13H6V17ZM17 6H7C6.44772 6 6 6.44772 6 7V11H9C9.51284 11 9.93551 11.386 9.99327 11.8834L10 12C10 13.1046 10.8954 14 12 14C13.0544 14 13.9182 13.1841 13.9945 12.1493L14.0067 11.8834C14.0601 11.4243 14.4243 11.06 14.8834 11.0067L15 11H18V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

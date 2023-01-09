
import React from 'react';

export const Camera: React.FunctionComponent<any> = ({
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
  <path d="M13.1175 5C14.2379 5 15.265 5.62437 15.7808 6.61905L16.217 7.46032C16.3889 7.79188 16.7312 8 17.1047 8H17.4444C18.8558 8 20 9.14416 20 10.5556V16C20 17.6569 18.6569 19 17 19H7C5.34315 19 4 17.6569 4 16V10.5556C4 9.14416 5.14416 8 6.55556 8H6.89527C7.26875 8 7.61111 7.79188 7.78303 7.46032L8.21924 6.61905C8.735 5.62437 9.76206 5 10.8825 5H13.1175ZM13.1175 7H10.8825C10.509 7 10.1667 7.20812 9.99475 7.53968L9.55854 8.38095C9.04278 9.37563 8.01571 10 6.89527 10H6.55556C6.24873 10 6 10.2487 6 10.5556V16C6 16.5523 6.44772 17 7 17H17C17.5523 17 18 16.5523 18 16V10.5556C18 10.2487 17.7513 10 17.4444 10H17.1047C15.9843 10 14.9572 9.37563 14.4415 8.38095L14.0052 7.53968C13.8333 7.20812 13.491 7 13.1175 7ZM12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10Z" />
</svg>
  )
};
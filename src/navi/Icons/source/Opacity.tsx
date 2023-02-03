
import React from 'react';

export const Opacity: React.FunctionComponent<any> = ({
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
  <path d="M18 13.6C18 11.2436 16 8.04359 12 4C8 8.04359 6 11.2436 6 13.6C6 17.1346 8.68629 20 12 20C15.3137 20 18 17.1346 18 13.6ZM12 6.904L12.301 7.23889C14.7901 10.042 16 12.2164 16 13.6C16 13.7354 15.9945 13.8692 15.9837 14.0011H8.01632C8.00552 13.8692 8 13.7354 8 13.6C8 12.167 9.29785 9.88569 11.9706 6.93615L12 6.904Z" />
</svg>
  )
};

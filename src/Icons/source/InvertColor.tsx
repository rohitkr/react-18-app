
import React from 'react';

export const InvertColor: React.FunctionComponent<any> = ({
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
  <path d="M18 13.6C18 11.2436 16 8.04359 12 4C8 8.04359 6 11.2436 6 13.6C6 17.1346 8.68629 20 12 20L12.22 19.9958C15.4318 19.8723 18 17.0561 18 13.6ZM12 6.904V18C9.82074 18 8 16.0579 8 13.6C8 12.167 9.29785 9.88569 11.9706 6.93615L12 6.904Z" />
</svg>
  )
};

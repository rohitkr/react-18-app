
import React from 'react';

export const Play: React.FunctionComponent<any> = ({
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
  <path d="M7 6.00151C7 5.22972 7.83721 4.74884 8.50387 5.13773L18.5039 11.1377C19.1654 11.5236 19.1654 12.4794 18.5039 12.8653L8.50387 18.8653C7.83721 19.2542 7 18.7733 7 18.0015V6.00151ZM9 7.74254V16.2605L16.0154 12.0015L9 7.74254Z" />
</svg>
  )
};

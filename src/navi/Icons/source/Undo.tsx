
import React from 'react';

export const Undo: React.FunctionComponent<any> = ({
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
  <path d="M9 16C9.85217 16 10.2974 15.0145 9.78323 14.3775L9.70711 14.2929L8.43168 13.0169C9.42641 12.4078 10.8639 12 12.5 12C15.5195 12 17.8627 13.3889 17.9942 14.8692L18 15C18 15.5523 18.4477 16 19 16C19.5523 16 20 15.5523 20 15C20 12.1099 16.5714 9.99999 12.5 9.99999C10.3459 9.99999 8.37181 10.5906 6.99017 11.5749L5.70711 10.2929C5.10453 9.69031 4.09282 10.0723 4.00598 10.8864L4 11V15C4 15.5128 4.38604 15.9355 4.88338 15.9933L5 16H9Z" />
</svg>
  )
};

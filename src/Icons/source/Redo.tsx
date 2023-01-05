
import React from 'react';

export const Redo: React.FunctionComponent<any> = ({
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
  <path d="M15 16C14.1478 16 13.7026 15.0145 14.2168 14.3775L14.2929 14.2929L15.5683 13.0169C14.5736 12.4078 13.1361 12 11.5 12C8.48051 12 6.13725 13.3889 6.00582 14.8692L6 15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15C4 12.1099 7.42859 10 11.5 10C13.6541 10 15.6282 10.5906 17.0098 11.5749L18.2929 10.2929C18.8955 9.69032 19.9072 10.0723 19.994 10.8864L20 11V15C20 15.5128 19.614 15.9355 19.1166 15.9933L19 16H15Z" />
</svg>
  )
};

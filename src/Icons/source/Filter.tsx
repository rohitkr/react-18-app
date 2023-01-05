
import React from 'react';

export const Filter: React.FunctionComponent<any> = ({
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
  <path d="M8.99999 12.3205L4.18626 5.58124C3.7135 4.91937 4.18662 4 4.99999 4H19C19.8134 4 20.2865 4.91937 19.8137 5.58124L15 12.3205V17C15 17.3788 14.786 17.725 14.4472 17.8944L10.4472 19.8944C9.78231 20.2269 8.99999 19.7434 8.99999 19V12.3205ZM6.94318 6L10.8137 11.4188C10.9349 11.5884 11 11.7916 11 12V17.382L13 16.382V12C13 11.7916 13.0651 11.5884 13.1863 11.4188L17.0568 6H6.94318Z" />
</svg>
  )
};

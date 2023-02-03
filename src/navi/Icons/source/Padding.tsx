
import React from 'react';

export const Padding: React.FunctionComponent<any> = ({
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
  <path d="M6 4H18L16.2929 5.70711C16.1054 5.89464 15.851 6 15.5858 6H8.41421C8.149 6 7.89464 5.89464 7.70711 5.70711L6 4ZM5.70711 7.70711C5.89464 7.89464 6 8.149 6 8.41421V15.5858C6 15.851 5.89464 16.1054 5.70711 16.2929L4 18V6L5.70711 7.70711ZM18 8.41421C18 8.149 18.1054 7.89464 18.2929 7.70711L20 6V18L18.2929 16.2929C18.1054 16.1054 18 15.851 18 15.5858V8.41421ZM8 9C8 8.44772 8.44772 8 9 8H15C15.5523 8 16 8.44772 16 9V15C16 15.5523 15.5523 16 15 16H9C8.44772 16 8 15.5523 8 15V9ZM18 20H6L7.70711 18.2929C7.89464 18.1054 8.149 18 8.41421 18H15.5858C15.851 18 16.1054 18.1054 16.2929 18.2929L18 20Z" />
</svg>
  )
};

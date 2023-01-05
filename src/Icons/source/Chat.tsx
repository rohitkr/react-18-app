
import React from 'react';

export const Chat: React.FunctionComponent<any> = ({
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
  <path d="M10.3508 15.9985L5.6247 19.779C4.96993 20.3028 4 19.8366 4 18.9982V6.99972C4 5.34302 5.34315 4 7 4H17C18.6569 4 20 5.34302 20 6.99972V12.9988C20 14.6555 18.6569 15.9985 17 15.9985H10.3508ZM6 16.9178L9.37531 14.2178C9.55262 14.076 9.77293 13.9987 10 13.9987H17C17.5523 13.9987 18 13.551 18 12.9988V6.99972C18 6.44749 17.5523 5.99981 17 5.99981H7C6.44772 5.99981 6 6.44749 6 6.99972V16.9178Z" />
</svg>
  )
};

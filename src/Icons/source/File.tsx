
import React from 'react';

export const File: React.FunctionComponent<any> = ({
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
  <path d="M13 4C13.2652 4 13.5196 4.10536 13.7071 4.29289L17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9V17C18 18.6569 16.6569 20 15 20H9C7.34315 20 6 18.6569 6 17V7C6 5.34315 7.34315 4 9 4H13ZM11.999 6H9C8.44772 6 8 6.44772 8 7V17C8 17.5523 8.44772 18 9 18H15C15.5523 18 16 17.5523 16 17V10H13C12.4872 10 12.0645 9.61396 12.0067 9.11662L12 9L11.999 6Z" />
</svg>
  )
};

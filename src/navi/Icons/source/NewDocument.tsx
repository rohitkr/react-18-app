
import React from 'react';

export const NewDocument: React.FunctionComponent<any> = ({
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
  <path d="M14 4C14.2652 4 14.5196 4.10536 14.7071 4.29289L18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9V17C19 18.6569 17.6569 20 16 20H10C8.34315 20 7 18.6569 7 17V7C7 5.34315 8.34315 4 10 4H14ZM12.999 6H10C9.44772 6 9 6.44772 9 7V17C9 17.5523 9.44772 18 10 18H16C16.5523 18 17 17.5523 17 17V10H14C13.4872 10 13.0645 9.61396 13.0067 9.11662L13 9L12.999 6Z" />
</svg>
  )
};

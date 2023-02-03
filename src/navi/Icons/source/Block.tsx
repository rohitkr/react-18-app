
import React from 'react';

export const Block: React.FunctionComponent<any> = ({
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
  <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM16.8906 8.52332L8.52332 16.8906C9.50417 17.5892 10.7041 18 12 18C15.3137 18 18 15.3137 18 12C18 10.7041 17.5892 9.50417 16.8906 8.52332ZM12 6C8.68629 6 6 8.68629 6 12C6 13.2959 6.41083 14.4958 7.10935 15.4767L15.4767 7.10935C14.4958 6.41083 13.2959 6 12 6Z" />
</svg>
  )
};

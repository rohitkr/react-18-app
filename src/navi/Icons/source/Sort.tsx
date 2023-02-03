
import React from 'react';

export const Sort: React.FunctionComponent<any> = ({
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
  <path d="M12.6129 4.2097C12.2206 3.90468 11.6534 3.93241 11.2929 4.29289L7.2929 8.29289L7.21678 8.37747C6.70257 9.01449 7.14784 10 8.00001 10H16L16.1136 9.99402C16.9277 9.90718 17.3097 8.89547 16.7071 8.29289L12.7071 4.29289L12.6129 4.2097ZM16.7071 15.7071C17.3371 15.0771 16.8909 14 16 14H8.00001C7.1091 14 6.66293 15.0771 7.2929 15.7071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L16.7071 15.7071Z" />
</svg>
  )
};

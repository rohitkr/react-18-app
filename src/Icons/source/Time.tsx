
import React from 'react';

export const Time: React.FunctionComponent<any> = ({
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
  <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 8C12.5128 8 12.9355 8.38604 12.9933 8.88338L13 9V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3466 15.0676 13.7794 15.0953 13.3871 14.7903L13.2929 14.7071L11.2929 12.7071C11.1366 12.5508 11.0374 12.3481 11.0087 12.1314L11 12V9C11 8.44772 11.4477 8 12 8Z" />
</svg>
  )
};

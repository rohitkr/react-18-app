
import React from 'react';

export const Edit: React.FunctionComponent<any> = ({
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
  <path d="M19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18H19ZM8.29289 11.2929L15.2929 4.29289C15.6534 3.93241 16.2206 3.90468 16.6129 4.2097L16.7071 4.29289L19.7071 7.29289C20.0676 7.65338 20.0953 8.22061 19.7903 8.6129L19.7071 8.70711L12.7071 15.7071C12.5508 15.8634 12.3481 15.9626 12.1314 15.9913L12 16H9C8.48716 16 8.06449 15.614 8.00673 15.1166L8 15V12C8 11.779 8.07316 11.5655 8.20608 11.392L8.29289 11.2929L15.2929 4.29289L8.29289 11.2929ZM16 6.41421L10 12.4142V14H11.5858L17.5858 8L16 6.41421Z" />
</svg>
  )
};
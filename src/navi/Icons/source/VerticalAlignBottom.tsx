
import React from 'react';

export const VerticalAlignBottom: React.FunctionComponent<any> = ({
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
  <path d="M19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18H19ZM12 16L11.918 15.996L11.7993 15.9798L11.6879 15.9503L11.5768 15.9063L11.4793 15.854L11.4048 15.8037L11.2929 15.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.65338 10.9324 9.22061 10.9047 9.6129 11.2097L9.70711 11.2929L11 12.585V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.585L14.2929 11.2929C14.6534 10.9324 15.2206 10.9047 15.6129 11.2097L15.7071 11.2929C16.0676 11.6534 16.0953 12.2206 15.7903 12.6129L15.7071 12.7071L12.7071 15.7071L12.6631 15.7485L12.5953 15.8037L12.4841 15.8753L12.4231 15.9063L12.3417 15.9401L12.266 15.9642L12.1175 15.9932L12 16Z" />
</svg>
  )
};

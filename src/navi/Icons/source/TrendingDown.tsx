
import React from 'react';

export const TrendingDown: React.FunctionComponent<any> = ({
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
  <path d="M5.6129 7.2097L5.70711 7.29289L10 11.585L12.2929 9.29289C12.6534 8.93241 13.2206 8.90468 13.6129 9.2097L13.7071 9.29289L17 12.585L18.2929 11.2929C18.8955 10.6903 19.9072 11.0723 19.994 11.8864L20 12V16C20 16.5128 19.614 16.9355 19.1166 16.9933L19 17H15C14.1478 17 13.7026 16.0145 14.2168 15.3775L14.2929 15.2929L15.585 14L13 11.415L10.7071 13.7071C10.3466 14.0676 9.77939 14.0953 9.3871 13.7903L9.29289 13.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289C4.65338 6.93241 5.22061 6.90468 5.6129 7.2097Z" />
</svg>
  )
};

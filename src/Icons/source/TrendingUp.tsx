
import React from 'react';

export const TrendingUp: React.FunctionComponent<any> = ({
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
  <path d="M5.6129 16.7903L5.70711 16.7071L10 12.415L12.2929 14.7071C12.6534 15.0676 13.2206 15.0953 13.6129 14.7903L13.7071 14.7071L17 11.415L18.2929 12.7071C18.8955 13.3097 19.9072 12.9277 19.994 12.1136L20 12V8C20 7.48716 19.614 7.06449 19.1166 7.00673L19 7H15C14.1478 7 13.7026 7.98551 14.2168 8.62253L14.2929 8.70711L15.585 10L13 12.585L10.7071 10.2929C10.3466 9.93241 9.77939 9.90468 9.3871 10.2097L9.29289 10.2929L4.29289 15.2929C3.90237 15.6834 3.90237 16.3166 4.29289 16.7071C4.65338 17.0676 5.22061 17.0953 5.6129 16.7903Z" />
</svg>
  )
};

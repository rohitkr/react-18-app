
import React from 'react';

export const Archive: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17ZM18 10H6V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V10ZM12.1168 16.9933L12.0001 17L11.916 16.996L11.7994 16.9798L11.688 16.9503L11.5769 16.9063L11.4794 16.854L11.4049 16.8037L11.293 16.7071L9.2929 14.7071C8.90237 14.3166 8.90237 13.6834 9.2929 13.2929C9.65339 12.9324 10.2206 12.9047 10.6129 13.2097L10.7072 13.2929L11 13.585L11.0001 12C11.0001 11.4872 11.3861 11.0645 11.8835 11.0067L12.0001 11C12.5524 11 13.0001 11.4477 13.0001 12L13 13.585L13.2931 13.2929C13.6535 12.9324 14.2208 12.9047 14.6131 13.2097L14.7073 13.2929C15.0678 13.6534 15.0955 14.2206 14.7905 14.6129L14.7073 14.7071L12.7072 16.7071L12.6217 16.7834L12.5519 16.8341L12.454 16.8913L12.3401 16.9407L12.2661 16.9642L12.1168 16.9933ZM17 6H7C6.44772 6 6 6.44772 6 7V8H18V7C18 6.44772 17.5523 6 17 6Z" />
</svg>
  )
};

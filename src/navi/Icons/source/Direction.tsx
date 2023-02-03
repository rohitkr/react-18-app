
import React from 'react';

export const Direction: React.FunctionComponent<any> = ({
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
  <path d="M13.5552 4.58494L13.6684 4.69109L19.3089 10.3316C20.2304 11.253 20.2304 12.747 19.3089 13.6684L13.6684 19.3089C12.747 20.2304 11.253 20.2304 10.3316 19.3089L4.69109 13.6684C3.76964 12.747 3.76964 11.253 4.69109 10.3316L10.3316 4.69109C11.2162 3.8065 12.6284 3.77111 13.5552 4.58494ZM13.7071 9.29289L13.6129 9.2097C13.2533 8.9301 12.7467 8.9301 12.3871 9.2097L12.2929 9.29289L12.2097 9.3871C11.9301 9.7467 11.9301 10.2533 12.2097 10.6129L12.2929 10.7071L12.585 11H9L8.88338 11.0067C8.4243 11.06 8.06005 11.4243 8.00673 11.8834L8 12V14L8.00673 14.1166C8.06449 14.614 8.48716 15 9 15C9.51284 15 9.93551 14.614 9.99327 14.1166L10 14V13H12.584L12.2929 13.2929L12.2097 13.3871C11.9047 13.7794 11.9324 14.3466 12.2929 14.7071C12.6534 15.0676 13.2206 15.0953 13.6129 14.7903L13.7071 14.7071L15.7071 12.7071L15.7903 12.6129C16.0699 12.2533 16.0699 11.7467 15.7903 11.3871L15.7071 11.2929L13.7071 9.29289L13.6129 9.2097L13.7071 9.29289Z" />
</svg>
  )
};


import React from 'react';

export const SelectAll: React.FunctionComponent<any> = ({
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
  <path d="M19.1166 4.00673L19 4H17L16.8834 4.00673C16.386 4.06449 16 4.48716 16 5C16 5.51284 16.386 5.93551 16.8834 5.99327L17 6H18V7L18.0067 7.11662C18.06 7.5757 18.4243 7.93995 18.8834 7.99327L19 8L19.1166 7.99327C19.5757 7.93995 19.94 7.5757 19.9933 7.11662L20 7V5L19.9933 4.88338C19.94 4.4243 19.5757 4.06005 19.1166 4.00673ZM15.9945 9.85074C15.9182 8.81588 15.0544 8 14 8H10L9.85074 8.00549C8.81588 8.08183 8 8.94564 8 10V14L8.00549 14.1493C8.08183 15.1841 8.94564 16 10 16H14L14.1493 15.9945C15.1841 15.9182 16 15.0544 16 14V10L15.9945 9.85074ZM5.11662 16.0067L5 16L4.88338 16.0067C4.4243 16.06 4.06005 16.4243 4.00673 16.8834L4 17V19L4.00673 19.1166C4.06005 19.5757 4.4243 19.94 4.88338 19.9933L5 20H7L7.11662 19.9933C7.61396 19.9355 8 19.5128 8 19C8 18.4872 7.61396 18.0645 7.11662 18.0067L7 18H6V17L5.99327 16.8834C5.93995 16.4243 5.5757 16.06 5.11662 16.0067ZM19.1166 16.0067L19 16L18.8834 16.0067L18.7707 16.0264C18.3657 16.1214 18.0556 16.4626 18.0067 16.8834L18 17V18H17L16.8834 18.0067L16.7707 18.0264C16.3289 18.1301 16 18.5266 16 19C16 19.5128 16.386 19.9355 16.8834 19.9933L17 20H19L19.1166 19.9933L19.2293 19.9736C19.6343 19.8786 19.9444 19.5374 19.9933 19.1166L20 19V17L19.9933 16.8834L19.9736 16.7707C19.8786 16.3657 19.5374 16.0556 19.1166 16.0067ZM13 18C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19C10 18.4477 10.4477 18 11 18H13ZM5 10C5.55228 10 6 10.4477 6 11V13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13V11C4 10.4477 4.44772 10 5 10ZM20 11C20 10.4477 19.5523 10 19 10C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14C19.5523 14 20 13.5523 20 13V11ZM14 10H10V14H14V10ZM7 4L7.11662 4.00673C7.61396 4.06449 8 4.48716 8 5C8 5.47339 7.67107 5.86995 7.22929 5.97359L7.11662 5.99327L7 6H6V7L5.99327 7.11662C5.94439 7.53745 5.63425 7.87858 5.22929 7.97359L5.11662 7.99327L5 8L4.88338 7.99327C4.46255 7.94439 4.12142 7.63425 4.02641 7.22929L4.00673 7.11662L4 7V5L4.00673 4.88338C4.05561 4.46255 4.36575 4.12142 4.77071 4.02641L4.88338 4.00673L5 4H7ZM14 5C14 4.44772 13.5523 4 13 4H11C10.4477 4 10 4.44772 10 5C10 5.55228 10.4477 6 11 6H13C13.5523 6 14 5.55228 14 5Z" />
</svg>
  )
};

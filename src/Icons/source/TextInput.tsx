
import React from 'react';

export const TextInput: React.FunctionComponent<any> = ({
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
  <path d="M6 5C6 4.44772 6.44772 4 7 4H8C8.36429 4 8.70583 4.09739 9 4.26756C9.29417 4.09739 9.63571 4 10 4H11C11.5523 4 12 4.44772 12 5C12 5.55228 11.5523 6 11 6H10V8H19C19.5523 8 20 8.44772 20 9V15C20 15.5523 19.5523 16 19 16H10V17.983L10.9831 17.9664C11.5353 17.957 11.9905 18.3971 11.9999 18.9493C12.0092 19.5015 11.5691 19.9567 11.0169 19.9661L10.0338 19.9827C9.6572 19.989 9.30349 19.891 9 19.7154C8.69651 19.891 8.3428 19.989 7.96623 19.9827L6.98311 19.9661C6.43091 19.9567 5.99082 19.5015 6.00015 18.9493C6.00947 18.3971 6.46469 17.957 7.01689 17.9664L8 17.983L8 16H5C4.44772 16 4 15.5523 4 15V9C4 8.44772 4.44772 8 5 8H8L8 6H7C6.44772 6 6 5.55228 6 5ZM8 10H6V14H8L8 10ZM10 14H18V10H10V14Z" />
</svg>
  )
};
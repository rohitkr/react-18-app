
import React from 'react';

export const Functions: React.FunctionComponent<any> = ({
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
  <path d="M16 4C16.5523 4 17 4.44772 17 5C17 5.51284 16.614 5.93551 16.1166 5.99327L16 6H10.174L14.7593 11.3492C15.0535 11.6925 15.078 12.1854 14.8328 12.5537L14.7593 12.6508L10.173 18H16C16.5128 18 16.9355 18.386 16.9933 18.8834L17 19C17 19.5128 16.614 19.9355 16.1166 19.9933L16 20H7.99999C7.18279 20 6.72555 19.0831 7.17393 18.4357L7.24074 18.3492L12.682 12L7.24074 5.65079C6.70891 5.03032 7.10748 4.08647 7.89084 4.00557L7.99999 4H16Z" />
</svg>
  )
};

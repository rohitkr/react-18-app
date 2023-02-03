
import React from 'react';

export const Plane: React.FunctionComponent<any> = ({
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
  <path d="M19.2 4C18.6878 4 18.1965 4.20348 17.8343 4.56569L15.5203 6.87971C15.3216 7.07842 15.0332 7.1583 14.7606 7.09014L5.6 4.8L4.78485 5.61515C4.47243 5.92757 4.47243 6.4341 4.78485 6.74652C4.84565 6.80733 4.91585 6.85793 4.99276 6.89638L12 10.4L8.8 13.6H5.29443C4.99141 13.6 4.7144 13.7712 4.57889 14.0422L4 15.2L7.2 16.8L8.8 20L9.95777 19.4211C10.2288 19.2856 10.4 19.0086 10.4 18.7056V15.2L13.6 12L17.1036 19.0072C17.3012 19.4024 17.7817 19.5626 18.1769 19.365C18.2538 19.3266 18.324 19.276 18.3848 19.2152L19.2 18.4L16.9099 9.23943C16.8417 8.96681 16.9216 8.67842 17.1203 8.47971L19.4343 6.16569C19.7965 5.80348 20 5.31223 20 4.8C20 4.35817 19.6418 4 19.2 4Z" />
</svg>
  )
};

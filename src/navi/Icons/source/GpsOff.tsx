
import React from 'react';

export const GpsOff: React.FunctionComponent<any> = ({
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
  <path d="M6.63604 6.63604L17.364 17.364C17.7545 17.7545 17.7545 18.3877 17.364 18.7782C16.9734 19.1687 16.3403 19.1687 15.9497 18.7782L14.586 17.4157C14.0913 17.6523 13.5591 17.8232 13.0008 17.9169L13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19L11.0002 17.9171C8.48776 17.4957 6.50475 15.5128 6.08304 13.0005L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L6.08287 11.0005C6.17658 10.4416 6.34755 9.90896 6.58443 9.41383L5.22183 8.05025C4.8313 7.65973 4.8313 7.02656 5.22183 6.63604C5.61235 6.24551 6.24551 6.24551 6.63604 6.63604ZM8 12C8 14.2091 9.79086 16 12 16C12.3579 16 12.7049 15.953 13.035 15.8648L8.1352 10.965C8.04701 11.2951 8 11.6421 8 12ZM12 4C12.5523 4 13 4.44772 13 5L13.0008 6.08309C15.5128 6.50488 17.4954 8.48757 17.917 10.9996L19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13L17.917 13.0004C17.8232 13.559 17.6523 14.0915 17.4154 14.5864L15.8646 13.0359C15.9529 12.7055 16 12.3582 16 12C16 9.79086 14.2091 8 12 8C11.6418 8 11.2945 8.04709 10.9641 8.13543L9.41359 6.58454C9.90869 6.34766 10.4413 6.17666 11.0002 6.08293L11 5C11 4.44772 11.4477 4 12 4Z" />
</svg>
  )
};
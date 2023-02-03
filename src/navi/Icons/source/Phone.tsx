
import React from 'react';

export const Phone: React.FunctionComponent<any> = ({
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
  <path d="M10.3162 10.9487C10.7246 10.8126 11 10.4304 11 10V7C11 5.34315 9.65685 4 8 4H5C4.44772 4 4 4.44772 4 5C4 12.8547 11.1453 20 19 20C19.5523 20 20 19.5523 20 19V16C20 14.3431 18.6569 13 17 13H14C13.5696 13 13.1874 13.2754 13.0513 13.6838L12.3043 15.9248C10.7446 14.9124 9.37501 13.582 8.31438 12.0522L8.07516 11.6957L10.3162 10.9487ZM14.7208 15H17C17.5523 15 18 15.4477 18 16V17.9546C16.7978 17.8457 15.621 17.5439 14.503 17.0828L14.0866 16.9024L14.7208 15ZM6.04542 6H8C8.55228 6 9 6.44772 9 7V9.27924L7.09757 9.91338C6.53454 8.67278 6.16796 7.35246 6.04542 6Z" />
</svg>
  )
};


import React from 'react';

export const Button: React.FunctionComponent<any> = ({
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
  <path d="M6 6C4.89543 6 4 6.89543 4 8V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V8C20 6.89543 19.1046 6 18 6H6ZM6 14.3C6 14.4105 6.08954 14.5 6.2 14.5H8.0708C9.02672 14.5 9.61745 13.9067 9.61745 13.084C9.61745 12.3895 9.17421 11.9316 8.62157 11.8941C8.60673 11.893 8.59494 11.8808 8.59494 11.866C8.59494 11.853 8.60402 11.8417 8.61664 11.8386C9.11373 11.7168 9.4456 11.2939 9.4456 10.75C9.4456 9.98828 8.91287 9.5 7.90754 9.5H6.2C6.08954 9.5 6 9.58954 6 9.7V14.3ZM7.39436 13.416C7.2839 13.416 7.19436 13.3265 7.19436 13.216V12.5613C7.19436 12.4509 7.2839 12.3613 7.39436 12.3613H7.77006C8.13309 12.3613 8.35435 12.5566 8.35435 12.9082C8.35435 13.2427 8.15458 13.416 7.75288 13.416H7.39436ZM7.39436 11.5215C7.2839 11.5215 7.19436 11.4319 7.19436 11.3215V10.7645C7.19436 10.654 7.2839 10.5645 7.39436 10.5645H7.70132C7.99776 10.5645 8.21687 10.7354 8.21687 11.043C8.21687 11.3506 7.99776 11.5215 7.68414 11.5215H7.39436ZM9.92034 10.3938C9.92034 10.5042 10.0099 10.5938 10.1203 10.5938H11.0436C11.154 10.5938 11.2436 10.6833 11.2436 10.7938V14.3C11.2436 14.4105 11.3331 14.5 11.4436 14.5H12.2208C12.3312 14.5 12.4208 14.4105 12.4208 14.3V10.7938C12.4208 10.6833 12.5103 10.5938 12.6208 10.5938H13.544C13.6545 10.5938 13.744 10.5042 13.744 10.3938V9.7C13.744 9.58954 13.6545 9.5 13.544 9.5H10.1203C10.0099 9.5 9.92034 9.58954 9.92034 9.7V10.3938ZM17.8 9.5C17.9105 9.5 18 9.58954 18 9.7V14.3C18 14.4105 17.9105 14.5 17.8 14.5H17.116C17.046 14.5 16.9811 14.4634 16.9449 14.4035L15.4185 11.881C15.4155 11.8761 15.4101 11.873 15.4044 11.873C15.3953 11.873 15.3879 11.8804 15.3879 11.8895V14.3C15.3879 14.4105 15.2983 14.5 15.1879 14.5H14.3935C14.2831 14.5 14.1935 14.4105 14.1935 14.3V9.7C14.1935 9.58954 14.2831 9.5 14.3935 9.5H15.094C15.1643 9.5 15.2295 9.53699 15.2656 9.59741L16.7649 12.1065C16.7688 12.1131 16.776 12.1172 16.7837 12.1172C16.7958 12.1172 16.8056 12.1074 16.8056 12.0953V9.7C16.8056 9.58954 16.8952 9.5 17.0056 9.5H17.8Z" />
</svg>
  )
};

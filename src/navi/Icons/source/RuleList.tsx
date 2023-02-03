
import React from 'react';

export const RuleList: React.FunctionComponent<any> = ({
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
  <path d="M4 6C4 4.89543 4.89543 4 6 4H7H13H15C16.1046 4 17 4.89543 17 6V15H19C19.5523 15 20 15.4477 20 16V18C20 19.1046 19.1046 20 18 20H17H16H9C7.89543 20 7 19.1046 7 18V9H5C4.44772 9 4 8.55228 4 8V6ZM13 9H9V18H15V16V6H14V8C14 8.55228 13.5523 9 13 9ZM17 18H18V17H17V18ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H12.6H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H11ZM10 15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15C14 15.5523 13.5523 16 13 16H12.6H11C10.4477 16 10 15.5523 10 15ZM12 6H6V7H12V6Z" />
</svg>
  )
};

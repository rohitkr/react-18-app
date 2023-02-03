
import React from 'react';

export const Bookmark: React.FunctionComponent<any> = ({
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
  <path d="M7.65079 19.7573C7.00212 20.3133 6 19.8524 6 18.9982V6.99971C6 5.34302 7.34315 4 9 4H15C16.6569 4 18 5.34302 18 6.99971V18.9982C18 19.8524 16.9979 20.3133 16.3492 19.7573L12 16.3157L7.65079 19.7573ZM16 16.8242V6.99971C16 6.44748 15.5523 5.99981 15 5.99981H9C8.44772 5.99981 8 6.44748 8 6.99971V16.8242L11.3492 14.2396C11.7237 13.9186 12.2763 13.9186 12.6508 14.2396L16 16.8242Z" />
</svg>
  )
};

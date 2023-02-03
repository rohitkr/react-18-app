
import React from 'react';

export const FormatItalic: React.FunctionComponent<any> = ({
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
  <path d="M18 4C18.5523 4 19 4.44772 19 5C19 5.55228 18.5523 6 18 6H14.754L11.325 18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H6C5.44772 20 5 19.5523 5 19C5 18.4477 5.44772 18 6 18H9.245L12.674 6H10C9.44772 6 9 5.55228 9 5C9 4.44772 9.44772 4 10 4H18Z" />
</svg>
  )
};


import React from 'react';

export const Keyboard: React.FunctionComponent<any> = ({
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
  <path d="M18 7C19.1046 7 20 7.89543 20 9V15C20 16.1046 19.1046 17 18 17H6C4.89543 17 4 16.1046 4 15V9C4 7.89543 4.89543 7 6 7H18ZM8 13H6V15H8V13ZM18 13H16V15H18V13ZM15 13H9V15H15V13ZM8 9H6V11H8V9ZM11 9H9V11H11V9ZM14 9H12V11H14V9ZM18 9H15V11H18V9Z" />
</svg>
  )
};

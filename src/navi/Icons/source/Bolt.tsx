
import React from 'react';

export const Bolt: React.FunctionComponent<any> = ({
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
  <path d="M11.2501 15.1995H6.75099C6.17225 15.1995 5.81167 14.5298 6.10328 13.9966L11.3523 4.39819C11.738 3.69296 12.7499 3.98477 12.7499 4.80122V8.80054H17.249C17.8277 8.80054 18.1883 9.4702 17.8967 10.0034L12.6477 19.6018C12.262 20.307 11.2501 20.0152 11.2501 19.1988V15.1995Z" />
</svg>
  )
};

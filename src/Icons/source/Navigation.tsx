
import React from 'react';

export const Navigation: React.FunctionComponent<any> = ({
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
  <path d="M7.12415 19.8914C6.51082 20.2653 5.79746 19.6094 6.0535 18.907L11.3013 4.50994C11.5491 3.83002 12.4509 3.83002 12.6987 4.50994L17.9465 18.907C18.2025 19.6094 17.4892 20.2653 16.8758 19.8914L12 16.9188L7.12415 19.8914ZM10.9589 15.2111C11.5982 14.8213 12.4018 14.8213 13.0411 15.2111L14.879 16.3316L12 8.4331L9.12096 16.3316L10.9589 15.2111Z" />
</svg>
  )
};

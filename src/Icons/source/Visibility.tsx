
import React from 'react';

export const Visibility: React.FunctionComponent<any> = ({
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
  <path d="M12 6C15.1993 6 17.7551 7.78386 19.5962 11.2147L19.7668 11.5412L20 12L19.7668 12.4588C17.9142 16.1029 15.2993 18 12 18C8.80071 18 6.24492 16.2161 4.40375 12.7853L4.23324 12.4588L4 12L4.23324 11.5412C6.08581 7.89709 8.70074 6 12 6ZM12 8C9.73671 8 7.89057 9.1877 6.4104 11.7232L6.25321 12L6.4104 12.2768C7.89057 14.8123 9.73671 16 12 16C14.3441 16 16.2408 14.7259 17.7468 12C16.2408 9.27405 14.3441 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z" />
</svg>
  )
};

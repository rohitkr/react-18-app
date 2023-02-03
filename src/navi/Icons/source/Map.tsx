
import React from 'react';

export const Map: React.FunctionComponent<any> = ({
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
  <path d="M12 4C15.866 4 19 7.18858 19 11.1219C19 13.7112 16.9045 16.4482 12.8016 19.4281L12.445 19.6841L12 20L11.555 19.6841C7.21699 16.6047 5 13.7852 5 11.1219C5 7.18858 8.13401 4 12 4ZM12 6C9.24638 6 7 8.28549 7 11.1219C7 12.7706 8.48662 14.8514 11.6851 17.297L12 17.5348L12.3149 17.297C15.5134 14.8514 17 12.7706 17 11.1219C17 8.28549 14.7536 6 12 6ZM12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9Z" />
</svg>
  )
};

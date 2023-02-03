
import React from 'react';

export const FolderMove: React.FunctionComponent<any> = ({
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
  <path d="M11.1614 6.37144C10.9716 6.13652 10.6857 6 10.3837 6H7C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H7C6.44772 16 6 15.5523 6 15V9C6 8.44772 6.44772 8 7 8H9.90609L11.2222 9.62856C11.4121 9.86348 11.698 10 12 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H12.4776L11.1614 6.37144ZM16.2929 12.2929C16.6834 11.9024 17.3166 11.9024 17.7071 12.2929L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071L17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929L16.5858 16H14C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14H16.5858L16.2929 13.7071C15.9024 13.3166 15.9024 12.6834 16.2929 12.2929Z" />
</svg>
  )
};
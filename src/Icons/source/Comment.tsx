
import React from 'react';

export const Comment: React.FunctionComponent<any> = ({
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
  <path d="M17 4C18.6569 4 20 5.34315 20 7V15C20 16.6569 18.6569 18 17 18H14.4142L12.7071 19.7071C12.3166 20.0976 11.6834 20.0976 11.2929 19.7071L9.58579 18H7C5.34315 18 4 16.6569 4 15V7C4 5.34315 5.34315 4 7 4H17ZM17 6H7C6.44772 6 6 6.44772 6 7V15C6 15.5523 6.44772 16 7 16H10C10.2652 16 10.5196 16.1054 10.7071 16.2929L12 17.5858L13.2929 16.2929C13.4804 16.1054 13.7348 16 14 16H17C17.5523 16 18 15.5523 18 15V7C18 6.44772 17.5523 6 17 6ZM15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13C8 12.4477 8.44772 12 9 12H15ZM15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H9C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8H15Z" />
</svg>
  )
};

import React from 'react';

export const FormatIndentIncrease: React.FunctionComponent<any> = ({
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
  <path d="M19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18H19ZM5.70711 8.29289L8.70711 11.2929C9.09763 11.6834 9.09763 12.3166 8.70711 12.7071L5.70711 15.7071C5.07714 16.3371 4 15.8909 4 15V9C4 8.1091 5.07714 7.66293 5.70711 8.29289ZM19 13C19.5523 13 20 13.4477 20 14C20 14.5523 19.5523 15 19 15H13C12.4477 15 12 14.5523 12 14C12 13.4477 12.4477 13 13 13H19ZM19 9C19.5523 9 20 9.44772 20 10C20 10.5523 19.5523 11 19 11H13C12.4477 11 12 10.5523 12 10C12 9.44772 12.4477 9 13 9H19ZM19 4C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H19Z" />
</svg>
  )
};

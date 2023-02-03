
import React from 'react';

export const CalendarAdd: React.FunctionComponent<any> = ({
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
  <path d="M16 4C16.5523 4 17 4.44772 17 5V6C18.6569 6 20 7.34315 20 9C20 9.55228 19.5523 10 19 10C18.4872 10 18.0645 9.61396 18.0067 9.11662L18 9C18 8.44772 17.5523 8 17 8H7C6.44772 8 6 8.44772 6 9V10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H6V17C6 17.5523 6.44772 18 7 18H9C9.55228 18 10 18.4477 10 19C10 19.5523 9.55228 20 9 20H7C5.34315 20 4 18.6569 4 17V9C4 7.34315 5.34315 6 7 6V5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5V6H15V5C15 4.44772 15.4477 4 16 4ZM16 12C16.5523 12 17 12.4477 17 13V15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15H15V13C15 12.4477 15.4477 12 16 12Z" />
</svg>
  )
};
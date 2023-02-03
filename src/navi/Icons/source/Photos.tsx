
import React from 'react';

export const Photos: React.FunctionComponent<any> = ({
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
  <path d="M14 7C15.6569 7 17 8.34315 17 10V17C17 18.6569 15.6569 20 14 20H7C5.34315 20 4 18.6569 4 17V10C4 8.34315 5.34315 7 7 7H14ZM14 9H7C6.44772 9 6 9.44772 6 10V16.697L8.18627 13.4188C8.50017 12.9793 9.09949 12.8737 9.54124 13.159L9.64018 13.2318L12.7853 17.5193L15 15V10C15 9.44772 14.5523 9 14 9ZM17 4C18.5977 4 19.9037 5.24892 19.9949 6.82373L20 7V14C20 14.5523 19.5523 15 19 15C18.4872 15 18.0645 14.614 18.0067 14.1166L18 14V7C18 6.48716 17.614 6.06449 17.1166 6.00673L17 6H10C9.44772 6 9 5.55228 9 5C9 4.48716 9.38604 4.06449 9.88338 4.00673L10 4H17Z" />
</svg>
  )
};


import React from 'react';

export const OpenFolder: React.FunctionComponent<any> = ({
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
  <path d="M15 8H12.4776L11.1614 6.37144C10.9716 6.13652 10.6857 6 10.3837 6H7C5.34315 6 4 7.34315 4 9V15C4 16.5112 5.11737 17.7614 6.571 17.9696C6.67932 17.9895 6.7912 18 6.90598 18H7H15H16.2777C17.1281 18 17.8756 17.408 18.1092 16.5494L18.9256 13.5494C19.1821 12.6066 18.7518 11.6669 18 11.2392V11C18 9.34315 16.6569 8 15 8ZM16 11C16 10.4477 15.5523 10 15 10H12C11.698 10 11.4121 9.86348 11.2222 9.62856L9.90609 8H7C6.44772 8 6 8.44772 6 9V12.1455C6.31048 11.4549 6.97682 11 7.72234 11H16Z" />
</svg>
  )
};

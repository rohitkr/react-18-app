
import React from 'react';

export const Bulb: React.FunctionComponent<any> = ({
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
  <path d="M14 18C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H10C9.44772 20 9 19.5523 9 19C9 18.4477 9.44772 18 10 18H14ZM11.9998 4C15.5154 4 18 6.14732 18 9.55614C18 11.0345 17.4264 12.2346 16.3487 13.5712L15.4566 14.6387L15.3379 14.7907L15.2369 14.9317L15.1392 15.0851C15.0951 15.6025 14.6622 16 14.1429 16H9.85714C9.33783 16 8.90495 15.6025 8.86077 15.0851L8.76306 14.9317L8.66209 14.7906L8.54339 14.6386L7.65131 13.5711C6.5737 12.2346 6 11.0345 6 9.5562C6 6.1474 8.4845 4 11.9998 4ZM11.9998 6C9.52954 6 8 7.32201 8 9.5562C8 10.4132 8.33277 11.1752 9.02715 12.0851L9.29685 12.4232L9.68221 12.8819L10.1736 13.4747C10.3187 13.6608 10.4408 13.8331 10.5399 14H13.4601L13.5669 13.831C13.6432 13.7167 13.7297 13.5988 13.8265 13.4747L14.7917 12.3159L14.9729 12.0852C15.6673 11.1752 16 10.4132 16 9.5562C16 7.32197 14.4704 6 11.9998 6Z" />
</svg>
  )
};

import React from 'react';

export const Linkedin: React.FunctionComponent<any> = ({
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
  <path d="M18.6634 4C19.4016 4 20 4.59802 20 5.33663V18.6634C20 19.4016 19.402 20 18.6634 20H5.33663C4.59843 20 4 19.402 4 18.6634V5.33663C4 4.59843 4.59802 4 5.33663 4H18.6634ZM14.815 10C13.6878 10 12.9139 10.4945 12.5643 11.0722L12.5 11.1887V10.1H10.3333V17.7667H12.6667V14.053C12.6667 12.8083 13.125 12.0167 14.2267 12.0167C14.9792 12.0167 15.2991 12.6757 15.3307 13.8522L15.3333 14.053V17.7667H17.6667V13.5323C17.6667 11.246 17.1197 10 14.815 10ZM8.66667 10H6.33333V17.6667H8.66667V10ZM7.5 6C6.67167 6 6 6.67167 6 7.5C6 8.32833 6.67167 9 7.5 9C8.32833 9 9 8.32833 9 7.5C9 6.67167 8.32833 6 7.5 6Z" />
</svg>
  )
};

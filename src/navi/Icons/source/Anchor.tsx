
import React from 'react';

export const Anchor: React.FunctionComponent<any> = ({
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
  <path d="M12 4C13.1046 4 14 4.89543 14 6C14 6.73984 13.5983 7.38585 13.0011 7.73181L13 17.917C15.1189 17.5616 16.8612 16.0955 17.6079 14.138L17.657 14H16C14.9061 14 14.6271 12.5216 15.5736 12.0943L15.6838 12.0513L18.6838 11.0513C19.3313 10.8355 20 11.3174 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 11.3576 4.59234 10.8929 5.20188 11.0204L5.31623 11.0513L8.31623 12.0513C9.35398 12.3972 9.15113 13.888 8.11817 13.994L8 14H6.342L6.39209 14.138C7.13891 16.0957 8.88148 17.5619 11.0006 17.9171L10.9999 7.73239C10.4022 7.38657 10 6.74025 10 6C10 4.89543 10.8954 4 12 4Z" />
</svg>
  )
};

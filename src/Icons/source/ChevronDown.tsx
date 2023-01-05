
import React from 'react';

export const ChevronDown: React.FunctionComponent<any> = ({
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
  <path d="M18.7072 9.70725L12.7073 15.7073C12.3163 16.0983 11.6842 16.0983 11.2933 15.7073L5.29325 9.70725C4.90225 9.31625 4.90225 8.68425 5.29325 8.29325C5.68425 7.90225 6.31625 7.90225 6.70725 8.29325L12.0002 13.5862L17.2933 8.29325C17.6842 7.90225 18.3162 7.90225 18.7072 8.29325C18.9022 8.48825 19.0002 8.74425 19.0002 9.00025C19.0002 9.25625 18.9022 9.51225 18.7072 9.70725Z" />
</svg>
  )
};

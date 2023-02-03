
import React from 'react';

export const ChevronUp: React.FunctionComponent<any> = ({
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
  <path d="M18.7072 14.2933L12.7073 8.29325C12.3163 7.90225 11.6842 7.90225 11.2933 8.29325L5.29325 14.2933C4.90225 14.6842 4.90225 15.3163 5.29325 15.7073C5.68425 16.0983 6.31625 16.0983 6.70725 15.7073L12.0002 10.4142L17.2933 15.7073C17.6842 16.0983 18.3162 16.0983 18.7072 15.7073C18.9022 15.5122 19.0002 15.2562 19.0002 15.0002C19.0002 14.7442 18.9022 14.4883 18.7072 14.2933Z" />
</svg>
  )
};

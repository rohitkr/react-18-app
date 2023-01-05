
import React from 'react';

export const HeartFull: React.FunctionComponent<any> = ({
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
  <path d="M12 19L5.4776 12.9652C4.5248 12.0839 4 10.9103 4 9.66036C4 8.41045 4.5248 7.23678 5.4776 6.35477C7.2536 4.71131 10.0416 4.56353 12 5.9091C13.9584 4.56353 16.7464 4.71131 18.5224 6.35477C19.4752 7.23678 20 8.41045 20 9.66036C20 10.9103 19.4752 12.0839 18.5224 12.9652L12 19Z" />
</svg>
  )
};

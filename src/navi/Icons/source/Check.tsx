
import React from 'react';

export const Check: React.FunctionComponent<any> = ({
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
  <path d="M5.70711 11.2929C5.31658 10.9024 4.68342 10.9024 4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L9.29289 17.7071C9.69802 18.1122 10.36 18.0948 10.7433 17.669L19.7433 7.66897C20.1128 7.25846 20.0795 6.62617 19.669 6.25671C19.2585 5.88726 18.6262 5.92053 18.2567 6.33104L9.96181 15.5476L5.70711 11.2929Z" />
</svg>
  )
};

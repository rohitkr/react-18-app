
import React from 'react';

export const NearMe: React.FunctionComponent<any> = ({
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
  <path d="M4.54697 10.3598C3.81768 10.1167 3.81768 9.08512 4.54697 8.84202L18.9457 4.04243C19.5711 3.83398 20.166 4.42892 19.9576 5.05427L15.158 19.453C14.9149 20.1823 13.8833 20.1823 13.6402 19.453L11.3669 12.6331L4.54697 10.3598ZM8.59488 9.6009L12.948 11.052L14.3991 15.4051L17.3012 6.69879L8.59488 9.6009Z" />
</svg>
  )
};

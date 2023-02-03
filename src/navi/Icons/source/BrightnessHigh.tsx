
import React from 'react';

export const BrightnessHigh: React.FunctionComponent<any> = ({
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
  <path d="M12.6129 4.2097L12.7071 4.29289L14.415 6H17C17.5128 6 17.9355 6.38604 17.9933 6.88338L18 7V9.585L19.7071 11.2929C20.0676 11.6534 20.0953 12.2206 19.7903 12.6129L19.7071 12.7071L18 14.414V17C18 17.5128 17.614 17.9355 17.1166 17.9933L17 18H14.414L12.7071 19.7071C12.3466 20.0676 11.7794 20.0953 11.3871 19.7903L11.2929 19.7071L9.585 18H7C6.48716 18 6.06449 17.614 6.00673 17.1166L6 17V14.415L4.29289 12.7071C3.93241 12.3466 3.90468 11.7794 4.2097 11.3871L4.29289 11.2929L6 9.584V7C6 6.48716 6.38604 6.06449 6.88338 6.00673L7 6H9.584L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z" />
</svg>
  )
};
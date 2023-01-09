
import React from 'react';

export const BrightnessMedium: React.FunctionComponent<any> = ({
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
  <path d="M12.7071 4.29289L12.6129 4.2097C12.2206 3.90468 11.6534 3.93241 11.2929 4.29289L9.584 6H7L6.88338 6.00673C6.38604 6.06449 6 6.48716 6 7V9.584L4.29289 11.2929L4.2097 11.3871C3.90468 11.7794 3.93241 12.3466 4.29289 12.7071L6 14.415V17L6.00673 17.1166C6.06449 17.614 6.48716 18 7 18H9.585L11.2929 19.7071L11.3871 19.7903C11.7794 20.0953 12.3466 20.0676 12.7071 19.7071L14.414 18H17L17.1166 17.9933C17.614 17.9355 18 17.5128 18 17V14.414L19.7071 12.7071L19.7903 12.6129C20.0953 12.2206 20.0676 11.6534 19.7071 11.2929L18 9.585V7L17.9933 6.88338C17.9355 6.38604 17.5128 6 17 6H14.415L12.7071 4.29289ZM16 12C16 14.2091 14.2091 16 12 16V8C14.2091 8 16 9.79086 16 12Z" />
</svg>
  )
};
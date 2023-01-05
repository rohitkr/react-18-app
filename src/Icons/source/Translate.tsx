
import React from 'react';

export const Translate: React.FunctionComponent<any> = ({
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
  <path d="M12.1126 16.1212L12.8143 14.1735L11.077 12.3981C12.1936 11.0766 13.0396 9.53394 13.5632 7.86364H15.6825V5.95455H10.7595V4.5H8.92308V5.95455H4V7.85636H11.7616C11.3243 9.04643 10.6827 10.1775 9.84105 11.1879C9.27038 10.5043 8.79236 9.76282 8.40698 8.98538L8.34663 8.86364H6.47527L6.61468 9.18555C7.10994 10.3291 7.77824 11.4119 8.60687 12.3965L5.01763 16.0571L6.32479 17.4088L9.84127 13.7724L12.1126 16.1212Z" />
  <path d="M20 19.5L16.6703 10.3182H14.9683L11.6386 19.5H13.5057L14.2934 17.3182H17.3386L18.1333 19.5H20ZM16.6463 15.4091H14.9923L15.8193 13.1232L16.6463 15.4091Z" />
</svg>
  )
};

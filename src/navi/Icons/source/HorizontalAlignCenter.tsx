
import React from 'react';

export const HorizontalAlignCenter: React.FunctionComponent<any> = ({
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
  <path d="M10 12L9.99317 12.1175L9.96415 12.266L9.94011 12.3417L9.90635 12.4231L9.87533 12.4841L9.80367 12.5953L9.7485 12.6631L9.70711 12.7071L7.70711 14.7071L7.6129 14.7903C7.2533 15.0699 6.7467 15.0699 6.3871 14.7903L6.29289 14.7071L6.2097 14.6129C5.9301 14.2533 5.9301 13.7467 6.2097 13.3871L6.29289 13.2929L6.585 13H5C4.44772 13 4 12.5523 4 12C4 11.4872 4.38604 11.0645 4.88338 11.0067L5 11H6.585L6.29289 10.7071L6.2097 10.6129C5.90468 10.2206 5.93241 9.65338 6.29289 9.29289C6.65338 8.93241 7.22061 8.90468 7.6129 9.2097L7.70711 9.29289L9.70711 11.2929L9.80369 11.4048L9.854 11.4793L9.90633 11.5768L9.95026 11.6879L9.97976 11.7993L9.996 11.918L10 12ZM13 19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V5C11 4.44772 11.4477 4 12 4C12.5128 4 12.9355 4.38604 12.9933 4.88338L13 5V19ZM20 12C20 12.5523 19.5523 13 19 13H17.415L17.7071 13.2929C18.0676 13.6534 18.0953 14.2206 17.7903 14.6129L17.7071 14.7071C17.3466 15.0676 16.7794 15.0953 16.3871 14.7903L16.2929 14.7071L14.2929 12.7071L14.2515 12.6631L14.1963 12.5953L14.1247 12.4841L14.0937 12.4231L14.0599 12.3417L14.0358 12.266L14.0068 12.1175L14 12L14.004 11.918L14.0202 11.7993L14.0497 11.6879L14.0937 11.5768L14.146 11.4793L14.1963 11.4048L14.2929 11.2929L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0676 9.65338 18.0953 10.2206 17.7903 10.6129L17.7071 10.7071L17.415 11H19C19.5523 11 20 11.4477 20 12Z" />
</svg>
  )
};


import React from 'react';

export const VolumeOff: React.FunctionComponent<any> = ({
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
  <path d="M12 6.99998V17C12 17.824 11.0592 18.2944 10.4 17.8L6.66667 15H5C4.44772 15 4 14.5523 4 14V9.99998C4 9.4477 4.44772 8.99998 5 8.99998H6.66667L10.4 6.19998C11.0592 5.70556 12 6.17594 12 6.99998ZM15.7071 9.29288L17 10.585L18.2929 9.29288C18.6534 8.93239 19.2206 8.90466 19.6129 9.20969L19.7071 9.29288C20.0676 9.65336 20.0953 10.2206 19.7903 10.6129L19.7071 10.7071L18.415 12L19.7071 13.2929C20.0976 13.6834 20.0976 14.3166 19.7071 14.7071C19.3166 15.0976 18.6834 15.0976 18.2929 14.7071L17 13.415L15.7071 14.7071C15.3466 15.0676 14.7794 15.0953 14.3871 14.7903L14.2929 14.7071C13.9324 14.3466 13.9047 13.7794 14.2097 13.3871L14.2929 13.2929L15.585 12L14.2929 10.7071C13.9024 10.3166 13.9024 9.6834 14.2929 9.29288C14.6834 8.90235 15.3166 8.90235 15.7071 9.29288ZM10 8.99998L7.6 10.8C7.4269 10.9298 7.21637 11 7 11H6V13H7C7.21637 13 7.4269 13.0702 7.6 13.2L10 15V8.99998Z" />
</svg>
  )
};
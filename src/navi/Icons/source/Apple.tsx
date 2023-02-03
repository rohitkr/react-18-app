
import React from 'react';

export const Apple: React.FunctionComponent<any> = ({
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
  <path d="M14.7071 5.70711C15.0976 5.31658 15.0976 4.68342 14.7071 4.29289C14.3166 3.90237 13.6834 3.90237 13.2929 4.29289C12.074 5.51176 11.2986 7.09118 11.0718 8.78513C10.5992 8.72789 10.1694 8.61502 9.62771 8.42185L9.34758 8.3215L9.10712 8.23977C8.56747 8.06505 8.16494 8 7.625 8C5.23416 8 4 9.46577 4 12.3333C4 16.3043 5.46706 20 7.625 20C8.46833 20 9.07839 19.9066 9.83612 19.6674L10.5504 19.4261L10.7837 19.3522C11.2317 19.2183 11.5769 19.1667 12 19.1667L12.2405 19.1725L12.4243 19.1863C12.6697 19.2114 12.9202 19.2638 13.2173 19.3526L13.468 19.4322L14.1446 19.6611L14.429 19.7462C15.0778 19.9285 15.6371 20 16.375 20C18.5329 20 20 16.3043 20 12.3333C20 9.46577 18.7658 8 16.375 8C15.8265 8 15.4132 8.06892 14.873 8.24604L14.6661 8.31672L14.3709 8.42233L14.0939 8.51717C13.7368 8.63376 13.4238 8.71166 13.0987 8.76002C13.3129 7.61149 13.8693 6.5449 14.7071 5.70711ZM15.6936 10.086C15.9259 10.0217 16.1094 10 16.375 10C17.5778 10 18 10.5015 18 12.3333C18 15.288 16.9234 18 16.375 18C15.7353 18 15.3283 17.9377 14.766 17.7602L14.0902 17.5315L13.8055 17.4411L13.4923 17.3541C13.0848 17.25 12.712 17.1931 12.3114 17.1739L12.0232 17.1669L11.7118 17.1736C11.1036 17.2006 10.5709 17.3115 9.9143 17.53L9.21479 17.7665L8.98931 17.8333C8.5507 17.9542 8.17335 18 7.625 18C7.07657 18 6 15.288 6 12.3333C6 10.5015 6.42223 10 7.625 10C7.99839 10 8.21465 10.042 8.67651 10.2055L8.95455 10.3052L9.26961 10.4131C10.1943 10.7161 10.9516 10.8333 12 10.8333L12.3016 10.8297L12.6305 10.8165C13.4849 10.7685 14.1729 10.6163 15.0441 10.3056L15.3269 10.2043L15.5081 10.1425L15.6936 10.086Z" />
</svg>
  )
};
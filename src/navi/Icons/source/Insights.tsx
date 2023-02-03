
import React from 'react';

export const Insights: React.FunctionComponent<any> = ({
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
  <path d="M12.5936 3C12.5936 2.44772 12.1459 2 11.5936 2C11.0414 2 10.5936 2.44772 10.5936 3V3.99267C10.5936 4.54496 11.0414 4.99267 11.5936 4.99267C12.1459 4.99267 12.5936 4.54496 12.5936 3.99267V3ZM8.53452 11.1149C8.53452 9.14853 10.2708 7.64361 12.214 8.02526L12.2177 8.02598C13.3754 8.24877 14.3395 9.19334 14.5967 10.3952L14.5969 10.3961C14.8316 11.4882 14.5138 12.5134 13.8808 13.2287C13.2843 13.8995 12.8269 14.7366 12.6701 15.6785H10.5452C10.3978 14.7426 9.94163 13.9103 9.34888 13.2512L9.34889 13.2512L9.34595 13.2479C8.8422 12.6927 8.53452 11.939 8.53452 11.1149ZM10.5958 17.6785V18.1109H12.6114V17.6785H10.5958ZM6.53452 11.1149C6.53452 7.96363 9.34813 5.42537 12.5976 6.06238C14.5623 6.4413 16.1315 8.00991 16.5524 9.9767C16.924 11.7071 16.4211 13.3769 15.3773 14.5555L15.3758 14.5572C14.8872 15.1064 14.6114 15.7438 14.6114 16.3879V18.182C14.6114 19.2405 13.766 20.1109 12.7012 20.1109H10.506C9.44125 20.1109 8.59583 19.2405 8.59583 18.182V16.3241C8.59583 15.7203 8.33208 15.1121 7.86308 14.59C7.02929 13.6701 6.53452 12.4391 6.53452 11.1149ZM9.07497 21.6C9.07497 21.0477 9.52268 20.6 10.075 20.6H12.7609C13.3132 20.6 13.7609 21.0477 13.7609 21.6C13.7609 22.1523 13.3132 22.6 12.7609 22.6H10.075C9.52268 22.6 9.07497 22.1523 9.07497 21.6ZM5.52228 4.55361C5.91677 4.16708 6.5499 4.17353 6.93642 4.56801L7.63245 5.27837C8.01898 5.67285 8.01253 6.30598 7.61805 6.69251C7.22357 7.07904 6.59044 7.07259 6.20391 6.67811L5.50788 5.96775C5.12135 5.57327 5.1278 4.94014 5.52228 4.55361ZM4 9.74994C3.44772 9.74994 3 10.1977 3 10.7499C3 11.3022 3.44772 11.7499 4 11.7499H4.97266C5.52494 11.7499 5.97266 11.3022 5.97266 10.7499C5.97266 10.1977 5.52494 9.74994 4.97266 9.74994H4ZM17.2148 10.7499C17.2148 10.1977 17.6625 9.74994 18.2148 9.74994H19.1874C19.7397 9.74994 20.1874 10.1977 20.1874 10.7499C20.1874 11.3022 19.7397 11.7499 19.1874 11.7499H18.2148C17.6625 11.7499 17.2148 11.3022 17.2148 10.7499ZM17.6843 5.96313C18.0683 5.56616 18.0578 4.93309 17.6608 4.54911C17.2638 4.16514 16.6308 4.17567 16.2468 4.57264L15.5597 5.28299C15.1757 5.67996 15.1862 6.31303 15.5832 6.69701C15.9802 7.08098 16.6133 7.07045 16.9972 6.67348L17.6843 5.96313Z" />
</svg>
  )
};

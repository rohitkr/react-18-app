
import React from 'react';

export const Publish: React.FunctionComponent<any> = ({
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
  <path d="M11.2318 8.35982C11.6049 7.91204 12.2717 7.88219 12.684 8.27026L12.7682 8.35982L17.7682 14.3598C18.2863 14.9815 17.8879 15.9108 17.1132 15.994L17 16H15V19C15 19.4734 14.6711 19.8699 14.2293 19.9736L14.1166 19.9933L14 20H10C9.48716 20 9.06449 19.614 9.00673 19.1166L9 19V16H7C6.22924 16 5.7764 15.1828 6.10822 14.5448L6.16394 14.4506L6.23178 14.3598L11.2318 8.35982ZM12 10.562L9.135 14H10C10.4734 14 10.8699 14.3289 10.9736 14.7707L10.9933 14.8834L11 15V18H13V15C13 14.5266 13.3289 14.1301 13.7707 14.0264L13.8834 14.0067L14 14H14.864L12 10.562ZM19 4C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H19Z" />
</svg>
  )
};

import React from 'react';

export const Photo: React.FunctionComponent<any> = ({
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
  <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10ZM17 6C17.5523 6 18 6.44772 18 7V9.61339L13.8265 14.2043L9.41908 11.3996C8.76836 10.9855 7.90966 11.1324 7.43359 11.7392L6 13.5667V7C6 6.44772 6.44772 6 7 6H17ZM6 16.807V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V12.5866L14.7399 16.1727L14.1735 16.7957L13.4631 16.3437L8.72754 13.3301L6 16.807ZM17 4C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7C4 5.34315 5.34315 4 7 4H17Z" />
</svg>
  )
};

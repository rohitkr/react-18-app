
import React from 'react';

export const Stopwatch: React.FunctionComponent<any> = ({
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
  <path d="M12 6C15.866 6 19 9.13401 19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 9.13401 8.13401 6 12 6ZM12 8C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13C17 10.2386 14.7614 8 12 8ZM12 10C12.5523 10 13 10.4477 13 11V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V11C11 10.4477 11.4477 10 12 10ZM15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H9C8.44772 6 8 5.55228 8 5C8 4.44772 8.44772 4 9 4H15Z" />
</svg>
  )
};

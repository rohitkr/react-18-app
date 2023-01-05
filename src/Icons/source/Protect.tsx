
import React from 'react';

export const Protect: React.FunctionComponent<any> = ({
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
  <path d="M4.00492 8.08762L4.46284 12.2092C4.70591 14.3969 5.93628 16.3533 7.8028 17.52L11.576 19.8784C11.8354 20.0405 12.1646 20.0405 12.424 19.8784L16.1972 17.52C18.0637 16.3533 19.2941 14.3969 19.5372 12.2092L19.9951 8.08762C20.0336 7.74117 19.8433 7.40967 19.5248 7.26814L12.3248 4.06892C12.118 3.97703 11.882 3.97703 11.6752 4.06892L4.4752 7.26814C4.15666 7.40967 3.96643 7.74117 4.00492 8.08762ZM6.08963 8.73933L12 6.11313L17.9104 8.73933L17.5494 11.9883C17.3738 13.5684 16.4852 14.9814 15.1372 15.824L12 17.7849L8.86285 15.824C7.51479 14.9814 6.62617 13.5684 6.45061 11.9883L6.08963 8.73933Z" />
</svg>
  )
};

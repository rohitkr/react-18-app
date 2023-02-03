
import React from 'react';

export const Google: React.FunctionComponent<any> = ({
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
  <path d="M15.0685 8.36563C14.2425 7.57786 13.1402 7.1487 11.9997 7.16633C9.91272 7.16633 8.14022 8.57433 7.50824 10.4703C7.17314 11.4638 7.17314 12.5397 7.50824 13.5332L7.51118 13.5332C8.1461 15.4262 9.91566 16.8342 12.0027 16.8342C13.08 16.8342 14.0049 16.5587 14.7217 16.0719V16.0699C15.5653 15.5115 16.1414 14.6326 16.3207 13.639H11.9997V10.5585H19.5453C19.6394 11.0934 19.6835 11.6402 19.6835 12.184C19.6835 14.6171 18.8139 16.6743 17.3009 18.0675L17.3025 18.0688C15.9768 19.2916 14.1573 20 11.9997 20C8.97503 20 6.209 18.2951 4.85097 15.5938C3.71634 13.3333 3.71634 10.6702 4.85097 8.40972C6.209 5.70542 8.97503 4.00054 11.9997 4.00054C13.9868 3.97702 15.9063 4.72365 17.3525 6.08167L15.0685 8.36563Z" />
</svg>
  )
};
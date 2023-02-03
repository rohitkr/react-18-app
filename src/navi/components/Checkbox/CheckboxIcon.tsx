import React from "react";
import tokens from "../../tokens/build/json/tokens.json";

const tokenObj: { [key: string]: any } = tokens; //@fix

const sizeMapObj: { [key: string]: number } = Object.freeze({
  standard: 20,
  small: 16,
});
export const UnCheckedIcon = ({ size = "standard", disabled = false }) => {
  return (
    <svg
      width={sizeMapObj[size]}
      height={sizeMapObj[size]}
      viewBox={`0 0 ${sizeMapObj[size]} ${sizeMapObj[size]}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          size === "standard"
            ? "M16 0.5H4C2.067 0.5 0.5 2.067 0.5 4V16C0.5 17.933 2.067 19.5 4 19.5H16C17.933 19.5 19.5 17.933 19.5 16V4C19.5 2.067 17.933 0.5 16 0.5Z"
            : "M12 0.5H4C2.067 0.5 0.5 2.067 0.5 4V12C0.5 13.933 2.067 15.5 4 15.5H12C13.933 15.5 15.5 13.933 15.5 12V4C15.5 2.067 13.933 0.5 12 0.5Z"
        }
        stroke={
          !disabled
            ? tokenObj["checkbox-color-border-unchecked-default"]
            : tokenObj["checkbox-color-border-unchecked-disabled"]
        }
        fill={
          !disabled
            ? tokenObj["checkbox-color-background-unchecked-default"]
            : tokenObj["checkbox-color-background-unchecked-disabled"]
        }
        strokeWidth={tokenObj["border-width-small"]}
      />
    </svg>
  );
};

export const CheckedIcon = ({ size = "standard", disabled = false }) => {
  if (size === "standard") {
    return (
      <svg
        width={sizeMapObj[size]}
        height={sizeMapObj[size]}
        viewBox={`0 0 ${sizeMapObj[size]} ${sizeMapObj[size]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z"
          fill={
            !disabled
              ? tokenObj["checkbox-color-background-checked-default"]
              : tokenObj["checkbox-color-background-checked-disabled"]
          }
        />
        <path
          d="M6 9.66667L8.85436 12.6267C9.05099 12.8307 9.37758 12.8307 9.57421 12.6267L15 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0H4C1.79086 0 0 1.79086 0 4V12C0 14.2091 1.79086 16 4 16H12C14.2091 16 16 14.2091 16 12V4C16 1.79086 14.2091 0 12 0Z"
        fill={
          !disabled
            ? tokenObj["checkbox-color-background-checked-default"]
            : tokenObj["checkbox-color-background-checked-disabled"]
        }
      />
      <path
        d="M4 7.66667L6.85436 10.6267C7.05099 10.8307 7.37758 10.8307 7.57421 10.6267L13 5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const IndeterminateIcon = ({ size = "standard", disabled = false }) => {
  if (size === "standard") {
    return (
      <svg
        width={sizeMapObj[size]}
        height={sizeMapObj[size]}
        viewBox={`0 0 ${sizeMapObj[size]} ${sizeMapObj[size]}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0H4C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0Z"
          fill={
            !disabled
              ? tokenObj["checkbox-color-background-indeterminate-default"]
              : tokenObj["checkbox-color-background-indeterminate-disabled"]
          }
        />
        <path
          d="M13 9.5H7C6.72386 9.5 6.5 9.72386 6.5 10C6.5 10.2761 6.72386 10.5 7 10.5H13C13.2761 10.5 13.5 10.2761 13.5 10C13.5 9.72386 13.2761 9.5 13 9.5Z"
          fill="white"
          stroke="white"
        />
      </svg>
    );
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0H4C1.79086 0 0 1.79086 0 4V12C0 14.2091 1.79086 16 4 16H12C14.2091 16 16 14.2091 16 12V4C16 1.79086 14.2091 0 12 0Z"
        fill={
          !disabled
            ? tokenObj["checkbox-color-background-indeterminate-default"]
            : tokenObj["checkbox-color-background-indeterminate-disabled"]
        }
      />
      <path
        d="M11 7.5H5C4.72386 7.5 4.5 7.72386 4.5 8C4.5 8.27614 4.72386 8.5 5 8.5H11C11.2761 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.2761 7.5 11 7.5Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};

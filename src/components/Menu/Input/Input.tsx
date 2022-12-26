import React, { useState } from "react";
import baseTokens from "../../../tokens/build/json/tokens.json";
import Input from "@material-ui/core/Input";
import Box from "../../Box/Box";
import InputLabel from "@material-ui/core/InputLabel";
import { NaviInputProps } from "./Input.types";
import Tooltip from "../../Tooltip/Tooltip";
import { InfoCircle, CircleCheck, AlertCircle } from "tabler-icons-react";
import tokens from "../../../tokens/build/json/tokens.json";
import "./Input.scss";

const tokenObj: { [key: string]: any } = tokens;

const inputMinWidth = 280;

const TextInput = ({
  inputType = "default",
  label,
  maxCharacters,
  helperText,
  errorMessage,
  successMessage,
  required,
  moreInfo,
  minWidth,
  tooltipPlacement,
  size = 'large',
  ...props
}: NaviInputProps) => {

  const inputWidth = minWidth
    ? Math.max(minWidth, inputMinWidth)
    : inputMinWidth;

  const [inputValue, setInputValue] = React.useState(props.value || "");
  const [internalError, setInternalError] = useState("");
  const [characterCount, setCharacterCount] = useState(
    (typeof props.value === 'string' && props.value?.length) || 0
    // props.value?.length || 0
  );

  const CharacterLimitText = maxCharacters ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        minWidth: "55px",
        alignItems: "end",
        marginLeft: `${tokenObj["spacing-4"]}`,
        color: `${baseTokens["color-secondary-500"]}`,
      }}
    >
      {characterCount}/{maxCharacters}
    </div>
  ) : null;

  const inputProps = {
    ...props.inputProps,
    readOnly: inputType === "read-only",
    maxLength: maxCharacters,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCharacterCount((typeof props.value === 'string' && props.value?.length) || 0);
    setInputValue(value);
    props.onChange && props.onChange(e);
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const { value } = e.target;
    required && !value
      ? setInternalError("Empty input field")
      : setInternalError("");
    props.onBlur && props.onBlur(e);
  };
  let hoverClass;
  let errorClass = internalError ? "critical" : "";
  if (inputType === "disabled") {
    hoverClass = "";
  } else {
    if ((typeof inputValue === 'string' && inputValue?.length) || 0) {
      hoverClass = "filled-field";
    } else {
      hoverClass = "empty-field";
    }
  }

  console.log("size: ", size)

  return (<Box
    style={{ display: "inline-block" }}
    className={`navi-input-container ${props.className}`}
  >
    <InputLabel className="input-label">
      <div
        style={{
          wordBreak: "break-word",
          marginRight: `${tokenObj["spacing-2"]}`,
        }}
      >
        <span>
          {label}
          {required && label && (
            <div
              style={{
                display: "inline-block",
                marginLeft: `${tokenObj["spacing-2"]}`,
              }}
            >
              *
            </div>
          )}

          {moreInfo && (
            <div
              style={{
                display: "inline-block",
                marginLeft: `${tokenObj["spacing-2"]}`,
                verticalAlign: "middle",
              }}
            >
              <Tooltip
                position={tooltipPlacement || "top"}
                title={moreInfo}
                size="compact"
                style={{
                  paddingTop:
                    size === "large"
                      ? `${tokenObj["spacing-4"]}`
                      : `${tokenObj["spacing-2"]}`,
                }}
              >
                <InfoCircle
                  fill={baseTokens["color-secondary-500"]}
                  size={16}
                  color={`${baseTokens["color-primitive-white"]}`}
                  strokeWidth={2.5}
                />
              </Tooltip>
            </div>
          )}
        </span>
      </div>

      {CharacterLimitText}
    </InputLabel>
    <Input
      disabled={inputType === "disabled"}
      {...props}
      className={`
        base-input 
        ${size}
        ${inputType}
        ${hoverClass}
        ${errorClass}
        ${props.className}
      `}
      style={{ minWidth: inputWidth }}
      inputProps={inputProps}
      onBlur={handleBlur}
      onChange={handleInputChange}
    ></Input>


    {helperText ? (
      <InputLabel className="helper-text">{helperText}</InputLabel>
    ) : null}
    {(errorMessage && inputType === "critical") || internalError ? (
      <InputLabel className="error-message">
        <div style={{ display: "flex", alignItems: "center" }}>
          <AlertCircle
            size={16}
            strokeWidth={2.5}
            fill={`${baseTokens["color-critical-500"]}`}
            color={`${baseTokens["color-primitive-white"]}`}
          />
          {internalError || errorMessage}
        </div>
      </InputLabel>
    ) : null}
    {!!successMessage && inputType === "success" && !internalError ? (
      <InputLabel className="success-message">
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleCheck
            size={16}
            strokeWidth={2.5}
            fill={`${baseTokens["color-success-500"]}`}
            color={`${baseTokens["color-primitive-white"]}`}
          />
          <div>{successMessage}</div>
        </div>
      </InputLabel>
    ) : null}

  </Box>)
};

export default TextInput;

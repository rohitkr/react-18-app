import React, { useState } from "react";
import baseTokens from "../../tokens/build/json/tokens.json";
import TextField from "@material-ui/core/TextField";
import Box from "../Box/Box";
import InputLabel from "@material-ui/core/InputLabel";
import { NaviInputProps } from "./TextField.types";
import Tooltip from "../Tooltip/Tooltip";
import { InfoCircle, CircleCheck, AlertCircle } from "tabler-icons-react";
import tokens from "../../tokens/build/json/tokens.json";
import "./TextField.scss";

const tokenObj: { [key: string]: any } = tokens;

const INPUT_MIN_WIDTH = 280;
const INPUT_MAX_WIDTH = 280;
const INPUT_MIN_HEIGHT = 32;
const FOCUS_CLASS_NAME = 'navi-focused';

const TextInputElement = ({
  inputType = "default",
  label,
  maxCharacters,
  helperText,
  errorMessage,
  successMessage,
  required,
  moreInfo,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  tooltipPlacement,
  translate,
  size = "large",
  inputProps,
  innerRef,
  width,
  className='',
  inputClassName='',
  disabled,
  InputProps,
  variant,
  ...props
}: NaviInputProps) => {
  const inputMinWidth = minWidth
    ? Math.max(minWidth, INPUT_MIN_WIDTH)
    : INPUT_MIN_WIDTH;

  const inputMaxWidth = maxWidth
    ? Math.max(maxWidth, INPUT_MAX_WIDTH)
    : INPUT_MAX_WIDTH;

  const inputMinHeight = minHeight
    ? Math.max(minHeight, INPUT_MIN_HEIGHT)
    : INPUT_MIN_HEIGHT;

  const inputMaxHeight = maxHeight || "unset";

  const [focusClassName, setFocusClassName] = useState("");
  const [inputValue, setInputValue] = React.useState(props.value || "");
  const [internalError, setInternalError] = useState("");
  const [characterCount, setCharacterCount] = useState(
    (typeof props.value === "string" && props.value?.length) || 0
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

  inputProps = {
    ...inputProps,
    readOnly: inputType === "read-only",
    maxLength: maxCharacters,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCharacterCount(
      (typeof value === "string" && value?.length) || 0
    );
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
    setFocusClassName('');
    props.onBlur && props.onBlur(e);
  };
  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    setFocusClassName(FOCUS_CLASS_NAME);
    props.onFocus && props.onFocus(e);
  };

  return (
    <Box
      ref={innerRef}
      style={{
        display: "inline-block",
        width: width === 'auto' ? '100%' : ''
      }}
      className={`navi-input-container ${className}`}
    >
      <InputLabel className="navi-input-label">
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
      <TextField
        style={{
          minWidth: inputMinWidth,
          maxWidth: width === 'auto' ? '' : inputMaxWidth,
          // minHeight: inputMinHeight,
          // maxHeight: inputMaxHeight,
          width: width === 'auto' ? '100%' : width,
          ...inputProps.style
        }}
        inputProps={{
          ...inputProps,
          // "data-value": dataValue
        }}
        {...props}
        onFocus={handleFocus}
        disabled={inputType === "disabled" || disabled}
        className={`
          navi-text-input-base
          navi-base-input
          navi-${size}
          ${inputType === "disabled" ? "" : "navi-" + inputType}
          ${inputType === "disabled" || disabled ? 'navi-disabled' : ''}
          navi-${(typeof inputValue === "string" && inputValue?.length) ? 'filled-field' : 'empty-field'}
          ${internalError ? 'navi-critical' : ''}
          ${focusClassName}
          ${inputClassName}
        `.replace(/\n|\s+/g, ' ')}
        onBlur={handleBlur}
        onChange={handleInputChange}
        InputProps={{
          ...InputProps,
          className: `navi-textfield-input-container ${InputProps?.className}`,
        }}
      ></TextField>

      {helperText ? (
        <InputLabel className="navi-helper-text">{helperText}</InputLabel>
      ) : null}
      {(errorMessage && inputType === "critical") || internalError ? (
        <InputLabel className="navi-error-message">
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
        <InputLabel className="navi-success-message">
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
    </Box>
  );
};

const InputText = React.forwardRef<HTMLInputElement, NaviInputProps>(
  (props, ref) => {
    return <TextInputElement {...props} innerRef={ref} />;
  }
);
export default InputText;

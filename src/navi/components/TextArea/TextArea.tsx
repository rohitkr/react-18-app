import React from "react";
import Box from "./../Box/Box";
import { TextAreaProps } from "./TextArea.types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import baseTokens from "../../tokens/build/json/tokens.json";
import Tooltip from "../Tooltip/Tooltip";
import { InfoCircle, CircleCheck, AlertCircle } from "tabler-icons-react";
import { pxToRem } from "../../helpers/helpers";
import "./TextArea.scss";
import typographyObj from "../../tokens/build/json/tokens.json";
import tokens from "../../tokens/build/json/tokens.json";

const tokenObj: { [key: string]: any } = tokens;

const minHeightSize = pxToRem(108);
const minWidthSize = pxToRem(280);
const maxWidthSize = pxToRem(714);
const maxHeightSize = pxToRem(162);
const labelBaseStyles = () => {
  return {
    root: {
      lineHeight: typographyObj["text-label-medium-line-height"],
      fontSize: typographyObj["text-label-medium-font-size"],
      fontFamily: typographyObj["text-label-medium-font-family"],
      justifyContent: "space-between",
      fontWeight: Number(typographyObj["text-label-medium-font-weight"]),
      marginBottom: tokenObj["input-label-base-margin-bottom"],
      display: tokenObj["input-label-base-display"],
      color: tokenObj["input-label-base-color"],
    },
  };
};

const labelHelperTextStyles = () => {
  return {
    root: {
      marginTop: tokenObj["input-label-helper-margin-top"],
      lineHeight: typographyObj["text-body-04-line-height"],
      fontSize: typographyObj["text-body-04-font-size"],
      fontFamily: typographyObj["text-body-04-font-family"],
      fontWeight: Number(typographyObj["text-body-04-font-weight"]),
      color: tokenObj["input-label-helper-color"],
      wordBreak: tokenObj["input-label-helper-word-break"],
    },
  };
};

const labelErrorTextStyles = () => {
  return {
    root: {
      ...labelHelperTextStyles().root,
      color: tokenObj["input-label-error-color"],
    },
  };
};

const labelSuccessTextStyles = () => {
  return {
    root: {
      ...labelHelperTextStyles().root,
      color: tokenObj["input-label-success-color"],
    },
  };
};

const TextArea: React.FC<TextAreaProps> = (props) => {
  const {
    onChange,
    value,
    intent = "default",
    required,
    label,
    moreInfo,
    tooltipPlacement,
    maxCharacters,
    helperText,
    errorMessage,
    successMessage,
    placeholder,
    onClick,
    onBlur,
    disabled = false,
    maxHeight,
    maxWidth,
    height,
    width,
  } = props;

  const TextAreaEditableRef = React.useRef<HTMLDivElement>(null);
  const TextAreaReadOnlyRef = React.useRef<HTMLDivElement>(null);
  const PlaceholderRef = React.useRef<HTMLDivElement>(null);
  const TextAreaWrapperRef = React.useRef<HTMLDivElement>(null);
  const TextAreaContainerRef = React.useRef<HTMLDivElement>(null);

  const [textAreaContent, setTextAreaContent] = React.useState(value || "");
  const [textAreaInnerText, setTextAreaInnerText] = React.useState(value || "");
  const [internalError, setInternalError] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const onTextAreaResize = (e: any) => {
    const [mutation] = e;
    const { target } = mutation;
    const newWidth = target.style.width;
    if (newWidth && TextAreaContainerRef && TextAreaContainerRef.current) {
      const updatedWidth = pxToRem(Number(newWidth.slice(0, -2)));

      if (updatedWidth < minWidthSize) {
        TextAreaContainerRef.current.style.width = `${minWidthSize + 2}rem`;
      } else {
        TextAreaContainerRef.current.style.width = `${updatedWidth + 2}rem`;
      }
    }
  };

  const observer = new MutationObserver(onTextAreaResize);

  const onTextAreaFocus = (
    e: React.FocusEvent<HTMLDivElement | HTMLSpanElement, Element>
  ) => {
    setIsHovered(false);
    setIsFocused(true);
  };

  const onTextAreaBlur = (
    e: React.FocusEvent<HTMLDivElement | HTMLSpanElement, Element>
  ) => {
    setIsHovered(false);
    setIsFocused(false);
  };

  const onTextAreaHover = (
    e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>
  ) => {
    if (!isFocused) {
      setIsHovered(true);
    }
  };

  const onTextAreaHoverOut = (
    e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>
  ) => {
    setIsHovered(false);
  };

  const getBorderStyle = () => {
    if (intent === "success" && !internalError) {
      return tokenObj["textarea-type-success-outline"];
    } else if (intent === "critical" || internalError) {
      return tokenObj["textarea-type-critical-outline"];
    }
    if (disabled) {
      return tokenObj["textarea-type-disabled-outline"];
    }
    if (intent === "read-only") {
      return tokenObj["textarea-type-readonly-outline"];
    }
    if (isFocused) {
      return tokenObj["textarea-type-focus-outline"];
    }
    if (isHovered) {
      return tokenObj["textarea-type-hover-outline"];
    }
    if (textAreaContent.length) {
      return tokenObj["textarea-type-filled-outline"];
    }
    return tokenObj["textarea-type-root-outline"];
  };

  const getBackgroundStyles = () => {
    if (disabled || intent === "read-only") {
      return tokenObj["textarea-type-disabled-background"];
    }
    if (textAreaContent.length && isHovered) {
      return tokenObj["textarea-type-disabled-background"];
    }
    return null;
  };

  React.useEffect(() => {
    let config = {
      attributes: true,
      subtree: true,
      attributeFilter: ["style"],
      attributeOldValue: true,
    };
    if (TextAreaWrapperRef && TextAreaWrapperRef.current) {
      observer.observe(TextAreaWrapperRef.current, config);
    }
    if (
      value &&
      PlaceholderRef.current &&
      TextAreaEditableRef.current &&
      TextAreaReadOnlyRef.current
    ) {
      PlaceholderRef.current.style.display = "none";
      const valueNodeEditableRef = document.createElement("div");
      const valueNodeReadOnlyRef = document.createElement("div");
      valueNodeEditableRef.textContent = value;
      valueNodeReadOnlyRef.textContent = value;
      if (!TextAreaEditableRef.current.firstChild) {
        TextAreaEditableRef.current.append(valueNodeEditableRef);
        TextAreaReadOnlyRef.current.append(valueNodeReadOnlyRef);
      }
    } else {
      if (placeholder && PlaceholderRef.current) {
        PlaceholderRef.current.style.display = "block";
        PlaceholderRef.current.className = "wfx-textarea-placeholder";
        PlaceholderRef.current.innerText = "Enter text here";
      }
    }
    return function removeMutationObserver() {
      observer.disconnect();
    };
  }, []);

  React.useEffect(() => {
    if (textAreaContent.length === 0 && placeholder && PlaceholderRef.current) {
      PlaceholderRef.current.style.display = "block";
      PlaceholderRef.current.className = "wfx-textarea-placeholder";
      PlaceholderRef.current.innerText = placeholder;
    } else {
      if (PlaceholderRef.current) {
        PlaceholderRef.current.style.display = "none";
      }
    }
  }, [textAreaContent]);

  React.useEffect(() => {
    if (value && TextAreaEditableRef.current) {
      TextAreaEditableRef.current.textContent = value;
      formatDocument(value, value);
    }
  }, []);

  const borderStyle = getBorderStyle();
  const backgroundStyle = getBackgroundStyles();

  const InputLabelWithStyles = withStyles(labelBaseStyles)(InputLabel);

  const HelperTextWithStyles = withStyles(labelHelperTextStyles)(InputLabel);
  const ErrorMessageWithStyles = withStyles(labelErrorTextStyles)(InputLabel);
  const SuccessMessageWithStyles = withStyles(labelSuccessTextStyles)(
    InputLabel
  );
  const CharacterLimitText = React.useMemo(() => {
    let numberCount;
    if (maxCharacters && textAreaInnerText.length > maxCharacters) {
      numberCount = <>{maxCharacters - textAreaInnerText.length}</>;
    } else if (textAreaInnerText === "\n") {
      numberCount = 0;
    } else {
      numberCount = textAreaInnerText.length;
    }
    return maxCharacters ? (
      <Box
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          minWidth: "55px",
          alignItems: "end",
          marginLeft: `${tokenObj["spacing-4"]}`,
          color:
            textAreaInnerText.length > maxCharacters
              ? `${baseTokens["color-critical-200"]}`
              : `${baseTokens["color-secondary-500"]}`,
        }}
      >
        {numberCount}/{maxCharacters}
      </Box>
    ) : null;
  }, [maxCharacters, textAreaInnerText]);

  React.useEffect(() => {
    if (maxCharacters && textAreaInnerText.length > maxCharacters) {
      setInternalError("Max charachter reached");
    } else if (maxCharacters && textAreaInnerText.length <= maxCharacters) {
      setInternalError("");
    }
  }, [textAreaInnerText]);

  const onInput = (e: React.ChangeEvent<HTMLDivElement & HTMLSpanElement>) => {
    const { textContent, innerText } = e.target;
    const formattedInnerText = innerText.replace(/(\n\n|\r\n|\r|\n)/gi, "<lb>");
    formatDocument(formattedInnerText, textContent || "");
    setTextAreaInnerText(formattedInnerText.replace(/<lb>/gi, "\n"));
    onChange &&
      onChange({
        event: e,
        value: formattedInnerText.replace(/<lb>/gi, "\n"),
      });
  };

  const formatDocument = (innerText: string, textContent: string) => {
    let currentLength = 0;
    let spanOn = false;
    if (TextAreaReadOnlyRef.current) {
      TextAreaReadOnlyRef.current.firstChild?.remove();
      const newChild = document.createElement("div");
      TextAreaReadOnlyRef.current.appendChild(newChild);
      TextAreaReadOnlyRef.current.className = "wfx-textarea-readonly";
    }
    let formattedHTML = innerText.split("<lb>");
    if (maxCharacters) {
      formattedHTML.forEach((text: string, index: number) => {
        if (!text || !text.length) {
          const element = TextAreaReadOnlyRef.current?.firstChild;
          const divElement = document.createElement("div");
          const brElement = document.createElement("br");
          divElement.appendChild(brElement);
          element?.appendChild(divElement);
          if (formattedHTML[index + 1] && formattedHTML[index + 1].length) {
            currentLength = currentLength + 2;
          } else {
            currentLength = currentLength + 1;
          }
        } else if (currentLength + text.length > maxCharacters && !spanOn) {
          const position = maxCharacters - currentLength;
          const unstyledText = text.slice(0, position).replace("&nbsp;", " ");
          const spanText = text.slice(position).replace("&nbsp;", " ");
          const spanElement = document.createElement("span");
          spanElement.className = "highlight";
          const spanTextNode = document.createTextNode(spanText);
          spanElement.appendChild(spanTextNode);
          const element = TextAreaReadOnlyRef.current?.firstChild;
          const newElem = document.createElement("div");
          const unstyledNewText = document.createTextNode(unstyledText);
          newElem.append(unstyledNewText);
          newElem.appendChild(spanElement);
          spanOn = true;
          currentLength = currentLength + text.length;
          element?.appendChild(newElem);
        } else if (spanOn) {
          const element = TextAreaReadOnlyRef.current?.firstChild;
          const newElem = document.createElement("div");
          const spanElement = document.createElement("span");
          const spanTextNode = document.createTextNode(text);
          spanElement.className = "highlight";
          spanElement.appendChild(spanTextNode);
          newElem.appendChild(spanElement);
          element?.appendChild(newElem);
          currentLength = currentLength + text.length;
        } else {
          const element = TextAreaReadOnlyRef.current?.firstChild;
          const newElem = document.createElement("div");
          const newText = document.createTextNode(text);
          newElem.appendChild(newText);
          element?.appendChild(newElem);
          currentLength = currentLength + text.length;
        }
      });
    }
    setTextAreaContent(textContent);
  };

  const onKeyPress = (
    e: React.KeyboardEvent<HTMLSpanElement | HTMLDivElement>
  ) => {
    if (PlaceholderRef.current) PlaceholderRef.current.style.display = "none";
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLSpanElement | HTMLDivElement>
  ) => {
    if (e.keyCode === 13 && e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLDivElement & HTMLSpanElement>
  ) => {
    if (required && !textAreaContent.length) {
      setInternalError("Empty input field");
    } else if (maxCharacters && textAreaContent.length > maxCharacters) {
      setInternalError("Max charachter reached");
    } else {
      setInternalError("");
    }
    onBlur && onBlur(e);
  };

  const onPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    if (!disabled && intent !== "read-only") {
      var text = e.clipboardData.getData("text/plain");
      if (TextAreaEditableRef.current) {
        formatDocument(
          TextAreaEditableRef.current.textContent + text,
          TextAreaEditableRef.current.textContent + text
        );
        if (
          maxCharacters &&
          (TextAreaEditableRef.current.textContent + text).length >
            maxCharacters
        ) {
          setInternalError("Max charachter reached");
        } else if (maxCharacters && textAreaInnerText.length <= maxCharacters) {
          setInternalError("");
        }
        TextAreaEditableRef.current.textContent =
          TextAreaEditableRef.current.textContent + text;
      }
    }
  };

  return (
    <Box
      ref={TextAreaContainerRef}
      display="inline-block"
      minHeight={`${minHeightSize}rem`}
      minWidth={`${minWidthSize}rem`}
    >
      <InputLabelWithStyles>
        <Box
          style={{
            wordBreak: "break-word",
          }}
        >
          <Box component={"span"} display="flex" alignItems="center">
            {label}
            {required && label && (
              <Box
                style={{
                  display: "inline-block",
                  marginLeft: `${tokenObj["spacing-2"]}`,
                  color: tokenObj["color-critical-400"],
                }}
              >
                *
              </Box>
            )}

            {moreInfo && (
              <Box
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
                    paddingTop: `${tokenObj["spacing-2"]}`,
                  }}
                >
                  <InfoCircle
                    size={16}
                    color={`${baseTokens["color-secondary-500"]}`}
                    strokeWidth={2.5}
                  />
                </Tooltip>
              </Box>
            )}
          </Box>
        </Box>

        {CharacterLimitText}
      </InputLabelWithStyles>

      <Box
        ref={TextAreaWrapperRef}
        borderRadius={tokenObj["textarea-type-root-border-radius"]}
        className="wfx-textarea-wrapper"
        style={{
          resize: intent === "read-only" || disabled ? "none" : "both",
          outline: borderStyle,
        }}
        height={height}
        width={width}
        minHeight={`${minHeightSize}rem`}
        minWidth={`${minWidthSize}rem`}
        maxWidth={maxWidth || `${maxWidthSize}rem`}
        maxHeight={maxHeight || `${maxHeightSize}rem`}
        padding="12px 16px"
        onMouseEnter={onTextAreaHover}
        onMouseLeave={onTextAreaHoverOut}
        onFocus={onTextAreaFocus}
        onBlur={onTextAreaBlur}
        backgroundColor={backgroundStyle}
        onPaste={onPaste}
      >
        <Box
          ref={PlaceholderRef}
          component="span"
          className="wfx-textarea-placeholder"
        />
        <Box
          minHeight={`${minHeightSize}rem`}
          minWidth={`${minWidthSize}rem`}
          className="wfx-textarea-editable"
          ref={TextAreaEditableRef}
          contentEditable={
            intent === "read-only" || disabled ? "false" : "true"
          }
          spellCheck="false"
          onInput={onInput}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
          onClick={onClick}
        />
        <Box
          minHeight={`${minHeightSize}rem`}
          minWidth={`${minWidthSize}rem`}
          backgroundColor="transparent"
          ref={TextAreaReadOnlyRef}
          className="wfx-textarea-readonly"
          contentEditable={
            intent === "read-only" || disabled ? "false" : "true"
          }
          spellCheck="false"
        />
      </Box>
      {helperText ? (
        <HelperTextWithStyles>{helperText}</HelperTextWithStyles>
      ) : null}
      {(errorMessage && intent === "critical") || internalError ? (
        <ErrorMessageWithStyles>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AlertCircle
              size={16}
              strokeWidth={2.5}
              color={`${baseTokens["color-critical-500"]}`}
            />
            <Box marginLeft="4px">{internalError || errorMessage}</Box>
          </div>
        </ErrorMessageWithStyles>
      ) : null}
      {!!successMessage && intent === "success" && !internalError ? (
        <SuccessMessageWithStyles>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CircleCheck
              size={16}
              strokeWidth={2.5}
              color={`${baseTokens["color-success-500"]}`}
            />
            <Box marginLeft="4px">{successMessage}</Box>
          </div>
        </SuccessMessageWithStyles>
      ) : null}
    </Box>
  );
};

export default TextArea;

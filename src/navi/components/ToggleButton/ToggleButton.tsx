import React from "react";
import { default as tokens } from "../../tokens/build/json/tokens.json";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Tooltip from "../Tooltip/Tooltip";
import "./ToggleButton.scss";
import {
  ToggleButtonOptionsProps,
  ToggleButtonProps,
} from "./ToggleButton.types";

const tokenObj: { [key: string]: any } = tokens;

const ToggleButton: React.FC<ToggleButtonProps> = ({
  options,
  buttonType = "icon",
  defaultSelected,
  intent = "info",
  size = "large",
  onSelect,
  disabled,
}) => {
  const [selected, setSelected] = React.useState(
    defaultSelected || options?.[0].id
  );

  const onChange = (options: ToggleButtonOptionsProps) => {
    setSelected(options.id);
    onSelect(options);
  };

  // according to the selection change variant to match the intent
  const getVariant = (s: ToggleButtonOptionsProps) =>
    s.id === selected
      ? ["info-light", "muted-light"].includes(intent)
        ? "selected"
        : "primary"
      : "tertiary";

  const isInfo = ["info-light", "info"].includes(intent);

  return (
    <Box
      className={`navi-toggle-button-container ${
        disabled
          ? "navi-toggle-button-container--disabled"
          : `navi-toggle-button-container--${intent}`
      }`}
    >
      {options?.map((s, i) => {
        return (
          <React.Fragment key={String(s.id)}>
            <div>
              {s.tooltipTitle ? (
                <div
                  style={{
                    display: "inline-block",
                    marginLeft: `${tokenObj["spacing-2"]}`,
                    verticalAlign: "middle",
                  }}
                >
                  <Tooltip
                    title={s.tooltipTitle}
                    position={s.tooltipPlacement || "top"}
                    size={size === "small" ? "compact" : "relaxed"}
                  >
                    <Button
                      buttonType={buttonType}
                      variant={getVariant(s)}
                      intent={isInfo ? "info" : "muted"}
                      size={size}
                      rounded={false}
                      disabled={disabled}
                      onClick={() => onChange(s)}
                      className={
                        i === 0
                          ? "navi-toggle-button--first-button"
                          : i === options.length - 1
                          ? "navi-toggle-button--last-button"
                          : "navi-toggle-button--button"
                      }
                    >
                      {buttonType === "button" ? s?.text : s?.icon}
                    </Button>
                  </Tooltip>
                </div>
              ) : (
                <Button
                  buttonType={buttonType}
                  variant={getVariant(s)}
                  intent={isInfo ? "info" : "muted"}
                  size={size}
                  rounded={false}
                  disabled={disabled}
                  onClick={() => onChange(s)}
                  className={
                    i === 0
                      ? "navi-toggle-button--first-button"
                      : i === options.length - 1
                      ? "navi-toggle-button--last-button"
                      : "navi-toggle-button--button"
                  }
                >
                  {buttonType === "button" ? s?.text : s?.icon}
                </Button>
              )}
            </div>

            {options.length !== i + 1 && (
              <Divider
                orientation="vertical"
                color={
                  disabled
                    ? tokenObj["toggle-button-type-root-disabled-color"]
                    : isInfo
                    ? tokenObj["toggle-button-type-info-color"]
                    : tokenObj["toggle-button-type-muted-color"]
                }
              />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default ToggleButton;

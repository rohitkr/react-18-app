import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import { RadioGroupProps } from "./RadioGroup.types";
import RadioOption from "./RadioOption";

import "./RadioGroup.scss";

const radioGroupStartHorzStyles = makeStyles({
  root: {
    flexDirection: "row-reverse",
  },
});

const emptyStyles = makeStyles({
  root: {},
});

export default function NaviRadioGroup({
  size = "standard",
  labelPlacement = "end",
  orientation = "vertical",
  spacing = "lg",
  options = [],
  justify = false,
  ...rest
}: RadioGroupProps) {
  let splclass;

  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  if (labelPlacement === "start" && orientation === "horizontal") {
    splclass = radioGroupStartHorzStyles().root;
  } else {
    splclass = emptyStyles().root;
  }

  return (
    <RadioGroup
      value={value}
      onChange={handleChange}
      row={orientation === "horizontal"}
      className={splclass}
      {...rest}
    >
      {options.map((radioOptionProps) => {
        return (
          <RadioOption
            key={radioOptionProps.value}
            size={size}
            labelPlacement={labelPlacement}
            justify={justify}
            spacing={spacing}
            orientation={orientation}
            {...radioOptionProps}
          />
        );
      })}
    </RadioGroup>
  );
}

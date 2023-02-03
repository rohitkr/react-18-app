/* eslint-disable-file */

import React from "react";
import RadioGroup from "./RadioGroup";

import { render } from "@testing-library/react";

const TestRadio = () => {
  return (
    <RadioGroup
      options={[
        { label: "Radio1", value: "Radio1", role: "radio" },
        { label: "Radio2", value: "Radio2" },
      ]}
      data-testid="sample-radiogroup"
    />
  );
};

describe("<RadioGroup />", () => {
  test("render component", async () => {
    const baseRadioDom = render(<TestRadio />);
    const rgEl: HTMLElement = await baseRadioDom.getByTestId("sample-radiogroup");

    expect(rgEl).toBeInTheDocument();

  });
});

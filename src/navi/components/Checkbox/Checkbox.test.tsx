import React from "react";
import { render } from '@testing-library/react'
import { CheckboxProps } from "./Checkbox.types";
import Checkbox from "./Checkbox";

const CheckboxRender = (props: CheckboxProps) => {
  return (
    <Checkbox
      label={"Option 1"}
      value={"1"}
      data-testid="sample-checkbox"
    />
  );
};

describe("Test Checkbox Component", () => {
  const baseDom = render(<CheckboxRender />);
  const eleRef = baseDom.getByTestId("sample-checkbox");

  it("Checkbox should be in the document.", () => {
    expect(eleRef).toBeInTheDocument();
  });

});

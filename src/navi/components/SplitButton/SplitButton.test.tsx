
import React from "react";
import { render } from "@testing-library/react";

import SplitButton from "./SplitButton";
import { SplitButtonProps } from "./SplitButton.types";

describe("Test Component", () => {
  let props: SplitButtonProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SplitButton {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SplitButton");

    expect(component).toHaveTextContent("harvey was here");
  });
});

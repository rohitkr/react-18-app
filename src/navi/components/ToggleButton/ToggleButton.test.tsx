import { render } from "@testing-library/react";
import React from "react";

import ToggleButton from "./ToggleButton";
import { ToggleButtonProps } from "./ToggleButton.types";

describe("Test Component", () => {
  let props: ToggleButtonProps;

  beforeEach(() => {});

  const renderComponent = () => render(<ToggleButton {...props} />);

  it("should render foo text correctly", () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId("ToggleButton");

    expect(component).toHaveTextContent("harvey was here");
  });
});

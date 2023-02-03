
import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("Test Component", () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      // foo: "bar"
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it("should render foo text correctly", () => {
    // props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveTextContent("harvey was here");
  });
});

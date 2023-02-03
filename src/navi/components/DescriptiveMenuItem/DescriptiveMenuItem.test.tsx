
import React from "react";
import { render } from "@testing-library/react";

import DescriptiveMenuItem from "./DescriptiveMenuItem";
import { DescriptiveMenuItemProps } from "./DescriptiveMenuItem.types";

describe("Test Component", () => {
  let props: DescriptiveMenuItemProps;

  beforeEach(() => {
    props = {
      value: "bar"
    };
  });

  const renderComponent = () => render(<DescriptiveMenuItem {...props} />);

  it("should render value text correctly", () => {
    props.value = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DescriptiveMenuItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});

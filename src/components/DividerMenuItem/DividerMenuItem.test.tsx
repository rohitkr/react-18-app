
import React from "react";
import { render } from "@testing-library/react";

import DividerMenuItem from "./DividerMenuItem";
import { DividerMenuItemProps } from "./DividerMenuItem.types";

describe("Test Component", () => {
  let props: DividerMenuItemProps;

  beforeEach(() => {
    props = {
      value: "bar"
    };
  });

  const renderComponent = () => render(<DividerMenuItem {...props} />);

  it("should render value text correctly", () => {
    props.value = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DividerMenuItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});


import React from "react";
import { render } from "@testing-library/react";

import EmptyStateMenuItem from "./EmptyStateMenuItem";
import { EmptyStateMenuItemProps } from "./EmptyStateMenuItem.types";

describe("Test Component", () => {
  let props: EmptyStateMenuItemProps;

  beforeEach(() => {
    props = {
      value: "bar"
    };
  });

  const renderComponent = () => render(<EmptyStateMenuItem {...props} />);

  it("should render value text correctly", () => {
    props.value = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("EmptyStateMenuItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});

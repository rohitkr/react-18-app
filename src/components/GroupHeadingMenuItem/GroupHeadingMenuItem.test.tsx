
import React from "react";
import { render } from "@testing-library/react";

import GroupHeadingMenuItem from "./GroupHeadingMenuItem";
import { GroupHeadingMenuItemProps } from "./GroupHeadingMenuItem.types";

describe("Test Component", () => {
  let props: GroupHeadingMenuItemProps;

  beforeEach(() => {
    props = {
      value: "bar"
    };
  });

  const renderComponent = () => render(<GroupHeadingMenuItem {...props} />);

  it("should render value text correctly", () => {
    props.value = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("GroupHeadingMenuItem");

    expect(component).toHaveTextContent("harvey was here");
  });
});

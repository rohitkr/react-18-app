
import React from "react";
import { render } from "@testing-library/react";

import Menu from "./Menu";
import { MenuProps } from "./Menu.types";

describe("Test Component", () => {
  let props: MenuProps;

  beforeEach(() => {
    props = {
      open: true,
      data: [{
        title: ""
      }]
    };
  });

  const renderComponent = () => render(<Menu {...props} />);

  it("should render foo text correctly", () => {
    // props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Menu");

    expect(component).toHaveTextContent("harvey was here");
  });
});
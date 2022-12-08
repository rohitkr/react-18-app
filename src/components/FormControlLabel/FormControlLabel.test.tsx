import React from "react";
import { render } from "@testing-library/react";

import FormControlLabel from "./FormControlLabel";
import { FormControlLabelProps } from "./FormControlLabel.types";

describe("Test form label component", () => {
  let props: FormControlLabelProps;

  beforeEach(() => {
    props = {
      label: "Test",
      control: <input type="checkbox" />,
      "data-testid": "FormControlLabel"
    };
  });

  const renderComponent = () => render(<FormControlLabel {...props} />);

  it("should render the label text correctly", () => {
    props.label = "modified label";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormControlLabel");

    expect(component).toHaveTextContent("modified label");
  });
});

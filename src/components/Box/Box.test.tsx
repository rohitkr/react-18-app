import React from "react";
import { render } from "@testing-library/react";

import Box from "./Box";
import { BoxProps } from "./Box.types";

const TextBoxComponent = (props: BoxProps) => {
  return (
    <Box data-testid="test-box" {...props}>
      This is a text box
    </Box>
  );
};

describe("Test Component", () => {
  const baseDom = render(<TextBoxComponent />);
  const boxEl = baseDom.getByTestId("test-box");
  it("should render foo text correctly", () => {
    expect(boxEl).toBeInTheDocument();
  });
});
